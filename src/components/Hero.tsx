'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import t from '@/translations/en';

const floatingCards = [
  { label: t.hero.floatingCards.brainDump, icon: '💭', x: -180, y: -60, delay: 0.3, color: 'bg-lavender-light' },
  { label: t.hero.floatingCards.nextStep, icon: '✨', x: 180, y: -40, delay: 0.5, color: 'bg-coral-light' },
  { label: t.hero.floatingCards.accountability, icon: '🤝', x: 0, y: 160, delay: 0.7, color: 'bg-sky-light' },
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
              <a
                href="https://app.usedoubly.com"
                className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-8 py-4 text-lg font-medium hover:bg-charcoal-light transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.hero.cta}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="ml-1">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 text-charcoal px-8 py-4 text-lg font-medium hover:bg-charcoal/5 transition-all"
              >
                {t.hero.secondaryCta}
              </a>
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
                {/* Status bar */}
                <div className="h-12 bg-cream flex items-center justify-center">
                  <div className="w-20 h-5 bg-charcoal/10 rounded-full" />
                </div>
                {/* Screen content — simplified app UI */}
                <div className="px-5 pb-6 bg-cream">
                  <div className="text-xs font-medium text-muted-light mb-3">{t.hero.phone.greeting}</div>
                  <div className="text-base font-[family-name:var(--font-display)] font-semibold text-charcoal mb-4">
                    {t.hero.phone.yourNextStep}
                  </div>
                  {/* Active task card */}
                  <div className="bg-lavender-light/40 rounded-2xl p-4 mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full border-2 border-lavender-dark" />
                      <span className="text-sm font-medium text-charcoal">{t.hero.phone.activeTask}</span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="text-xs text-lavender-dark bg-lavender-light/60 rounded-full px-2.5 py-0.5">
                        {t.hero.phone.duration}
                      </div>
                      <div className="text-xs text-muted-light">{t.hero.phone.fromBrainDump}</div>
                    </div>
                  </div>
                  {/* Dimmed tasks */}
                  <div className="space-y-2 opacity-40">
                    <div className="bg-white/60 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border border-charcoal/20" />
                      <span className="text-xs text-muted">{t.hero.phone.task1}</span>
                    </div>
                    <div className="bg-white/60 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full border border-charcoal/20" />
                      <span className="text-xs text-muted">{t.hero.phone.task2}</span>
                    </div>
                  </div>
                  {/* Bottom bar mockup */}
                  <div className="mt-4 flex items-center justify-around py-2 border-t border-charcoal/5">
                    {['home', 'dump', 'focus', 'profile'].map((item) => (
                      <div key={item} className="w-6 h-6 rounded-lg bg-charcoal/10" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              {floatingCards.map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -6, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.6, delay: card.delay + 0.3 },
                    scale: { duration: 0.6, delay: card.delay + 0.3, ease },
                    y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: card.delay + 0.6 },
                  }}
                  className={`absolute ${card.color} rounded-2xl px-4 py-3 shadow-lg shadow-charcoal/5 flex items-center gap-2`}
                  style={{
                    left: `calc(50% + ${card.x}px)`,
                    top: `calc(50% + ${card.y}px)`,
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <span className="text-lg">{card.icon}</span>
                  <span className="text-sm font-medium text-charcoal whitespace-nowrap">{card.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
