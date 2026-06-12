// Shared motion tokens. Sections compose these so the whole page moves with one voice.
import type { Transition } from 'framer-motion';

export const EASE = [0.25, 0.1, 0.25, 1] as const;

export const SPRING: Transition = { type: 'spring', stiffness: 300, damping: 24 };
export const SPRING_SOFT: Transition = { type: 'spring', stiffness: 150, damping: 20 };
export const SPRING_SNAPPY: Transition = { type: 'spring', stiffness: 500, damping: 28 };

export const VIEWPORT_ONCE = { once: true, margin: '-100px' as const };
export const VIEWPORT_ONCE_TIGHT = { once: true, margin: '-60px' as const };

/** Standard entrance: fade + rise. Spread onto a motion element. */
export const fadeRise = (delay = 0, y = 30) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEWPORT_ONCE,
  transition: { duration: 0.8, delay, ease: EASE },
});

/** Entrance for cards: fade + rise + settle from slight scale. */
export const fadeRiseScale = (delay = 0) => ({
  initial: { opacity: 0, y: 40, scale: 0.96 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  viewport: VIEWPORT_ONCE,
  transition: { duration: 0.7, delay, ease: EASE },
});

/** Stagger container + child variants for lists. */
export const staggerContainer = (stagger = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const staggerChild = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

/** Hover lift for cards: spread onto whileHover. */
export const HOVER_LIFT = { y: -6, transition: SPRING_SOFT };
