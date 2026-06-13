'use client';

import { useRef } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from 'framer-motion';
import { EASE, SPRING, SPRING_SNAPPY, SPRING_SOFT, fadeRise, staggerContainer } from '@/lib/motion';
import TiltCard from '@/components/motion/TiltCard';
import WordReveal from '@/components/motion/WordReveal';
import t from '@/translations/en';

const stepIcons = [
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="4" y="6" width="24" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 13h12M10 17h8M10 21h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M6 26l5-8 5 4 5-10 5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="18" r="2" fill="currentColor" />
    </svg>
  ),
  (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <circle cx="11" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="22" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 26c0-3.5 3-6 7-6s7 2.5 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M19 24c.5-2.5 3-4.5 6-4.5s5 1.5 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
];

const stepStyles = [
  { color: 'text-lavender-dark', bg: 'bg-lavender-light/20', hover: 'hover:bg-lavender-light/40' },
  { color: 'text-coral-dark', bg: 'bg-coral-light/20', hover: 'hover:bg-coral-light/40' },
  { color: 'text-sage-dark', bg: 'bg-sage/20', hover: 'hover:bg-sage/35' },
  { color: 'text-sky', bg: 'bg-sky-light/25', hover: 'hover:bg-sky-light/45' },
];

const stepVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
};

/** 3D flip-in for the icon chips; each chip wrapper supplies [perspective:800px]. */
const chipVariants = (reduced: boolean) => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, rotateY: 70, scale: 0.8 },
  visible: reduced
    ? { opacity: 1, transition: { duration: 0.5, ease: EASE } }
    : { opacity: 1, rotateY: 0, scale: 1, transition: { ...SPRING, delay: 0.05 } },
});

const numberVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { opacity: 1, scale: 1, transition: { ...SPRING_SNAPPY, delay: 0.2 } },
};

/**
 * One continuous gradient thread that draws itself through the four steps as
 * the section scrolls into view. Desktop only; the wave passes through each
 * icon chip's vertical center (viewBox y=60 maps to chip center at 32px).
 */
function JourneyPath({
  pathLength,
  opacity,
}: {
  pathLength: MotionValue<number> | number;
  opacity: MotionValue<number> | number;
}) {
  return (
    <svg
      className="hidden md:block absolute inset-x-0 top-0 h-16 w-full pointer-events-none"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="plan-journey-gradient"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="1200"
          y2="0"
        >
          <stop offset="0" stopColor="#B8A9D4" />
          <stop offset="0.34" stopColor="#E8967A" />
          <stop offset="0.66" stopColor="#A8B5A0" />
          <stop offset="1" stopColor="#9EC5D9" />
        </linearGradient>
      </defs>
      <motion.path
        d="M150 60 C250 26 350 94 450 60 C550 26 650 94 750 60 C850 26 950 94 1050 60"
        stroke="url(#plan-journey-gradient)"
        strokeWidth={2.5}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{ pathLength, opacity }}
      />
    </svg>
  );
}

export default function Plan() {
  const reduced = useReducedMotion();
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ['start 0.92', 'start 0.4'],
  });
  const drawSpring = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 });
  const pathLength = useTransform(drawSpring, (v) => Math.min(Math.max(v, 0), 1));
  const pathOpacity = useTransform(scrollYProgress, [0, 0.04], [0, 0.7]);

  return (
    <section id="how-it-works" className="py-12 sm:py-16 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <WordReveal
            text={t.plan.title}
            as="h2"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight"
            highlight="unstuck"
            highlightClassName="text-lavender-dark"
          />
          <motion.p {...fadeRise(0.3, 20)} className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.plan.subtitle}
          </motion.p>
        </div>

        <motion.div
          ref={gridRef}
          variants={staggerContainer(0.18)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="relative grid sm:grid-cols-2 md:grid-cols-4 gap-8"
        >
          {/* Scroll-drawn journey thread connecting the 4 steps (desktop) */}
          <JourneyPath
            pathLength={reduced ? 1 : pathLength}
            opacity={reduced ? 0.7 : pathOpacity}
          />

          {t.plan.steps.map((step, i) => (
            <motion.div key={step.number} variants={stepVariants} className="relative text-center">
              {/* Gentle pointer tilt for the whole column; nested so it never fights the
                  entrance transforms on the variants element above. */}
              <TiltCard maxTilt={3}>
                <div className="inline-block [perspective:800px] mb-6">
                  <motion.div
                    variants={chipVariants(!!reduced)}
                    whileHover={{ y: -4, scale: 1.06 }}
                    transition={SPRING_SOFT}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl transition-colors duration-300 ${stepStyles[i].bg} ${stepStyles[i].hover} ${stepStyles[i].color}`}
                  >
                    {stepIcons[i]}
                  </motion.div>
                </div>
                <motion.div
                  variants={numberVariants}
                  className="text-xs font-semibold text-muted-light tracking-widest mb-2"
                >
                  {t.plan.stepLabel} {step.number}
                </motion.div>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal mb-3">
                  {step.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs mx-auto">{step.body}</p>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
