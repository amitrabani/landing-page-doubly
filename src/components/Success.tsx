'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { EASE, fadeRise } from '@/lib/motion';
import MouseParallax, { MouseLayer } from '@/components/motion/MouseParallax';
import WordReveal from '@/components/motion/WordReveal';
import t from '@/translations/en';

export default function Success() {
  const imageRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.4], [0.88, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const imageRotateX = useTransform(scrollYProgress, [0, 0.45], [9, 0]);
  const imageRotateY = useTransform(scrollYProgress, [0, 1], [-4, 2.5]);
  // The glow breathes in as the card travels through the section.
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.2, 0.5]);

  return (
    <section className="py-24 sm:py-32 px-6 bg-gradient-to-b from-cream to-lavender-light/10">
      <div className="mx-auto max-w-4xl text-center">
        <WordReveal
          text={t.success.title}
          as="h2"
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight"
        />
        <motion.p {...fadeRise(0.25, 20)} className="mt-4 text-muted text-lg max-w-xl mx-auto">
          {t.success.subtitle}
        </motion.p>

        <MouseParallax className="relative isolate mt-14 mx-auto max-w-sm sm:max-w-md lg:max-w-lg">
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
                    y: imageY,
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
              <div className="relative rounded-3xl overflow-hidden bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.03]">
                <img
                  src="/social-proof.png"
                  alt="Doubly app post detail showing a completed task with community reactions and comments"
                  className="w-full h-auto block max-h-[50vh] object-cover object-top"
                />
                {/* Soft edge vignette */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl shadow-[inset_0_0_30px_rgba(0,0,0,0.03)]" />
              </div>
            </motion.div>
          </motion.div>
          </div>
        </MouseParallax>
      </div>
    </section>
  );
}
