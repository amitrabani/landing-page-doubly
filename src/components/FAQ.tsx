'use client';

import { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { EASE, SPRING, VIEWPORT_ONCE, VIEWPORT_ONCE_TIGHT } from '@/lib/motion';
import { useT } from '@/i18n/TranslationProvider';

const listVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE, staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      variants={itemVariants}
      transition={{ layout: { duration: 0.35, ease: EASE } }}
      className="border-b border-charcoal/8 last:border-0 -mx-3 px-3 rounded-2xl transition-colors hover:bg-lavender/5"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={open}
      >
        <span className="font-[family-name:var(--font-display)] text-base sm:text-lg font-medium text-charcoal pr-8 group-hover:text-lavender-dark transition-colors">
          {faq.q}
        </span>
        <motion.div
          initial={false}
          animate={{
            rotate: open ? 45 : 0,
            backgroundColor: open ? 'rgba(184, 169, 212, 0.18)' : 'rgba(45, 43, 50, 0.05)',
          }}
          transition={{ rotate: SPRING, backgroundColor: { duration: 0.3, ease: 'easeOut' } }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-[color] ${
            open ? 'text-lavender-dark' : 'text-charcoal-light'
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            layout
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted text-sm leading-relaxed max-w-2xl">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const t = useT();
  return (
    <section id="faq" className="py-12 sm:py-16 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-semibold tracking-tight text-charcoal">
            {t.faq.title}
          </h2>
        </motion.div>

        <motion.div
          layout
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE_TIGHT}
          className="bg-white/60 backdrop-blur-sm rounded-3xl border border-charcoal/5 px-6 sm:px-8"
        >
          {t.faq.items.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
