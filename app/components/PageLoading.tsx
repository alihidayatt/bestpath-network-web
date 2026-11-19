"use client";

import { useEffect, useRef, useState } from "react";
import type { DotLottie } from "@lottiefiles/dotlottie-web";
import styles from "./PageLoading.module.css";

export default function PageLoading() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const player = useRef<DotLottie | null>(null);
  const pausedRef = useRef(false);
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let disposed = false;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPlayback = () => {
      const animation = player.current;
      if (!animation?.isLoaded) return;
      if (motion.matches || document.documentElement.dataset.motion === "off") {
        animation.pause();
        animation.setFrame(30);
      } else if (pausedRef.current) {
        animation.pause();
      } else {
        animation.play();
      }
    };
    const observer = new MutationObserver(syncPlayback);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
    motion.addEventListener("change", syncPlayback);

    void import("@lottiefiles/dotlottie-web").then(({ DotLottie }) => {
      if (disposed || !canvas.current) return;
      DotLottie.setWasmUrl("/assets/loading-anime/dotlottie-player.wasm");
      const animation = new DotLottie({
        canvas: canvas.current,
        src: "/assets/loading-anime/dot%20loading.lottie",
        loop: true,
        autoplay: false,
      });
      player.current = animation;
      animation.addEventListener("load", () => {
        if (disposed) return;
        setReady(true);
        syncPlayback();
      });
      animation.addEventListener("loadError", () => {
        if (!disposed) setReady(false);
      });
    }).catch(() => {
      // The static teal dot and loading status remain if the player cannot load.
    });

    return () => {
      disposed = true;
      observer.disconnect();
      motion.removeEventListener("change", syncPlayback);
      player.current?.destroy();
      player.current = null;
    };
  }, []);

  function togglePlayback() {
    const next = !paused;
    pausedRef.current = next;
    setPaused(next);
    if (next) player.current?.pause();
    else player.current?.play();
  }

  return (
    <div className={styles.loading}>
      <div className={styles.content}>
        <div className={styles.drawing} aria-hidden="true">
          {!ready && <span className={styles.fallback} />}
          <canvas ref={canvas} className={ready ? styles.canvas : styles.hidden} width={375} height={471} />
        </div>
        <p className={styles.status} role="status">Loading page…</p>
        {ready && (
          <button className={styles.pause} type="button" aria-pressed={paused} onClick={togglePlayback}>
            {paused ? "Resume animation" : "Pause animation"}
          </button>
        )}
      </div>
    </div>
  );
}
