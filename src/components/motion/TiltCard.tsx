'use client';

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees. */
  maxTilt?: number;
  /** Render a moving specular sheen over the content. */
  sheen?: boolean;
};

/** Pointer-tracked 3D tilt with spring smoothing. Pure CSS transforms, no WebGL. */
export default function TiltCard({ children, className, maxTilt = 7, sheen = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const sx = useSpring(px, { stiffness: 120, damping: 18 });
  const sy = useSpring(py, { stiffness: 120, damping: 18 });
  const rotateY = useTransform(sx, [0, 1], [-maxTilt, maxTilt]);
  const rotateX = useTransform(sy, [0, 1], [maxTilt, -maxTilt]);
  const sheenX = useTransform(sx, [0, 1], ['-60%', '60%']);

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 900 }}
      onPointerMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        px.set((e.clientX - rect.left) / rect.width);
        py.set((e.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
      {sheen && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
          style={{ transform: 'translateZ(1px)' }}
        >
          <motion.div
            className="absolute inset-y-[-50%] w-[60%] rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ x: sheenX, left: '20%' }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
