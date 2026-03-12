'use client';

import { motion } from 'framer-motion';

export default function Stakes() {
  return (
    <section className="py-24 sm:py-28 px-6">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
            Because staying stuck has a cost
          </h2>
          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl mx-auto">
            When every task feels heavy, days disappear into avoidance, guilt, and mental clutter.
            Doubly helps break that cycle — before &ldquo;I&apos;ll do it later&rdquo; turns into another lost week.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
