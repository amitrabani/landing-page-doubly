'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import t from '@/translations/en';

export default function TwoQuestions() {
  const [answer2, setAnswer2] = useState<string | null>(null);

  return (
    <section className="py-24 sm:py-32 px-6 bg-warm">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            {t.twoQuestions.title}
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.twoQuestions.subtitle}
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 overflow-hidden mb-12"
        >
          {/* Table header */}
          <div className="grid grid-cols-2 text-sm font-semibold">
            <div className="px-6 sm:px-8 py-4 text-coral-dark bg-coral-light/15 border-b border-charcoal/5">
              {t.twoQuestions.withoutDoubly}
            </div>
            <div className="px-6 sm:px-8 py-4 text-sage-dark bg-sage/15 border-b border-charcoal/5">
              {t.twoQuestions.withDoubly}
            </div>
          </div>

          {/* Rows */}
          {t.twoQuestions.rows.map((row, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 * idx }}
              className={`grid grid-cols-2 ${
                idx < t.twoQuestions.rows.length - 1 ? 'border-b border-charcoal/5' : ''
              }`}
            >
              <div className="px-6 sm:px-8 py-5 text-sm sm:text-base text-charcoal-light leading-relaxed">
                {row.without}
              </div>
              <div className="px-6 sm:px-8 py-5 text-sm sm:text-base text-charcoal font-medium leading-relaxed">
                {row.with}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Question 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
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
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  answer2 === option
                    ? 'bg-coral text-white shadow-md shadow-coral/20 scale-[1.03]'
                    : 'bg-white/80 text-charcoal-light border border-charcoal/8 hover:border-coral-light/40 hover:bg-coral-light/10'
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
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
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

                {/* Mini product mockup */}
                <div className="inline-block bg-cream rounded-2xl border border-charcoal/5 p-5 max-w-xs w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full bg-lavender-light flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#9585B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-charcoal">{t.twoQuestions.mockupNextStep}</span>
                  </div>
                  <div className="bg-lavender-light/30 rounded-xl px-4 py-3 text-sm text-charcoal font-medium">
                    {t.twoQuestions.mockupTask}
                  </div>
                </div>

                <div className="mt-6">
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
