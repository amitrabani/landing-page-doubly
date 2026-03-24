'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import t from '@/translations/en';

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Success() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.4], [0.88, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -30]);

  return (
    <section className="py-24 sm:py-32 px-6 bg-gradient-to-b from-cream to-lavender-light/10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            {t.success.title}
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.success.subtitle}
          </p>
        </motion.div>

        <motion.div
          ref={imageRef}
          style={{ scale: imageScale, y: imageY }}
          className="mt-14 mx-auto relative max-w-sm sm:max-w-md lg:max-w-lg"
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03]">
              <img
                src="/social-proof.png"
                alt="Social media posts from real users sharing their productivity wins"
                className="w-full h-auto block"
              />
              {/* Soft edge vignette */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.03)]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
