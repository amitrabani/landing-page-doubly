'use client';

import { motion } from 'framer-motion';
import t from '@/translations/en';

export default function Success() {
  return (
    <section className="py-24 sm:py-32 px-6 bg-gradient-to-b from-cream to-lavender-light/10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            {t.success.title}
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.success.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {t.success.outcomes.map((outcome, i) => (
            <motion.div
              key={outcome}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
              className="flex items-center gap-3 bg-white/80 rounded-2xl px-5 py-4 border border-charcoal/5"
            >
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/20 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7l3 3 5-5.5" stroke="#8A9B80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm font-medium text-charcoal text-left">{outcome}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
