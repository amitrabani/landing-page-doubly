'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const SEEN_KEY = 'doubly-intro-seen';
const EXIT_EASE = [0.76, 0, 0.24, 1] as const;

/**
 * Branded intro curtain. On the first visit of a session the page opens behind a
 * cream panel showing the Doubly wordmark and a count to 100, then the panel lifts
 * to reveal the hero. Returning visitors and reduced-motion users skip it instantly.
 * Always present in the initial markup so the first paint is covered (no content flash).
 */
export default function Preloader() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const seen = typeof window !== 'undefined' && sessionStorage.getItem(SEEN_KEY);

    // Returning visitor or reduced motion: clear the curtain immediately, no lock.
    if (seen || reduced) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem(SEEN_KEY, '1');
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = 'hidden';

    const DURATION = 1150;
    let start: number | null = null;
    const tick = (now: number) => {
      if (start === null) start = now;
      const p = Math.min((now - start) / DURATION, 1);
      // easeOutCubic for a counter that decelerates into 100.
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        // Hold a beat at 100, then lift.
        window.setTimeout(() => setVisible(false), 280);
      }
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      root.style.overflow = prevOverflow;
    };
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream"
          initial={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.9, ease: EXIT_EASE }}
          onAnimationComplete={() => {
            // Safety: ensure scroll is restored once the curtain is gone.
            document.documentElement.style.overflow = '';
          }}
          aria-hidden
        >
          <motion.div
            className="flex flex-col items-center"
            initial={reduced ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.35, ease: EXIT_EASE } }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="flex items-center gap-3">
              <Image src="/icon-192.png" alt="" width={44} height={44} className="rounded-2xl" priority />
              <span className="font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-charcoal">
                Doubly
              </span>
            </div>

            {/* Progress line */}
            <div className="mt-7 h-px w-44 overflow-hidden rounded-full bg-charcoal/10">
              <motion.div
                className="h-full origin-left rtl:origin-right bg-gradient-to-r from-lavender via-coral-light to-sage"
                style={{ scaleX: count / 100 }}
              />
            </div>

            <div className="mt-3 font-[family-name:var(--font-body)] text-xs tabular-nums tracking-[0.3em] text-muted">
              {String(count).padStart(3, '0')}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
