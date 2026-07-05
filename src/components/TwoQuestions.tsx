'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EASE, HOVER_LIFT, SPRING, SPRING_SOFT, VIEWPORT_ONCE_TIGHT, fadeRise } from '@/lib/motion';
import WordReveal from '@/components/motion/WordReveal';
import { APP_STORE_URL, trackAppStoreClick } from '@/lib/appStore';
import t from '@/translations/en';

/** Per-option accent: option index maps onto the palette (lavender / coral / sage / sky). */
const accents = [
  {
    intro: 'text-lavender-dark',
    border: 'border-lavender/40',
    chipBg: 'bg-lavender-light/30',
    chipText: 'text-lavender-dark',
    glow: 'rgba(184, 169, 212, 0.45)',
  },
  {
    intro: 'text-coral-dark',
    border: 'border-coral/40',
    chipBg: 'bg-coral-light/25',
    chipText: 'text-coral-dark',
    glow: 'rgba(232, 150, 122, 0.4)',
  },
  {
    intro: 'text-sage-dark',
    border: 'border-sage/50',
    chipBg: 'bg-sage/20',
    chipText: 'text-sage-dark',
    glow: 'rgba(168, 181, 160, 0.5)',
  },
  {
    intro: 'text-[#6B98B4]',
    border: 'border-sky/50',
    chipBg: 'bg-sky-light/30',
    chipText: 'text-[#6B98B4]',
    glow: 'rgba(158, 197, 217, 0.5)',
  },
];

const accentFor = (option: string) => {
  const idx = (t.twoQuestions.options as readonly string[]).indexOf(option);
  return accents[(idx < 0 ? 0 : idx) % accents.length];
};

export default function TwoQuestions() {
  const [answer2, setAnswer2] = useState<string | null>(null);
  const reduced = useReducedMotion();
  const accent = accentFor(answer2 ?? '');

  return (
    <section className="py-12 sm:py-16 px-6 bg-warm">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <WordReveal
            text={t.twoQuestions.title}
            as="h2"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight"
            highlight="familiar?"
            highlightClassName="text-coral-dark"
          />
          <motion.p {...fadeRise(0.3, 20)} className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.twoQuestions.subtitle}
          </motion.p>
        </div>

        {/* Comparison cards */}
        <div className="space-y-4 mb-12">
          {/* Column labels - visible on sm+ */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE_TIGHT}
            transition={{ duration: 0.5, ease: EASE }}
            className="hidden sm:grid sm:grid-cols-[1fr_48px_1fr] items-center text-sm font-semibold mb-2"
          >
            <div className="text-coral-dark text-center">{t.twoQuestions.withoutDoubly}</div>
            <div />
            <div className="text-sage-dark text-center">{t.twoQuestions.withDoubly}</div>
          </motion.div>

          {t.twoQuestions.rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={
                reduced
                  ? { opacity: 0 }
                  : { opacity: 0, x: idx % 2 === 0 ? -24 : 24, filter: 'blur(5px)' }
              }
              whileInView={reduced ? { opacity: 1 } : { opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={VIEWPORT_ONCE_TIGHT}
              transition={{ duration: 0.65, delay: 0.07 * idx, ease: EASE }}
              whileHover={reduced ? undefined : 'hover'}
              className="grid grid-cols-1 sm:grid-cols-[1fr_48px_1fr] items-center gap-2 sm:gap-0"
            >
              {/* Without: sits a step behind the with card; recedes while the row is hovered */}
              <motion.div
                style={{ scale: 0.985, opacity: 0.92 }}
                variants={{ hover: { scale: 0.97, opacity: 0.85 } }}
                transition={SPRING_SOFT}
                className="rounded-2xl border border-coral-light/30 bg-coral-light/8 px-5 py-4"
              >
                <span className="text-sm sm:text-base text-charcoal-light leading-relaxed">{row.without}</span>
              </motion.div>

              {/* Arrow */}
              <div className="flex items-center justify-center">
                {/* Down arrow on mobile */}
                <svg className="sm:hidden text-charcoal/20" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Right arrow on desktop */}
                <svg className="hidden sm:block text-charcoal/25" width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M6 14h16m0 0l-5-5m5 5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* With: full presence; lifts while the row is hovered */}
              <motion.div
                variants={{ hover: HOVER_LIFT }}
                transition={SPRING_SOFT}
                className="rounded-2xl border border-sage/30 bg-sage/10 px-5 py-4"
              >
                <span className="text-sm sm:text-base text-charcoal font-medium leading-relaxed">{row.with}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Question 2 */}
        <div className="mb-14">
          <motion.h3
            {...fadeRise(0, 20)}
            className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal mb-5"
          >
            {t.twoQuestions.questionTitle}
          </motion.h3>
          <div className="flex flex-wrap gap-3">
            {t.twoQuestions.options.map((option, i) => (
              <motion.button
                key={option}
                onClick={() => setAnswer2(option)}
                aria-pressed={answer2 === option}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.05 * i, ease: EASE },
                }}
                viewport={VIEWPORT_ONCE_TIGHT}
                animate={{ scale: answer2 === option ? 1.04 : 1 }}
                whileHover={{ y: -3, scale: answer2 === option ? 1.07 : 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={SPRING}
                className={`rounded-full px-5 py-2.5 text-sm font-medium cursor-pointer transition-[color,background-color,border-color,box-shadow] duration-200 ${
                  answer2 === option
                    ? 'bg-coral text-white shadow-md shadow-coral/20'
                    : 'bg-white text-charcoal border border-charcoal/12 shadow-sm hover:shadow-md hover:border-coral/30 hover:bg-coral-light/10'
                }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Result */}
        <AnimatePresence>
          {answer2 && (
            <motion.div
              initial={{ opacity: 0, y: 30, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="overflow-hidden [perspective:1000px]"
            >
              <motion.div
                key={answer2}
                initial={
                  reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.97, rotateX: 12 }
                }
                animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={SPRING_SOFT}
                className={`relative bg-white rounded-3xl border ${accent.border} shadow-xl shadow-charcoal/5 p-8 text-center`}
              >
                {/* One-shot soft glow pulse on arrival (no loop) */}
                {!reduced && (
                  <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0.8 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 1.3, ease: 'easeOut', delay: 0.15 }}
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{ boxShadow: `0 0 0 1px ${accent.glow}, 0 0 48px 10px ${accent.glow}` }}
                  />
                )}

                <motion.div
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...SPRING, delay: 0.08 }}
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl mb-4 ${accent.chipBg} ${accent.chipText}`}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3l2 5.6a2 2 0 001.2 1.2L21 12l-5.8 2.2a2 2 0 00-1.2 1.2L12 21l-2-5.6a2 2 0 00-1.2-1.2L3 12l5.8-2.2a2 2 0 001.2-1.2L12 3z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                <div className={`text-sm ${accent.intro} font-medium mb-2`}>
                  {t.twoQuestions.responseIntro}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal mb-3">
                  {t.twoQuestions.responses[answer2 as keyof typeof t.twoQuestions.responses]?.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-md mx-auto mb-6">
                  {t.twoQuestions.responses[answer2 as keyof typeof t.twoQuestions.responses]?.description}
                </p>

                <div>
                  <a
                    href={APP_STORE_URL}
                    onClick={() => trackAppStoreClick('two_questions')}
                    className="group inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-6 py-3 text-sm font-medium hover:bg-charcoal-light transition-all hover:scale-[1.02]"
                  >
                    {t.twoQuestions.mockupCta}
                    <svg
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
