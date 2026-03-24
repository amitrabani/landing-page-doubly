'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import t from '@/translations/en';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function TwoQuestions() {
  const [answer2, setAnswer2] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 px-6 bg-warm">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            {t.twoQuestions.title}
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.twoQuestions.subtitle}
          </p>
        </motion.div>

        {/* Comparison cards */}
        <div className="space-y-4 mb-12">
          {/* Column labels - visible on sm+ */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease }}
            className="hidden sm:grid sm:grid-cols-[1fr_48px_1fr] items-center text-sm font-semibold mb-2"
          >
            <div className="text-coral-dark text-center">{t.twoQuestions.withoutDoubly}</div>
            <div />
            <div className="text-sage-dark text-center">{t.twoQuestions.withDoubly}</div>
          </motion.div>

          {t.twoQuestions.rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 * idx, ease }}
              className="grid grid-cols-1 sm:grid-cols-[1fr_48px_1fr] items-center gap-2 sm:gap-0"
            >
              {/* Without */}
              <div className="rounded-2xl border border-coral-light/30 bg-coral-light/8 px-5 py-4">
                <span className="text-sm sm:text-base text-charcoal-light leading-relaxed">{row.without}</span>
              </div>

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

              {/* With */}
              <div className="rounded-2xl border border-sage/30 bg-sage/10 px-5 py-4">
                <span className="text-sm sm:text-base text-charcoal font-medium leading-relaxed">{row.with}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Question 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mb-14"
        >
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal mb-5">
            {t.twoQuestions.questionTitle}
          </h3>
          <div className="flex flex-wrap gap-3">
            {t.twoQuestions.options.map((option) => (
              <button
                key={option}
                onClick={() => setAnswer2(option)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all cursor-pointer ${
                  answer2 === option
                    ? 'bg-coral text-white shadow-md shadow-coral/20 scale-[1.03]'
                    : 'bg-white text-charcoal border border-charcoal/12 shadow-sm hover:shadow-md hover:border-coral/30 hover:bg-coral-light/10 active:scale-[0.97]'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Result */}
        <AnimatePresence>
          {answer2 && (
            <motion.div
              initial={{ opacity: 0, y: 30, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.6, ease }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-8 text-center">
                <div className="text-sm text-lavender-dark font-medium mb-2">
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
                    href="https://app.usedoubly.com"
                    className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-6 py-3 text-sm font-medium hover:bg-charcoal-light transition-all hover:scale-[1.02]"
                  >
                    {t.twoQuestions.mockupCta}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
