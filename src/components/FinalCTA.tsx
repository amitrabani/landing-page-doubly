'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section id="get-doubly" className="py-24 sm:py-32 px-6 bg-gradient-to-b from-warm to-cream">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            Your brain doesn&apos;t need more pressure
          </h2>
          <p className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-lavender-dark mt-2">
            It needs a better starting point.
          </p>
          <p className="mt-6 text-muted text-lg max-w-lg mx-auto">
            For ADHD minds that need help starting, resetting, and following through.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.usedoubly.com"
              className="inline-flex items-center gap-3 rounded-full bg-charcoal text-cream px-10 py-4 text-lg font-medium hover:bg-charcoal-light transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-charcoal/10"
            >
              Use Doubly
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          <p className="mt-4 text-sm text-muted-light">Free to start. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  );
}
