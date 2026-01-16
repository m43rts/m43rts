 "use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type AutoSnapMainProps = {
  children: ReactNode;
  className?: string;
};

const SNAP_LOCK_MS = 800;

/**
 * Scroll container that auto-snaps to the most visible section once scrolling
 * settles. Disabled when users prefer reduced motion.
 */
export function AutoSnapMain({ children, className }: AutoSnapMainProps) {
  const mainRef = useRef<HTMLElement | null>(null);
  const [snapEnabled, setSnapEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setSnapEnabled(!media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!snapEnabled) return;
    const main = mainRef.current;
    if (!main) return;

    const sections = Array.from(main.querySelectorAll<HTMLElement>("section[id]"));
    if (sections.length === 0) return;

    let scrollEndTimer: ReturnType<typeof setTimeout> | null = null;
    let snapLockTimer: ReturnType<typeof setTimeout> | null = null;
    let snapping = false;

    const visibleRatioInMain = (section: HTMLElement) => {
      const mainRect = main.getBoundingClientRect();
      const rect = section.getBoundingClientRect();
      const top = Math.max(rect.top, mainRect.top);
      const bottom = Math.min(rect.bottom, mainRect.bottom);
      const visible = Math.max(0, bottom - top);
      return rect.height > 0 ? visible / rect.height : 0;
    };

    const pickBestSection = () => {
      let best: HTMLElement | null = null;
      let bestRatio = -1;
      for (const section of sections) {
        const ratio = visibleRatioInMain(section);
        if (ratio > bestRatio) {
          bestRatio = ratio;
          best = section;
        }
      }
      return best;
    };

    const snapToSection = () => {
      if (snapping) return;
      const target = pickBestSection();
      if (!target) return;

      snapping = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      snapLockTimer = setTimeout(() => {
        snapping = false;
      }, SNAP_LOCK_MS);
    };

    const onScroll = () => {
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      scrollEndTimer = setTimeout(() => {
        scrollEndTimer = null;
        snapToSection();
      }, 140);
    };

    main.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (scrollEndTimer) clearTimeout(scrollEndTimer);
      if (snapLockTimer) clearTimeout(snapLockTimer);
      main.removeEventListener("scroll", onScroll);
    };
  }, [snapEnabled]);

  return (
    <main ref={mainRef} className={className}>
      {children}
    </main>
  );
}
