'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { EASE, SPRING, SPRING_SOFT, VIEWPORT_ONCE, VIEWPORT_ONCE_TIGHT } from '@/lib/motion';
import Parallax from '@/components/motion/Parallax';
import TiltCard from '@/components/motion/TiltCard';
import { useT } from '@/i18n/TranslationProvider';

// Hand-placed feel: each card settles with its own slight tilt.
const ROTATIONS = [-1, 1, 0];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95, rotate: 0 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: ROTATIONS[i] ?? 0,
    transition: { duration: 0.7, ease: EASE },
  }),
  hover: { y: -6, rotate: 0 },
};

// The card surface answers the wrapper's hover with the wave-1 shadow + border tint,
// so the lift (wrapper), tilt (TiltCard) and glow (surface) each own their own element.
const surfaceVariants: Variants = {
  hover: {
    boxShadow: '0 18px 40px -18px rgba(45, 43, 50, 0.25)',
    borderColor: 'rgba(184, 169, 212, 0.2)',
  },
};

const starsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.45 },
  },
};

const starVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: SPRING },
};

export default function Testimonials() {
  const t = useT();
  const reduced = useReducedMotion();
  // Widen the tuple's literal length so the grid ternary below typechecks as
  // reviews get added (the section handles 1-3 cards).
  const count: number = t.testimonials.items.length;
  const gridClass =
    count >= 3
      ? 'md:grid-cols-3'
      : count === 2
        ? 'md:grid-cols-2 max-w-3xl mx-auto'
        : 'max-w-xl mx-auto';
  // The hand-placed middle-card lift only makes sense with 3 cards in a row;
  // with 2, it shoves the second card up so the pair no longer lines up evenly.
  const isThreeUp = count >= 3;

  return (
    <section id="testimonials" className="py-12 sm:py-16 px-6 bg-warm">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.8, ease: EASE }}
          className="text-center mb-12"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal leading-tight max-w-3xl mx-auto">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-muted text-lg">{t.testimonials.subtitle}</p>
        </motion.div>

        <div className="relative isolate">
          {/* Oversized quote glyph drifting on its own depth plane behind the grid */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-4 sm:-left-10 -z-10 select-none"
          >
            <Parallax speed={-14}>
              <div className="font-[family-name:var(--font-display)] text-[14rem] sm:text-[20rem] leading-none text-lavender/10 before:content-['\201C']" />
            </Parallax>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE_TIGHT}
            className={`grid gap-6 ${gridClass}`}
          >
            {t.testimonials.items.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={cardVariants}
                whileHover={reduced ? undefined : 'hover'}
                transition={SPRING_SOFT}
                className={`[perspective:1200px] ${isThreeUp && i === 1 ? 'md:-mt-4' : ''}`}
              >
                <TiltCard maxTilt={4} className="h-full">
                  <motion.div
                    variants={surfaceVariants}
                    transition={SPRING_SOFT}
                    className="h-full bg-white/80 rounded-3xl border border-charcoal/5 p-7 flex flex-col"
                  >
                    {/* Stars */}
                    <motion.div variants={starsContainerVariants} className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <motion.svg
                          key={j}
                          variants={starVariants}
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="#E8967A"
                        >
                          <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.67l-3.52 1.68.67-3.93L2.3 5.64l3.94-.57L8 1.5z" />
                        </motion.svg>
                      ))}
                    </motion.div>

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
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
