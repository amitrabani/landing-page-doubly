'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import posthog from 'posthog-js';

const THRESHOLDS = [25, 50, 75, 100] as const;

/**
 * Fires a `scroll_depth` event the first time the visitor passes each
 * threshold on a page (depth 100 = reached the bottom). Thresholds reset on
 * client-side navigation so every page view gets its own depth readings.
 */
export default function ScrollDepthTracker() {
  const pathname = usePathname();
  const fired = useRef<Set<number>>(new Set());

  useEffect(() => {
    fired.current = new Set();

    let ticking = false;

    const measure = () => {
      ticking = false;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      // Pages shorter than the viewport count as fully scrolled.
      const depth =
        scrollable <= 0 ? 100 : Math.min(100, ((window.scrollY + 1) / scrollable) * 100);

      for (const threshold of THRESHOLDS) {
        if (depth >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold);
          if (posthog.__loaded) {
            posthog.capture('scroll_depth', {
              depth: threshold,
              reached_bottom: threshold === 100,
              path: pathname,
            });
          }
        }
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(measure);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return null;
}
