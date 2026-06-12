'use client';

import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

type Props = {
  value: number;
  className?: string;
  /** Formats the rounded value for display (e.g. add a unit). */
  format?: (n: number) => string;
};

/** Number that springs to its new value whenever `value` changes. */
export default function AnimatedNumber({ value, className, format }: Props) {
  const reduced = useReducedMotion();
  const spring = useSpring(value, { stiffness: 180, damping: 26 });
  const display = useTransform(spring, (v) => {
    const n = Math.round(v);
    return format ? format(n) : String(n);
  });

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  if (reduced) return <span className={className}>{format ? format(value) : String(value)}</span>;

  return <motion.span className={className}>{display}</motion.span>;
}
