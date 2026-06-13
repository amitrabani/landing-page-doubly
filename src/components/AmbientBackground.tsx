'use client';

import { motion, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';

/**
 * Page-level atmosphere: a slow rotating aurora mesh, drifting gradient blobs, and a
 * film-grain wash. The whole field gently stretches and skews with scroll velocity so
 * fast scrolling feels fluid. Pure decoration (fixed, -z, pointer-events-none) — it
 * never affects layout geometry, so the demos' measurements stay exact.
 */
export default function AmbientBackground() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVel = useSpring(velocity, { stiffness: 90, damping: 30, mass: 0.4 });

  // Map scroll speed onto a subtle skew + vertical stretch for a fluid feel.
  const skewY = useTransform(smoothVel, [-2500, 0, 2500], [2.4, 0, -2.4]);
  const scaleY = useTransform(smoothVel, [-2500, 0, 2500], [1.06, 1, 1.06]);

  const style = reduced ? undefined : { skewY, scaleY };

  return (
    <motion.div
      aria-hidden
      style={style}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Rotating aurora mesh */}
      <div className="aurora absolute left-1/2 top-1/2 h-[140vmax] w-[140vmax] -translate-x-1/2 -translate-y-1/2" />

      {/* Drifting blobs */}
      <div className="ambient-blob absolute -top-[15%] -right-[10%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(212,200,237,0.35)_0%,transparent_65%)]" />
      <div className="ambient-blob-slow absolute top-[35%] -left-[18%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(240,181,160,0.22)_0%,transparent_65%)]" />
      <div className="ambient-blob absolute bottom-[-20%] right-[8%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(168,181,160,0.25)_0%,transparent_65%)]" />

      {/* Soft vignette to seat the content */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,rgba(45,43,50,0.05)_100%)]" />

      <div className="grain absolute inset-0" />
    </motion.div>
  );
}
