import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import { test } from "node:test";

// Uses the existing production build; no browser or additional test dependency required.
test("production routes and image optimization", { timeout: 120_000 }, async (t) => {
  const socket = createServer();
  socket.listen(0, "127.0.0.1");
  await once(socket, "listening");
  const { port } = socket.address();
  await new Promise((resolve, reject) => socket.close((error) => error ? reject(error) : resolve()));

  const server = spawn(process.execPath, ["node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", String(port)], {
    env: { ...process.env, NODE_ENV: "production" },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  server.stdout.on("data", (chunk) => { output += chunk; });
  server.stderr.on("data", (chunk) => { output += chunk; });
  t.after(async () => {
    if (server.exitCode === null) {
      const exited = once(server, "exit");
      server.kill();
      await exited;
    }
  });
  const base = `http://127.0.0.1:${port}`;
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    try {
      const response = await fetch(base, { signal: AbortSignal.timeout(1000) });
      await response.text();
      if (response.ok) { ready = true; break; }
    } catch { /* Server may still be starting. */ }
    assert.equal(server.exitCode, null, output);
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  assert.ok(ready, `Server did not become ready: ${output}`);

  async function page(path, status = 200) {
    // Loading boundaries can send status 200 before a dynamic page calls notFound.
    const response = await fetch(base + path, {
      headers: { "user-agent": "Twitterbot/1.0" },
      signal: AbortSignal.timeout(15_000),
    });
    const html = await response.text();
    if (status === 404 && response.status === 200 && /\/(invalid-id)$/.test(path)) {
      assert.match(html, /NEXT_HTTP_ERROR_FALLBACK;404/);
      assert.match(html, /name="robots" content="noindex"/);
    } else {
      assert.equal(response.status, status, `${path}: ${output}`);
    }
    assert.ok(!html.includes("AIza"), `Hardcoded Google key found at ${path}`);
    return html;
  }

  for (const path of ["/", "/clients", "/business-partners", "/cooperating-vendors", "/training", "/training-class", "/teams", "/ebook"]) {
    await page(path);
  }
  for (const vendor of ["aruba", "cisco", "comptia", "h3c", "huawei", "juniper", "mikrotik", "ruckus", "ruijie"]) {
    const list = await page(`/training-class/${vendor}-class`);
    assert.ok(!list.includes("Class Not Found"), vendor);
    assert.match(list, new RegExp(`/training-class/${vendor}-class/1`));
    const detail = await page(`/training-class/${vendor}-class/1`);
    assert.match(detail, /Investment|Training/);
    await page(`/training-class/${vendor}-class/invalid-id`, 404);
  }
  const filtered = await page("/training-class?q=CCNA&vendor=cisco");
  assert.match(filtered, /CCNA/);
  assert.ok(!filtered.includes('href="/training-class/mikrotik-class/1"'));
  const empty = await page("/training-class?q=nonexistent-course-xyz");
  assert.match(empty.replace(/<!--.*?-->/g, ""), /0\s+courses\s+found/);
  assert.match(empty, /No courses match these filters/);
  const reset = await page("/training-class");
  assert.match(reset, /href="\/training-class\/mikrotik-class\/1"/);
  const legacyTeam = await fetch(base + "/teams/1", { redirect: "manual" });
  if (legacyTeam.status === 200) {
    // A loading boundary may flush headers before the server redirects.
    const html = await legacyTeam.text();
    assert.match(html, /NEXT_REDIRECT;replace;\/teams#danu-wiyoto;307;/);
    assert.match(html, /http-equiv="refresh" content="1;url=\/teams#danu-wiyoto"/);
  } else {
    assert.equal(legacyTeam.status, 307);
    assert.equal(legacyTeam.headers.get("location"), "/teams#danu-wiyoto");
  }
  await page("/teams/invalid-id", 404);
  await page("/ebook/1");
  await page("/ebook/invalid-id", 404);
  for (const path of ["/components/footer", "/components/map", "/components/navigation/navbar", "/components/bak/navbar", "/missing-page"]) {
    await page(path, 404);
  }
  const image = await fetch(`${base}/_next/image?url=%2Fwall-banner-1.jpg&w=640&q=75`, { signal: AbortSignal.timeout(15_000) });
  assert.equal(image.status, 200, output);
  assert.match(image.headers.get("content-type"), /^image\//);
  assert.ok((await image.arrayBuffer()).byteLength > 0);
});
