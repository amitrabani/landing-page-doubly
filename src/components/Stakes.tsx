'use client';

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import WordReveal from '@/components/motion/WordReveal';
import t from '@/translations/en';

const bodyWords = t.stakes.body.split(' ');

/** One word whose opacity scrubs from dim to full as the paragraph scrolls into focus. */
function ScrubWord({
  progress,
  range,
  children,
}: {
  progress: MotionValue<number>;
  range: [number, number];
  children: string;
}) {
  const opacity = useTransform(progress, range, [0.25, 1]);
  return (
    <motion.span aria-hidden style={{ opacity }}>
      {children}
    </motion.span>
  );
}

export default function Stakes() {
  const sectionRef = useRef<HTMLElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const { scrollYProgress: bodyProgress } = useScroll({
    target: bodyRef,
    offset: ['start 0.92', 'start 0.4'],
  });

  // Atmosphere: a warm, charcoal-tinted veil that deepens mid-section and lifts near the end.
  const veilOpacity = useTransform(sectionProgress, [0, 0.45, 0.85, 1], [0, 1, 0.25, 0]);

  return (
    <section ref={sectionRef} className="relative isolate py-24 sm:py-28 px-6">
      {!reduced && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            opacity: veilOpacity,
            background:
              'linear-gradient(180deg, rgba(232,223,208,0) 0%, rgba(216,205,196,0.6) 30%, rgba(45,43,50,0.07) 50%, rgba(216,205,196,0.6) 70%, rgba(232,223,208,0) 100%)',
          }}
        />
      )}
      <div className="mx-auto max-w-3xl text-center">
        <WordReveal
          text={t.stakes.title}
          as="h2"
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal leading-tight"
        />
        {reduced ? (
          <p ref={bodyRef} className="mt-6 text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            {t.stakes.body}
          </p>
        ) : (
          <p
            ref={bodyRef}
            aria-label={t.stakes.body}
            className="mt-6 text-muted text-lg leading-relaxed max-w-2xl mx-auto"
          >
            {bodyWords.map((word, i) => {
              const start = (i / bodyWords.length) * 0.85;
              return (
                <ScrubWord key={i} progress={bodyProgress} range={[start, start + 0.15]}>
                  {word + (i < bodyWords.length - 1 ? ' ' : '')}
                </ScrubWord>
              );
            })}
          </p>
        )}
      </div>
    </section>
  );
}
