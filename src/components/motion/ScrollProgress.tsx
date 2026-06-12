'use client';

import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion';

/** Thin page-scroll progress bar above the navbar, in the brand gradient. */
export default function ScrollProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-lavender via-coral-light to-sage"
      style={{ scaleX }}
    />
  );
}
