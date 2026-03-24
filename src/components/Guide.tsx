'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import t from '@/translations/en';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Guide() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3, 0.7], [0.92, 1, 1]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 bg-warm">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease }}
            className="flex-1"
          >
            <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              {t.guide.title}
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed max-w-lg">
              {t.guide.subtitle}
            </p>
            <ul className="mt-8 space-y-4">
              {t.guide.proofPoints.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-sage/30 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6l2.5 2.5 4.5-5" stroke="#8A9B80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-charcoal-light font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: stacked app screenshots */}
          <motion.div
            style={{ y: imageY, scale: imageScale }}
            className="flex-1 flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              className="relative w-full max-w-md"
            >
              <Image
                src="/eisenhower-matrix.png"
                alt="Doubly's Eisenhower Matrix — tasks organized by urgency and importance"
                width={800}
                height={800}
                className="rounded-3xl shadow-xl shadow-charcoal/8 border border-charcoal/5"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
