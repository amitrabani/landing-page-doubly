'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useHydratedReducedMotion } from '@/components/motion/useHydratedReducedMotion';
import { useRef } from 'react';
import { EASE } from '@/lib/motion';
import WordReveal from '@/components/motion/WordReveal';
import Parallax from '@/components/motion/Parallax';
import TiltCard from '@/components/motion/TiltCard';
import MouseParallax, { MouseLayer } from '@/components/motion/MouseParallax';
import { useT } from '@/i18n/TranslationProvider';
import { APP_STORE_URL, trackAppStoreClick } from '@/lib/appStore';
import AppStoreButton from './AppStoreButton';
import SocialProofCounter from './SocialProofCounter';
import AndroidWaitlist from './AndroidWaitlist';
import HabitIsland, { type HabitIslandKind } from './village/HabitIsland';
import IslandLabel from './village/IslandLabel';
import { Birds, Butterfly, Cloud } from './village/VillageSprites';
import { villageColors } from './village/villageColors';

const iconProps = {
  width: 15,
  height: 15,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

const floatingCards = [
  {
    labelKey: 'brainDump' as const,
    color: 'bg-lavender',
    x: -150,
    y: -210,
    delay: 0.3,
    speed: 28,
    depth: 18,
    rotate: -3,
    icon: (
      <svg {...iconProps}>
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    labelKey: 'habits' as const,
    color: 'bg-coral',
    x: 155,
    y: -40,
    delay: 0.5,
    speed: 44,
    depth: 26,
    rotate: 2,
    icon: (
      <svg {...iconProps}>
        <path d="m17 2 4 4-4 4" />
        <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
        <path d="m7 22-4-4 4-4" />
        <path d="M21 13v1a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    labelKey: 'accountability' as const,
    color: 'bg-sky',
    x: -140,
    y: 215,
    delay: 0.7,
    speed: 60,
    depth: 34,
    rotate: -2,
    icon: (
      <svg {...iconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

/**
 * The habit islands afloat around the phone, the same five the screen on the
 * phone shows, with the same counts, so the picture and the page agree.
 *
 * Each hangs off one edge of the phone (`side`) at a height that misses the
 * three floating cards, tucked a little behind the frame so it reads as water
 * continuing past the device. On a narrow screen there is no room beside the
 * phone, so the islands tuck further in and lose their labels.
 */
const heroIslands: readonly {
  kind: HabitIslandKind;
  count: number;
  side: 'left' | 'right';
  /** How far down the phone it hangs, as a whole Tailwind class so the scanner can see it. */
  top: string;
  /** Extra classes that nudge this island in or out, so the five do not line up like a column. */
  nudge: string;
  depth: number;
  bob: number;
}[] = [
  { kind: 'running', count: 137, side: 'right', top: 'top-[3%]', nudge: '-ml-14 lg:-ml-5', depth: -10, bob: 5.2 },
  { kind: 'veggies', count: 184, side: 'left', top: 'top-[19%]', nudge: '-mr-14 lg:mr-1 xl:-mr-4', depth: 12, bob: 4.4 },
  { kind: 'strength', count: 92, side: 'right', top: 'top-[50%]', nudge: '-ml-16 lg:-ml-3 xl:ml-2', depth: 16, bob: 6 },
  { kind: 'reading', count: 76, side: 'left', top: 'top-[51%]', nudge: '-mr-16 lg:mr-1', depth: -8, bob: 5.6 },
  { kind: 'water', count: 263, side: 'right', top: 'top-[77%]', nudge: '-ml-12 lg:-ml-6', depth: 10, bob: 4.8 },
];

/** Butterflies around the phone: where each hovers, its colour, and how far out of step it flaps. */
const heroButterflies = [
  { left: '6%', top: '8%', fill: villageColors.roofRidge, delay: 0 },
  { left: '93%', top: '40%', fill: villageColors.crop, delay: 1.1 },
  { left: '12%', top: '90%', fill: villageColors.glassLit, delay: 2.3 },
] as const;

export default function Hero() {
  const t = useT();
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useHydratedReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  // Scroll-exit choreography: copy fades out, phone settles back as the hero scrolls away.
  const copyOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);

  return (
    <section id="hero" ref={sectionRef} className="relative overflow-hidden">
      <MouseParallax className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-6">
        {/* The village's sky, settling into the page's cream by the fold */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,#8cc6e8_0%,#c3e2f1_38%,#eef5ef_70%,#FBF8F3_100%)]" />
        {/* Sun in the upper left, clouds kept to the top third, a pair of birds for scale */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 420"
          preserveAspectRatio="xMidYMin slice"
          className="pointer-events-none absolute inset-x-0 top-0 h-[44vh] w-full"
        >
          <defs>
            <radialGradient id="hero-sun" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={villageColors.sun} stopOpacity={0.95} />
              <stop offset="45%" stopColor={villageColors.sun} stopOpacity={0.45} />
              <stop offset="100%" stopColor={villageColors.sun} stopOpacity={0} />
            </radialGradient>
          </defs>
          <ellipse cx={170} cy={50} rx={330} ry={260} fill="url(#hero-sun)" />
          <motion.g
            animate={reduced ? undefined : { x: [0, 28, 0] }}
            transition={{ duration: 38, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Cloud x={230} y={150} scale={2.1} />
            <Cloud x={1190} y={120} scale={2.5} />
          </motion.g>
          <motion.g
            animate={reduced ? undefined : { x: [0, -22, 0] }}
            transition={{ duration: 46, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Cloud x={700} y={110} scale={1.5} opacity={0.8} />
            <Cloud x={960} y={210} scale={1.7} opacity={0.85} />
          </motion.g>
          <Birds x={840} y={160} scale={1.6} />
        </svg>
        {/* Background blobs: scroll parallax (inner) nested inside mouse depth (outer) */}
        <MouseLayer depth={-14} className="absolute top-20 right-1/4 pointer-events-none">
          <motion.div
            style={reduced ? undefined : { y: bgY1 }}
            className="w-96 h-96 rounded-full bg-lavender-light/20 blur-3xl"
          />
        </MouseLayer>
        <MouseLayer depth={-20} className="absolute bottom-20 left-1/4 pointer-events-none">
          <motion.div
            style={reduced ? undefined : { y: bgY2 }}
            className="w-80 h-80 rounded-full bg-coral-light/15 blur-3xl"
          />
        </MouseLayer>

        {/* Ambient depth accents: tiny decorative motes that sell the depth field */}
        <MouseLayer depth={-26} className="absolute right-[22%] bottom-[18%] hidden md:block pointer-events-none">
          <div aria-hidden className="h-6 w-6 rounded-full bg-sky/20 blur-md" />
        </MouseLayer>
        <MouseLayer depth={22} className="absolute left-[9%] top-[24%] z-20 hidden md:block pointer-events-none">
          <div aria-hidden className="h-2.5 w-2.5 rounded-full bg-coral-light/50 blur-[1px]" />
        </MouseLayer>
        <MouseLayer depth={30} className="absolute right-[11%] top-[17%] z-20 hidden md:block pointer-events-none">
          <svg
            aria-hidden
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-lavender/60"
          >
            <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z" />
          </svg>
        </MouseLayer>

        <div className="relative z-10 mx-auto max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Copy side */}
            <motion.div
              style={reduced ? undefined : { opacity: copyOpacity }}
              className="flex-1 text-center lg:text-start"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
              >
                <span className="game-pill inline-block text-sm font-semibold text-charcoal bg-lavender-light rounded-full px-4 py-1.5">
                  {t.hero.badge}
                </span>
                {/* Live member count, dressed as a soft pill with a pulsing
                    dot so it reads as an active community, not an afterthought. */}
                <div className="game-pill inline-flex items-center gap-2 rounded-full bg-sage/25 px-3.5 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sage-dark/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-sage-dark" />
                  </span>
                  <SocialProofCounter className="text-sm font-medium text-charcoal" />
                </div>
              </motion.div>

              <WordReveal
                as="h1"
                aboveFold
                text={t.hero.titlePrefix + t.hero.titleHighlight}
                highlight={t.hero.titleHighlight}
                highlightClassName="text-lavender-dark"
                delay={0.15}
                className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-black text-charcoal leading-[1.1] tracking-tight"
              />

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
                className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                {t.hero.subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
                className="mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start"
              >
                <AppStoreButton placement="hero" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
                className="mt-4 flex flex-col items-center gap-3 lg:items-start"
              >
                <AndroidWaitlist />
              </motion.div>
            </motion.div>

            {/* Phone mockup side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: EASE }}
              className="flex-1 relative isolate flex items-center justify-center"
            >
              {/* Open sea behind the phone: the water the habit islands float in */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -z-20 h-[128%] w-[180%] max-w-[840px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(78,143,181,0.9),rgba(99,165,201,0.85)_45%,rgba(127,184,214,0.6)_72%,rgba(127,184,214,0)_100%)]"
              />
              {/* Butterflies adrift around the phone */}
              {heroButterflies.map((butterfly) => (
                <motion.svg
                  key={butterfly.left}
                  aria-hidden="true"
                  viewBox="0 0 16 12"
                  className="pointer-events-none absolute hidden h-5 w-6 md:block"
                  style={{ left: butterfly.left, top: butterfly.top }}
                  animate={reduced ? undefined : { y: [0, -10, 0], x: [0, 6, 0], rotate: [0, 8, 0] }}
                  transition={{
                    duration: 4 + butterfly.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: butterfly.delay,
                  }}
                >
                  <Butterfly x={8} y={6} scale={2.6} fill={butterfly.fill} />
                </motion.svg>
              ))}
              {/* Phone frame on a subtle mid-foreground plane. Narrower on a phone screen, so the
                  islands beside it fit inside the screen. The corner radius shrinks by the same
                  share, so the frame keeps its shape. */}
              <MouseLayer depth={6}>
                <motion.div style={reduced ? undefined : { scale: phoneScale }} className="relative w-56 sm:w-72">
                  <TiltCard
                    maxTilt={6}
                    sheen
                    className="game-panel-lg relative bg-white rounded-[2.2rem] sm:rounded-[2.5rem] overflow-hidden"
                  >
                    {/* Real app screen, links to the App Store */}
                    <a href={APP_STORE_URL} onClick={() => trackAppStoreClick('hero_phone')} className="block">
                      <img
                        src="/hero-habit-islands.jpg"
                        alt={t.hero.phone.screenAlt}
                        className="block w-full h-auto"
                      />
                    </a>
                  </TiltCard>

                  {/* Habit islands, behind the phone and out past both of its edges */}
                  {heroIslands.map((island, index) => (
                    <MouseLayer
                      key={island.kind}
                      depth={island.depth}
                      className={`pointer-events-none absolute -z-10 w-[124px] lg:w-[150px] xl:w-[176px] ${
                        island.side === 'left' ? 'right-full' : 'left-full'
                      } ${island.top} ${island.nudge}`}
                    >
                      <motion.div
                        animate={reduced ? undefined : { y: [0, -island.bob, 0] }}
                        transition={{ duration: island.bob, repeat: Infinity, ease: 'easeInOut' }}
                        className="flex flex-col items-center"
                      >
                        <HabitIsland kind={island.kind} count={island.count} riseDelay={0.7 + index * 0.12} className="block w-full" />
                        {/* No room for a label beside the phone on a narrow screen. The wrapper
                            hides it: `hidden` on the label itself would tie with its own
                            `inline-flex`, and stylesheet order would pick the winner. */}
                        <span className="-mt-1 hidden max-w-full lg:block">
                          <IslandLabel name={t.village.tiles[island.kind]} count={island.count} />
                        </span>
                      </motion.div>
                    </MouseLayer>
                  ))}

                  {/* Floating cards */}
                  {floatingCards.map((card) => (
                    <div
                      key={card.labelKey}
                      className="absolute hidden lg:block"
                      style={{
                        left: `calc(50% + ${card.x}px)`,
                        top: `calc(50% + ${card.y}px)`,
                        transform: `translate(-50%, -50%) rotate(${card.rotate}deg)`,
                      }}
                    >
                      <MouseLayer depth={card.depth}>
                        <Parallax speed={card.speed}>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
                            transition={{
                              opacity: { duration: 0.6, delay: card.delay + 0.3 },
                              scale: { duration: 0.6, delay: card.delay + 0.3, ease: EASE },
                              y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: card.delay + 0.6 },
                            }}
                            className="game-panel flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2.5"
                          >
                            <span className={`game-tile flex h-7 w-7 items-center justify-center rounded-[0.6rem] text-white ${card.color}`}>
                              {card.icon}
                            </span>
                            <span className="text-sm font-semibold text-charcoal whitespace-nowrap">{t.hero.floatingCards[card.labelKey]}</span>
                          </motion.div>
                        </Parallax>
                      </MouseLayer>
                    </div>
                  ))}
                </motion.div>
              </MouseLayer>
            </motion.div>
          </div>
        </div>
      </MouseParallax>
    </section>
  );
}
