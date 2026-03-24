'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import t from '@/translations/en';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function VisualProblem() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            {t.problem.title}
          </h2>
        </motion.div>

        <motion.div style={{ y }} className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.visualProblem.cards.map((card, i) => (
            <motion.div
              key={card.alt}
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.15, ease }}
              className="relative rounded-3xl overflow-hidden shadow-md shadow-charcoal/5 hover:shadow-xl hover:shadow-charcoal/8 transition-shadow duration-500"
            >
              <div className="overflow-hidden mb-[-7%]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={1080}
                  height={1080}
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
