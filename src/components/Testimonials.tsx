'use client';

import { motion } from 'framer-motion';
import t from '@/translations/en';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 px-6 bg-warm">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight max-w-3xl mx-auto">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-muted text-lg">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.testimonials.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white/80 rounded-3xl border border-charcoal/5 p-7 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="#E8967A">
                    <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.67l-3.52 1.68.67-3.93L2.3 5.64l3.94-.57L8 1.5z" />
                  </svg>
                ))}
              </div>

              <p className="text-charcoal text-sm leading-relaxed flex-1">&ldquo;{item.quote}&rdquo;</p>

              <div className="mt-5 pt-5 border-t border-charcoal/5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-lavender-light/40 flex items-center justify-center text-sm font-semibold text-lavender-dark">
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-charcoal">{item.name}</div>
                    <div className="text-xs text-muted-light">{item.label}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
