# bestpath-network-web

Bestpath-Network website application.

## Runtime and installation

Use Node.js 24 LTS and npm 10 or newer. The runtime is declared in [.node-version](.node-version) and [package.json](package.json).

Install reproducibly with **npm ci**, then run **npm run dev** and open http://localhost:3000.

For optional Google Maps Embed API configuration, copy [.env.example](.env.example) to a local environment file and supply a restricted key. The iframe URL is public: restrict the key by HTTP referrer and API in Google Cloud. Without a key, the application uses the keyless Google Maps iframe. Restart development or rebuild production after changing this build-time configuration.

## Validation

Run these commands in order:

1. **npm run lint**
2. **npm run typecheck**
3. **npm run build**
4. **npm test**
5. **npm audit --omit=dev**

The [smoke test](tests/smoke.test.mjs) starts and stops its own production server on a temporary local port. It requires a successful production build. It verifies core routes, training lists/details, missing IDs, ebook pages, removed internal component routes, and image optimization. It does not replace browser interaction or visual testing.

## Production

Run **npm run build**, then **npm start**. These commands work with Windows cmd and do not require a custom server. The default port is 3000; **npm start -- --port 3001** selects another port. Configure HTTPS, process restart, reverse proxy, and environment settings in the hosting platform.

Build machines need development dependencies and network access for Google fonts. Do not expose the development server publicly. Use the same supported runtime for installation, build, and startup.

Before rollout, test the mobile menu, keyboard focus, map, downloads, external contact links, and desktop/mobile layouts in staging. Preserve a known-good artifact and deployment configuration for rollback. If a vulnerable deployment may have been compromised, patching alone is insufficient: review logs and credentials and rebuild from a trusted environment.

## Security status and scope

Implemented baseline: Next.js 16.4.6, React/React DOM 19.3.1, Sharp 0.35.5, Tailwind 3.4.19, and TypeScript 5.9.3. See [the manifest](package.json) and [lockfile](package-lock.json) for resolved versions.

At validation on 18 November 2026, the production-only dependency audit reported **zero vulnerabilities**. The full audit still reported **19 high findings** in development tooling, all traced to the Picomatch ReDoS advisory and its dependent packages. Registry versions 2.3.2 and 4.0.7 remain affected; no compatible patched release was available. Do not suppress this finding or force a framework downgrade. Track [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf), run tooling only on trusted source/glob patterns, and re-audit before release. Review this temporary tooling-risk acceptance by **25 November 2026**; the repository maintainer owns follow-up. CI gates the production audit and also publishes the full audit as a non-blocking report.

Dynamic missing IDs use [framework not-found handling](app/ebook/[ebookId]/page.tsx:12). With existing loading boundaries, the response can already be streaming with HTTP 200; the framework emits the not-found fallback and noindex metadata. Unknown routes return HTTP 404. This framework behavior is covered by the smoke test; strict pre-stream status 404 for every dynamic ID is not claimed.

The internal component URLs have been removed while business URLs are preserved. Unused source backups with missing assets and the unused custom server were removed; no replacement images were fabricated. Team detail routes remain the existing placeholders and require a separate product/content decision before implementing a real member directory.

The original [revitalization audit](docs/revitalization-audit.md) is a historical pre-change snapshot; its paths and recommendations describe the earlier state, not the implemented dependency graph.
