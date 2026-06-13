'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const INTERACTIVE = 'a, button, [role="button"], [data-cursor], label, summary';

/**
 * Soft trailing cursor: a lagging ring + a tight dot. The ring swells and fills
 * over interactive elements for a magnetic, tactile feel. Mouse-only (fine pointer +
 * hover), and disabled entirely under reduced motion. The native caret is restored
 * over text fields via the `.custom-cursor` rules in globals.css.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hidden, setHidden] = useState(true);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.6 });
  const dotX = useSpring(x, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(y, { stiffness: 1000, damping: 50 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;

    setEnabled(true);
    document.body.classList.add('custom-cursor');

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const target = e.target as HTMLElement | null;
      setActive(!!target?.closest(INTERACTIVE));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setHidden(true);
    const onEnter = () => setHidden(false);

    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerdown', onDown, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    document.addEventListener('pointerenter', onEnter);

    return () => {
      document.body.classList.remove('custom-cursor');
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('pointerenter', onEnter);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Lagging ring */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] rounded-full border border-lavender-dark/50 mix-blend-multiply"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: active ? 56 : 30,
          height: active ? 56 : 30,
          opacity: hidden ? 0 : 1,
          backgroundColor: active ? 'rgba(184,169,212,0.14)' : 'rgba(184,169,212,0)',
          scale: pressed ? 0.82 : 1,
        }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      />
      {/* Tight dot */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[90] h-1.5 w-1.5 rounded-full bg-charcoal"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        animate={{ opacity: hidden || active ? 0 : 1, scale: pressed ? 1.6 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </>
  );
}
