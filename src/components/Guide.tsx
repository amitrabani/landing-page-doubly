'use client';

import { motion } from 'framer-motion';

const proofPoints = [
  'Built for ADHD friction, not generic productivity',
  'Helps reduce initiation resistance',
  'Gives structure without overwhelming you',
];

export default function Guide() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-warm">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              Built for the moment everything feels too much
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed max-w-lg">
              Most productivity apps assume your brain is ready to plan. Doubly is for the moment
              you&apos;re overwhelmed, stuck, avoiding, or bouncing between ten things.
            </p>
            <ul className="mt-8 space-y-4">
              {proofPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sage/30 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6l2.5 2.5 4.5-5" stroke="#8A9B80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-charcoal-light font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: stacked app screenshots */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex items-center justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Card 1 — brain dump */}
              <div className="relative z-30 bg-white rounded-2xl shadow-xl shadow-charcoal/8 border border-charcoal/5 p-5">
                <div className="text-xs font-medium text-lavender-dark mb-3">Brain Dump</div>
                <div className="space-y-2">
                  {['call dentist', 'buy groceries', 'reply to boss', 'laundry', 'why am I so tired'].map(
                    (item) => (
                      <div
                        key={item}
                        className="bg-lavender-light/20 rounded-xl px-3 py-2 text-sm text-charcoal-light"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Card 2 — next step (offset behind) */}
              <div className="absolute top-8 -right-4 z-20 bg-white rounded-2xl shadow-lg shadow-charcoal/5 border border-charcoal/5 p-5 w-52">
                <div className="text-xs font-medium text-coral-dark mb-2">Your next step</div>
                <div className="bg-coral-light/20 rounded-xl px-3 py-3 text-sm font-medium text-charcoal">
                  Put laundry in washer
                </div>
                <div className="mt-2 text-xs text-muted-light">~5 min · low energy</div>
              </div>

              {/* Card 3 — accountability (bottom right) */}
              <div className="absolute -bottom-6 right-2 z-10 bg-white rounded-2xl shadow-lg shadow-charcoal/5 border border-charcoal/5 p-4 w-48">
                <div className="text-xs font-medium text-sky mb-2">Accountability</div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-sky-light" />
                  <span className="text-xs text-charcoal-light">Sarah checking in at 3pm</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
