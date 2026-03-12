'use client';

import { motion } from 'framer-motion';

const problems = [
  {
    type: 'External',
    title: 'Too many tasks. Too many thoughts.',
    body: 'No clear starting point. Everything feels equally urgent and equally impossible.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="9" cy="12" r="1.5" fill="currentColor" />
        <circle cx="14" cy="8" r="1.5" fill="currentColor" />
        <circle cx="19" cy="13" r="1.5" fill="currentColor" />
        <circle cx="12" cy="18" r="1.5" fill="currentColor" />
        <circle cx="17" cy="17" r="1.5" fill="currentColor" />
      </svg>
    ),
    color: 'bg-coral-light/20 text-coral-dark',
  },
  {
    type: 'Internal',
    title: "You know what to do — but can't begin.",
    body: "The gap between knowing and doing feels impossible to cross. It's not laziness. It's initiation resistance.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="14" cy="20" r="1.5" fill="currentColor" />
      </svg>
    ),
    color: 'bg-lavender-light/30 text-lavender-dark',
  },
  {
    type: 'Philosophical',
    title: "It shouldn't be this hard to start normal things.",
    body: "You shouldn't need superhuman effort just to begin. Your brain works differently — your tools should too.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.5L14 16.7 9.1 19.2l.9-5.5-4-3.9 5.5-.8L14 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    color: 'bg-sky-light/30 text-sky',
  },
];

export default function Problem() {
  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            ADHD is not just &ldquo;being unorganized&rdquo;
          </h2>
          <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
            It&apos;s a daily battle with a brain that won&apos;t cooperate with your own intentions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative rounded-3xl bg-white/70 backdrop-blur-sm border border-charcoal/5 p-8 hover:shadow-lg hover:shadow-charcoal/5 transition-shadow"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl ${p.color} mb-5`}>
                {p.icon}
              </div>
              <div className="text-xs font-medium text-muted-light uppercase tracking-wider mb-2">
                {p.type}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
