'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { EASE } from '@/lib/motion';
import MouseParallax, { MouseLayer } from '@/components/motion/MouseParallax';
import { useT } from '@/i18n/TranslationProvider';

export default function Success() {
  const t = useT();
  const imageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.4], [0.92, 1]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.45], [6, 0]);
  const imageRotateY = useTransform(scrollYProgress, [0, 1], [-2, 1]);
  // The glow breathes in as the card travels through the section.
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);

  return (
    <section className="py-12 sm:py-16 px-6 bg-gradient-to-b from-cream to-lavender-light/10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight"
        >
          {t.success.subtitle}
        </motion.h2>

        <MouseParallax className="relative isolate mt-10 mx-auto max-w-xs sm:max-w-sm">
          {/* Pastel accents on their own pointer depths, flanking the card */}
          <MouseLayer
            depth={-14}
            className="pointer-events-none absolute -top-10 -left-16 -z-10 hidden sm:block"
          >
            <div aria-hidden className="h-36 w-36 rounded-full bg-sage/40 blur-2xl" />
          </MouseLayer>
          <MouseLayer
            depth={20}
            className="pointer-events-none absolute -bottom-8 -right-14 z-10 hidden sm:block"
          >
            <div aria-hidden className="h-24 w-24 rounded-full bg-coral-light/40 blur-xl" />
          </MouseLayer>

          <div className="[perspective:1200px]">
          <motion.div
            ref={imageRef}
            style={
              reduced
                ? undefined
                : {
                    scale: imageScale,
                    rotateX: imageRotateX,
                    rotateY: imageRotateY,
                    transformStyle: 'preserve-3d',
                  }
            }
            className="relative isolate"
          >
            {/* Soft lavender radial glow behind the card, brightening with scroll */}
            <motion.div
              aria-hidden
              style={{ opacity: reduced ? 0.5 : glowOpacity }}
              className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(184,169,212,0.8),transparent_70%)] blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: EASE }}
            >
              <img
                src="/success-social-proof.png"
                alt={t.success.imageAlt}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </motion.div>
          </motion.div>
          </div>
        </MouseParallax>
      </div>
    </section>
  );
}
