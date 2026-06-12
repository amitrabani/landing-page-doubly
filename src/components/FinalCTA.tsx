'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { EASE, VIEWPORT_ONCE_TIGHT } from '@/lib/motion';
import Parallax from '@/components/motion/Parallax';
import WordReveal from '@/components/motion/WordReveal';
import t from '@/translations/en';
import AppStoreButton from './AppStoreButton';

export default function FinalCTA() {
  const reduced = useReducedMotion();
  const [entered, setEntered] = useState(false);
  const [sweep, setSweep] = useState(false);

  // One-shot gradient sweep across the highlight line, after its words have settled.
  useEffect(() => {
    if (!entered || reduced) return;
    const id = setTimeout(() => setSweep(true), 1200);
    return () => clearTimeout(id);
  }, [entered, reduced]);

  return (
    <section
      id="get-doubly"
      className="relative overflow-hidden py-24 sm:py-32 px-6 bg-gradient-to-b from-warm to-cream"
    >
      {/* Soft radial glow stage drifting behind the headline */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Parallax speed={28} className="absolute inset-0">
          <div className="absolute left-1/2 top-4 h-[30rem] w-[30rem] -translate-x-[75%] rounded-full bg-[radial-gradient(circle,rgba(184,169,212,0.35),transparent_70%)] blur-3xl" />
        </Parallax>
        <Parallax speed={-18} className="absolute inset-0">
          <div className="absolute left-1/2 top-24 h-[26rem] w-[26rem] translate-x-[5%] rounded-full bg-[radial-gradient(circle,rgba(168,181,160,0.3),transparent_70%)] blur-3xl" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <WordReveal
          text={t.finalCta.title}
          as="h2"
          stagger={0.05}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal leading-tight"
        />

        <motion.div
          onViewportEnter={() => setEntered(true)}
          viewport={{ once: true, margin: '-80px' }}
          className="relative mt-2 inline-block overflow-hidden"
        >
          <WordReveal
            text={t.finalCta.highlight}
            as="p"
            delay={0.3}
            className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold tracking-tight text-lavender-dark"
          />
          {sweep && (
            <span
              aria-hidden
              onAnimationEnd={() => setSweep(false)}
              className="shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
              style={{ transform: 'translateX(-150%) skewX(-15deg)' }}
            />
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
          className="mt-6 text-muted text-lg max-w-lg mx-auto"
        >
          {t.finalCta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={VIEWPORT_ONCE_TIGHT}
          transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          className="relative mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(184,169,212,0.4),transparent_70%)] blur-2xl"
          />
          <AppStoreButton />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7, ease: EASE }}
          className="mt-4 text-sm text-muted-light"
        >
          {t.finalCta.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
