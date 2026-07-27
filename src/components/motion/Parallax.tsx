'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useHydratedReducedMotion } from './useHydratedReducedMotion';
import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  /** Total vertical travel in px while the element crosses the viewport. Positive = moves up. */
  speed?: number;
  className?: string;
};

/** Scroll-linked vertical drift. Wrap any block to give it its own depth plane. */
export default function Parallax({ children, speed = 40, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
