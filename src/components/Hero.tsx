'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import t from '@/translations/en';
import AppStoreButton from './AppStoreButton';

const floatingCards = [
  { label: t.hero.floatingCards.brainDump, icon: '💭', x: -150, y: -210, delay: 0.3, color: 'bg-lavender-light' },
  { label: t.hero.floatingCards.habits, icon: '🔁', x: 155, y: -40, delay: 0.5, color: 'bg-coral-light' },
  { label: t.hero.floatingCards.accountability, icon: '🤝', x: -140, y: 215, delay: 0.7, color: 'bg-sky-light' },
];

const ease = [0.25, 0.1, 0.25, 1] as const;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-6">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-warm pointer-events-none" />
      <motion.div style={{ y: bgY1 }} className="absolute top-20 right-1/4 w-96 h-96 rounded-full bg-lavender-light/20 blur-3xl pointer-events-none" />
      <motion.div style={{ y: bgY2 }} className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-coral-light/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Copy side */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
            >
              <span className="inline-block text-sm font-medium text-lavender-dark bg-lavender-light/30 rounded-full px-4 py-1.5 mb-6">
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              className="font-[family-name:var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold text-charcoal leading-[1.1] tracking-tight"
            >
              {t.hero.titlePrefix}{' '}
              <span className="text-lavender-dark">{t.hero.titleHighlight}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              {t.hero.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <AppStoreButton />
            </motion.div>
          </div>

          {/* Phone mockup side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease }}
            className="flex-1 relative flex items-center justify-center"
          >
            {/* Phone frame */}
            <div className="relative w-64 sm:w-72">
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-charcoal/10 border border-charcoal/5 overflow-hidden">
                {/* Real app screen */}
                <img
                  src="/hero-app-screen.png"
                  alt={t.hero.phone.screenAlt}
                  className="block w-full h-auto"
                />
              </div>

              {/* Floating cards */}
              {floatingCards.map((card) => (
                <div
                  key={card.label}
                  className="absolute hidden lg:block"
                  style={{
                    left: `calc(50% + ${card.x}px)`,
                    top: `calc(50% + ${card.y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                    transition={{
                      opacity: { duration: 0.6, delay: card.delay + 0.3 },
                      scale: { duration: 0.6, delay: card.delay + 0.3, ease },
                      y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: card.delay + 0.6 },
                    }}
                    className={`${card.color} rounded-2xl px-4 py-2.5 shadow-xl shadow-charcoal/10 ring-1 ring-black/[0.04] flex items-center gap-2`}
                  >
                    <span className="text-lg">{card.icon}</span>
                    <span className="text-sm font-medium text-charcoal whitespace-nowrap">{card.label}</span>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
