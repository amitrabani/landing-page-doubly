'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Empty your mind',
    body: 'Capture thoughts, tasks, and mental clutter fast. No organizing required — just get it out.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 13h12M10 17h8M10 21h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: 'text-lavender-dark',
    bg: 'bg-lavender-light/20',
  },
  {
    number: '02',
    title: 'Get one clear next step',
    body: "Doubly turns overwhelm into something you can actually begin. Not ten priorities — one.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    color: 'text-coral-dark',
    bg: 'bg-coral-light/20',
  },
  {
    number: '03',
    title: 'Stay in motion',
    body: 'Use accountability, timers, and progress tools to keep going — even when motivation fades.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26l5-8 5 4 5-10 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="18" r="2" fill="currentColor" />
      </svg>
    ),
    color: 'text-sage-dark',
    bg: 'bg-sage/20',
  },
];

export default function Plan() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            How Doubly helps you move
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Three simple steps. No complex setup. No learning curve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-charcoal/10" />
              )}

              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bg} ${step.color} mb-6`}
              >
                {step.icon}
              </div>
              <div className="text-xs font-semibold text-muted-light tracking-widest mb-2">
                STEP {step.number}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-3">
                {step.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
