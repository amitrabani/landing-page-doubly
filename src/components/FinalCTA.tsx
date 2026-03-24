'use client';

import { motion } from 'framer-motion';
import t from '@/translations/en';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function FinalCTA() {
  return (
    <section id="get-doubly" className="py-24 sm:py-32 px-6 bg-gradient-to-b from-warm to-cream">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.88 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease }}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight"
        >
          {t.finalCta.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-lavender-dark mt-2"
        >
          {t.finalCta.highlight}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-6 text-muted text-lg max-w-lg mx-auto"
        >
          {t.finalCta.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://app.usedoubly.com"
            className="inline-flex items-center gap-3 rounded-full bg-charcoal text-cream px-10 py-4 text-lg font-medium hover:bg-charcoal-light transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-charcoal/10"
          >
            {t.finalCta.cta}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6, ease }}
          className="mt-4 text-sm text-muted-light"
        >
          {t.finalCta.disclaimer}
        </motion.p>
      </div>
    </section>
  );
}
