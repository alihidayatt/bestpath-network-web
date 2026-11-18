"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

type MomentNode = HTMLElement & { __moment?: { destroy?: () => void }; __momentP?: Promise<unknown> };

function destroyMoment(node: MomentNode) {
  node.__moment?.destroy?.();
  delete node.__moment;
  delete node.__momentP;
  node.removeAttribute("data-moment-mounted");
}
type Kit = { motion: { refresh: () => void }; moments: { mountAll: (root: HTMLElement) => Promise<MomentNode[]> } };
let kitPromise: Promise<Kit> | undefined;

// Native module imports keep the public kit outside the framework bundle, unchanged.
function loadKit() {
  return kitPromise ??= new Promise<Kit>((resolve, reject) => {
    const script = document.createElement("script");
    script.type = "module";
    window.addEventListener("bestpath:kit-ready", event => resolve((event as CustomEvent<Kit>).detail), { once: true });
    window.addEventListener("bestpath:kit-error", () => reject(new Error("Motion assets unavailable")), { once: true });
    script.textContent = `window.__momentsManual = true;
      Promise.all([import('/assets/motion/motion.js'), import('/assets/moments/moments.js')])
        .then(([motion, moments]) => window.dispatchEvent(new CustomEvent('bestpath:kit-ready', { detail: { motion, moments } })))
        .catch(() => window.dispatchEvent(new Event('bestpath:kit-error')));`;
    document.body.appendChild(script);
  });
}

// A page-local boundary signals that streamed server markup has hydrated.
export function MotionReady() {
  useEffect(() => {
    document.documentElement.dataset.motionPageReady = "true";
    window.dispatchEvent(new Event("bestpath:page-ready"));
    return () => { delete document.documentElement.dataset.motionPageReady; };
  }, []);
  return null;
}

export default function SiteMotion() {
  const pathname = usePathname();
  useEffect(() => {
    let cancelled = false;
    let frame = 0;
    const mounted = new Set<MomentNode>();
    const html = document.documentElement;
    html.classList.add("m-enter");
    html.classList.remove("m-enter-done");
    const safety = window.setTimeout(() => html.classList.add("m-enter-done"), 700);
    const observer = new MutationObserver(() => {
      if (!frame) frame = requestAnimationFrame(() => { frame = 0; void refresh(); });
    });
    async function refresh() {
      if (pathname === "/" && !html.dataset.motionPageReady) return;
      try {
        const kit = await loadKit();
        if (cancelled) return;
        for (const node of mounted) {
          if (!node.isConnected) { destroyMoment(node); mounted.delete(node); }
        }
        kit.motion.refresh();
        const nodes = await kit.moments.mountAll(document.body);
        for (const node of nodes) {
          if (!node.isConnected) destroyMoment(node);
          else if (!cancelled) mounted.add(node);
        }
        if (!cancelled) html.dataset.momentsReady = String(nodes.length);
      } catch {
        html.classList.add("m-enter-done", "mo-safe");
      }
    }
    const onPageReady = () => { void refresh(); };
    window.addEventListener("bestpath:page-ready", onPageReady);
    void refresh();
    // Streaming route content can arrive after the pathname changes.
    observer.observe(document.body, { childList: true, subtree: true });
    return () => {
      cancelled = true;
      window.removeEventListener("bestpath:page-ready", onPageReady);
      observer.disconnect();
      cancelAnimationFrame(frame);
      clearTimeout(safety);
      mounted.forEach(destroyMoment);
      html.classList.add("m-enter-done");
    };
  }, [pathname]);
  return null;
}
