'use client';

import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** How strongly the child is pulled toward the cursor (0..1). */
  strength?: number;
};

/** Magnetic hover: the child leans toward the cursor while hovered, springs home on leave. */
export default function MagneticArea({ children, className, strength = 0.3 }: Props) {
  const reduced = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 200, damping: 16 });
  const y = useSpring(my, { stiffness: 200, damping: 16 });

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return;
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left - rect.width / 2) * strength);
        my.set((e.clientY - rect.top - rect.height / 2) * strength);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
