'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import t from '@/translations/en';
import { EASE, VIEWPORT_ONCE_TIGHT } from '@/lib/motion';
import WordReveal from '@/components/motion/WordReveal';
import Parallax from '@/components/motion/Parallax';
import TiltCard from '@/components/motion/TiltCard';

/** Each card drifts on its own depth plane while scrolling. */
const CARD_SPEEDS = [18, 34, 26, 42];

export default function VisualProblem() {
  return (
    <section className="py-12 sm:py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <WordReveal
            text={t.problem.title}
            as="h2"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal leading-tight"
            highlight="unorganized"
            highlightClassName="text-lavender-dark"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {t.visualProblem.cards.map((card, i) => (
            <Parallax key={card.alt} speed={CARD_SPEEDS[i % CARD_SPEEDS.length]}>
              <motion.div
                initial={{ opacity: 0, y: 64, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={VIEWPORT_ONCE_TIGHT}
                transition={{ duration: 0.85, delay: i * 0.13, ease: EASE }}
              >
                <TiltCard
                  maxTilt={4}
                  className="group relative rounded-3xl overflow-hidden shadow-md shadow-charcoal/5 transition-shadow duration-500 hover:shadow-2xl hover:shadow-charcoal/15"
                >
                  <div className="overflow-hidden mb-[-7%]">
                    <Image
                      src={card.image}
                      alt={card.alt}
                      width={1080}
                      height={1080}
                      className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transform-none"
                    />
                  </div>
                </TiltCard>
              </motion.div>
            </Parallax>
          ))}
        </div>
      </div>
    </section>
  );
}
