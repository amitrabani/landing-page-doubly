'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useT } from '@/i18n/TranslationProvider';
import { EASE, SPRING, SPRING_SNAPPY } from '@/lib/motion';
import { APP_STORE_URL, trackAppStoreClick } from '@/lib/appStore';

export default function StickyBar() {
  const t = useT();
  // Both start true so the bar never flashes before the observers report in.
  const [heroInView, setHeroInView] = useState(true);
  const [ctaInView, setCtaInView] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const hero = document.getElementById('hero');
    const cta = document.getElementById('get-doubly');
    if (!hero || !cta) return;
    const heroObserver = new IntersectionObserver(([entry]) => setHeroInView(entry.isIntersecting));
    const ctaObserver = new IntersectionObserver(([entry]) => setCtaInView(entry.isIntersecting));
    heroObserver.observe(hero);
    ctaObserver.observe(cta);
    return () => {
      heroObserver.disconnect();
      ctaObserver.disconnect();
    };
  }, []);

  // Keep a store CTA on screen at all times: show as soon as the hero scrolls
  // away, hide only while the final CTA section (which has its own button) is
  // visible. ~90% of paid visitors never scroll far, so no scroll threshold.
  const visible = !heroInView && !ctaInView;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: prefersReducedMotion ? 0 : 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: prefersReducedMotion ? 0 : 100,
            opacity: 0,
            transition: { duration: 0.25, ease: EASE },
          }}
          transition={{ ...SPRING, opacity: { duration: 0.3, ease: 'easeOut' } }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-6 md:hidden"
        >
          <motion.a
            href={APP_STORE_URL}
            onClick={() => trackAppStoreClick('sticky_bar')}
            whileHover="hover"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-8 py-3.5 text-base font-medium shadow-xl shadow-charcoal/20"
          >
            {t.stickyBar.cta}
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              variants={{ hover: { x: prefersReducedMotion ? 0 : 3 } }}
              transition={SPRING_SNAPPY}
            >
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
