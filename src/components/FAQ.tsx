'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    q: 'Is Doubly only for people diagnosed with ADHD?',
    a: "No. Doubly is for anyone who struggles with starting, overwhelm, or mental clutter. You don't need a diagnosis, just a brain that sometimes freezes when there's too much to do.",
  },
  {
    q: 'How is this different from a normal to-do app?',
    a: "To-do apps help you list things. Doubly helps you actually begin them. We focus on reducing initiation resistance, the gap between knowing what to do and doing it, with brain dumps, one-step clarity, and accountability.",
  },
  {
    q: 'Does it help with task initiation specifically?',
    a: "Yes. That's our core focus. Brain dump clears mental clutter, next-step clarity picks one doable action, and accountability tools help you follow through. Every feature is built around that first step.",
  },
  {
    q: 'What makes accountability different here?',
    a: "It's not nagging or streaks that make you feel guilty. Doubly uses gentle social check-ins with real people who care about your progress, so you have someone in your corner, not a robot shaming you.",
  },
  {
    q: 'Does it replace habit trackers or planners?',
    a: "It can. But Doubly isn't trying to be a swiss army knife. It's laser-focused on helping you move from stuck to started. If you need detailed project planning, pair it with your existing tools.",
  },
  {
    q: 'Is it good if I get overwhelmed easily?',
    a: "Especially then. Doubly never shows you everything at once. You see one next step, not a wall of tasks. The entire UX is designed for brains that get overloaded fast.",
  },
];

function FAQItem({ faq, index }: { faq: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="border-b border-charcoal/8 last:border-0"
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
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-charcoal/5 flex items-center justify-center text-charcoal-light"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
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
  return (
    <section id="faq" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal">
            Questions
          </h2>
        </motion.div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl border border-charcoal/5 px-6 sm:px-8">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
