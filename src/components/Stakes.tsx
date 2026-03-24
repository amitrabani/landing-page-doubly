'use client';

import { motion } from 'framer-motion';
import t from '@/translations/en';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Stakes() {
  return (
    <section className="py-24 sm:py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease }}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal leading-tight"
        >
          {t.stakes.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-6 text-muted text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {t.stakes.body}
        </motion.p>
      </div>
    </section>
  );
}
