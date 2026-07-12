'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { EASE, VIEWPORT_ONCE_TIGHT } from '@/lib/motion';
import MagneticArea from '@/components/motion/MagneticArea';
import Parallax from '@/components/motion/Parallax';
import { useT } from '@/i18n/TranslationProvider';
import AppStoreButton from './AppStoreButton';
import SocialProofCounter from './SocialProofCounter';

/** Tiny four-point sparkle, colored via currentColor. Decorative only. */
function Sparkle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 0c1 6.6 5.4 11 12 12-6.6 1-11 5.4-12 12-1-6.6-5.4-11-12-12C6.6 11 11 6.6 12 0Z" />
    </svg>
  );
}

export default function FinalCTA() {
  const t = useT();
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  const [sweep, setSweep] = useState(false);

  // Destination zoom: the whole stage eases from a slight pull-back into full size,
  // settling exactly when the section reaches the center of the viewport.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });
  const stageScale = useTransform(scrollYProgress, [0, 1], [0.93, 1]);
  const stageRotateX = useTransform(scrollYProgress, [0, 1], [5, 0]);

  // One-shot gradient sweep across the highlight line, after its words have settled.
  useEffect(() => {
    if (!entered || reduced) return;
    const id = setTimeout(() => setSweep(true), 1200);
    return () => clearTimeout(id);
  }, [entered, reduced]);

  return (
    <section
      ref={sectionRef}
      id="get-doubly"
      className="relative overflow-hidden py-20 sm:py-28 px-6 bg-gradient-to-b from-warm to-cream"
    >
      {/* Soft radial glow stage drifting behind the headline */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Parallax speed={28} className="absolute inset-0">
          <div className="absolute left-1/2 top-4 h-[30rem] w-[30rem] -translate-x-[75%] rounded-full bg-[radial-gradient(circle,rgba(184,169,212,0.35),transparent_70%)] blur-3xl" />
        </Parallax>
        <Parallax speed={-18} className="absolute inset-0">
          <div className="absolute left-1/2 top-24 h-[26rem] w-[26rem] translate-x-[5%] rounded-full bg-[radial-gradient(circle,rgba(168,181,160,0.3),transparent_70%)] blur-3xl" />
        </Parallax>
        {/* Pastel sparkles drifting on their own depth planes around the headline */}
        <Parallax speed={44} className="absolute inset-0">
          <Sparkle className="absolute left-[14%] top-20 h-4 w-4 text-lavender opacity-50" />
        </Parallax>
        <Parallax speed={-16} className="absolute inset-0">
          <Sparkle className="absolute right-[16%] top-32 h-3 w-3 text-sage opacity-40" />
        </Parallax>
        <Parallax speed={22} className="absolute inset-0">
          <Sparkle className="absolute right-[10%] top-12 h-5 w-5 text-lavender-light opacity-60 hidden sm:block" />
        </Parallax>
        <Parallax speed={58} className="absolute inset-0">
          <Sparkle className="absolute left-[8%] top-44 h-3.5 w-3.5 text-sage-dark opacity-30 hidden sm:block" />
        </Parallax>
      </div>

      <div className="relative mx-auto max-w-3xl text-center [perspective:1200px]">
        <motion.div
          style={
            reduced
              ? undefined
              : { scale: stageScale, rotateX: stageRotateX, transformStyle: 'preserve-3d' }
          }
        >
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal leading-tight"
          >
            {t.finalCta.title}
          </motion.h2>

          <motion.div
            onViewportEnter={() => setEntered(true)}
            viewport={{ once: true, amount: 0.3 }}
            className="relative mt-2 inline-block"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.18, ease: EASE }}
              className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold tracking-tight text-lavender-dark"
            >
              {t.finalCta.highlight}
            </motion.p>
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
            <MagneticArea strength={0.25}>
              <AppStoreButton placement="final_cta" />
            </MagneticArea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
          >
            <SocialProofCounter className="mt-5 text-sm text-muted" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
