'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Brain Dump',
    body: 'Get thoughts out fast before they disappear. No categories, no pressure — just capture.',
    color: 'bg-lavender-light/25 text-lavender-dark',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3c-4.97 0-9 3.13-9 7 0 2.38 1.56 4.5 4 5.7V20l3.5-2h1.5c4.97 0 9-3.13 9-7s-4.03-7-9-7z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 9h8M8 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Next-Step Clarity',
    body: 'Turn "I should do something" into one visible action. Doubly picks your starting point.',
    color: 'bg-coral-light/25 text-coral-dark',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Accountability',
    body: 'Social check-ins and gentle nudges help you actually follow through — not just plan.',
    color: 'bg-sky-light/30 text-sky',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 20c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 20c0-2.21 1.34-4 3-4s3 1.79 3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Momentum Tools',
    body: "Timers, habits, and progress tracking that don't disappear the second life gets messy.",
    color: 'bg-sage/20 text-sage-dark',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="13" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 9v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 3h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            Everything designed to reduce friction
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Not more features. Less resistance between you and doing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-3xl bg-white/70 backdrop-blur-sm border border-charcoal/5 p-8 hover:shadow-lg hover:shadow-charcoal/5 transition-all"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${f.color} mb-5 group-hover:scale-110 transition-transform`}>
                {f.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-2">
                {f.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
