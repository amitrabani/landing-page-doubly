'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SPRING } from '@/lib/motion';
import { APP_STORE_URL, trackAppStoreClick, type AppStorePlacement } from '@/lib/appStore';
import t from '@/translations/en';

export default function AppStoreButton({
  placement,
  className = '',
}: {
  placement: AppStorePlacement;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [shimmer, setShimmer] = useState(false);

  // One-time shimmer sweep shortly after mount, then the bar unmounts for good.
  useEffect(() => {
    if (reduced) return;
    const id = setTimeout(() => setShimmer(true), 1500);
    return () => clearTimeout(id);
  }, [reduced]);

  return (
    <motion.a
      href={APP_STORE_URL}
      onClick={() => trackAppStoreClick(placement)}
      className={`group relative inline-block ${className}`}
      whileHover={reduced ? undefined : { scale: 1.04, y: -2 }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      transition={SPRING}
    >
      {/* Ambient lavender glow halo, stronger on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-4 rounded-[1.6rem] bg-[radial-gradient(ellipse_at_center,rgba(184,169,212,0.5),transparent_70%)] blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="relative block overflow-hidden rounded-xl">
        <img src="/app-store-badge.svg" alt={t.hero.cta} className="block h-16 w-auto sm:h-20" />
        {shimmer && (
          <span
            aria-hidden
            onAnimationEnd={() => setShimmer(false)}
            className="shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            style={{ transform: 'translateX(-150%) skewX(-15deg)' }}
          />
        )}
      </span>
    </motion.a>
  );
}
