'use client';

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { createContext, useContext, type ReactNode } from 'react';

const Ctx = createContext<{ x: MotionValue<number>; y: MotionValue<number> } | null>(null);

/**
 * Pointer-tracked depth field. Wrap a scene, then place MouseLayer children at
 * different depths — they translate toward/away from the cursor at different rates,
 * giving the scene real dimensionality. Inert under reduced motion and on touch.
 */
export default function MouseParallax({ children, className }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  // Normalized -0.5 .. 0.5 from scene center.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 60, damping: 18 });
  const y = useSpring(my, { stiffness: 60, damping: 18 });

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <div
      className={className}
      onPointerMove={(e) => {
        if (e.pointerType !== 'mouse') return;
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <Ctx.Provider value={{ x, y }}>{children}</Ctx.Provider>
    </div>
  );
}

/** A layer inside MouseParallax. depth in px: positive = foreground (moves with cursor), negative = background (moves against). */
export function MouseLayer({
  children,
  depth = 16,
  className,
}: {
  children: ReactNode;
  depth?: number;
  className?: string;
}) {
  const ctx = useContext(Ctx);
  const zero = useMotionValue(0);
  const tx = useTransform(ctx?.x ?? zero, (v) => v * depth * 2);
  const ty = useTransform(ctx?.y ?? zero, (v) => v * depth * 2);

  if (!ctx) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} style={{ x: tx, y: ty }}>
      {children}
    </motion.div>
  );
}
