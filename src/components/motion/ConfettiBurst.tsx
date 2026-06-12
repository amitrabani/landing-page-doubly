'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useMemo } from 'react';

type Props = {
  /** Increment to fire a burst; 0 renders nothing. */
  fire: number;
  colors?: string[];
  /** Number of particles per burst. */
  count?: number;
  className?: string;
};

const DEFAULT_COLORS = ['#A8B5A0', '#B8A9D4', '#E8967A', '#9EC5D9', '#D4C8ED'];

/**
 * One-shot particle burst (ADHD-friendly: fires once per trigger, never loops).
 * Position the parent relative; this renders absolutely centered particles.
 */
export default function ConfettiBurst({ fire, colors = DEFAULT_COLORS, count = 18, className }: Props) {
  const reduced = useReducedMotion();

  const particles = useMemo(() => {
    if (fire === 0) return [];
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2 + (fire % 7) * 0.31;
      const dist = 48 + ((i * 37 + fire * 13) % 46);
      return {
        id: `${fire}-${i}`,
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist - 18,
        rotate: ((i * 73) % 180) - 90,
        color: colors[i % colors.length],
        shape: i % 3,
        delay: (i % 5) * 0.015,
      };
    });
  }, [fire, count, colors]);

  if (reduced || fire === 0) return null;

  return (
    <div aria-hidden className={'pointer-events-none absolute inset-0 flex items-center justify-center ' + (className ?? '')}>
      <AnimatePresence>
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute"
            initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
            animate={{ x: p.x, y: p.y, scale: [0, 1.1, 0.9], opacity: [1, 1, 0], rotate: p.rotate }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, delay: p.delay, ease: [0.2, 0.7, 0.4, 1] }}
            style={{
              width: p.shape === 0 ? 8 : 6,
              height: p.shape === 1 ? 10 : 6,
              borderRadius: p.shape === 2 ? '9999px' : '2px',
              backgroundColor: p.color,
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
