'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const question1Options = [
  'I freeze',
  'I do smaller random tasks instead',
  'I start 5 things at once',
  'I overthink the perfect plan',
  'I avoid it until it becomes urgent',
];

const question2Options = [
  'A brain dump',
  'One tiny next step',
  'Accountability',
  'A timer / focus push',
  'A reset when I fall behind',
];

const responseMap: Record<string, { title: string; description: string }> = {
  'I freeze': {
    title: 'Brain Dump + Next Step',
    description: 'When you freeze, getting thoughts out of your head and seeing just one doable step breaks the paralysis.',
  },
  'I do smaller random tasks instead': {
    title: 'Next Step Clarity',
    description: 'Doubly surfaces the one task that actually matters, so you stop busywork-ing your day away.',
  },
  'I start 5 things at once': {
    title: 'Focus Mode',
    description: 'Doubly keeps one task on screen. Finish it, then see the next. No more fragmented effort.',
  },
  'I overthink the perfect plan': {
    title: 'Brain Dump → Auto-sort',
    description: 'Dump everything, let Doubly pick the first step. No planning paralysis.',
  },
  'I avoid it until it becomes urgent': {
    title: 'Accountability Check-ins',
    description: 'Gentle nudges and social accountability help you move before the last minute.',
  },
};

export default function TwoQuestions() {
  const [answer1, setAnswer1] = useState<string | null>(null);
  const [answer2, setAnswer2] = useState<string | null>(null);
  const showResult = answer1 !== null && answer2 !== null;

  return (
    <section className="py-24 sm:py-32 px-6 bg-warm">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            Does this feel familiar?
          </h2>
        </motion.div>

        {/* Question 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal mb-5">
            When you need to start something, what usually happens?
          </h3>
          <div className="flex flex-wrap gap-3">
            {question1Options.map((option) => (
              <button
                key={option}
                onClick={() => setAnswer1(option)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  answer1 === option
                    ? 'bg-lavender text-white shadow-md shadow-lavender/20 scale-[1.03]'
                    : 'bg-white/80 text-charcoal-light border border-charcoal/8 hover:border-lavender/30 hover:bg-lavender-light/10'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
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
            What do you need most in that moment?
          </h3>
          <div className="flex flex-wrap gap-3">
            {question2Options.map((option) => (
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
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: 20, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-8 text-center">
                <div className="text-sm text-lavender-dark font-medium mb-2">
                  That&apos;s exactly where Doubly helps.
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal mb-3">
                  {answer1 && responseMap[answer1]?.title}
                </h3>
                <p className="text-muted leading-relaxed max-w-md mx-auto mb-6">
                  {answer1 && responseMap[answer1]?.description}
                </p>

                {/* Mini product mockup */}
                <div className="inline-block bg-cream rounded-2xl border border-charcoal/5 p-5 max-w-xs w-full">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-5 h-5 rounded-full bg-lavender-light flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2 2 4-4" stroke="#9585B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-charcoal">Your next step is ready</span>
                  </div>
                  <div className="bg-lavender-light/30 rounded-xl px-4 py-3 text-sm text-charcoal font-medium">
                    Start with one small thing
                  </div>
                </div>

                <div className="mt-6">
                  <a
                    href="https://app.usedoubly.com"
                    className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-6 py-3 text-sm font-medium hover:bg-charcoal-light transition-all hover:scale-[1.02]"
                  >
                    Use Doubly
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
