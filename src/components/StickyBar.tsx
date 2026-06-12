'use client';

import { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion';
import t from '@/translations/en';
import { EASE, SPRING, SPRING_SNAPPY } from '@/lib/motion';

export default function StickyBar() {
  const [showByScroll, setShowByScroll] = useState(false);
  const [ctaInView, setCtaInView] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => {
    if (y <= 600) {
      setShowByScroll(false);
      return;
    }
    const delta = y - (scrollY.getPrevious() ?? y);
    if (Math.abs(delta) < 2) return;
    setShowByScroll(delta < 0);
  });

  useEffect(() => {
    const el = document.getElementById('get-doubly');
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setCtaInView(entry.isIntersecting));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const visible = showByScroll && !ctaInView;

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
            href="https://apps.apple.com/us/app/adhd-planner-doubly/id6760469944?ppid=cc9063af-1b63-4ba2-842d-e5f979b03beb"
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
