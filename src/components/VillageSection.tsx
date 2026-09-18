'use client';

import { motion } from 'framer-motion';
import { fadeRise, fadeRiseScale, staggerChild, staggerContainer, VIEWPORT_ONCE } from '@/lib/motion';
import { useT } from '@/i18n/TranslationProvider';
import HabitIslandsPlayground from './village/HabitIslandsPlayground';
import VillageIsland from './village/VillageIsland';
import { VillageIcon, type VillageIconKind } from './village/VillageSprites';

/**
 * The game inside the app: the island that grows one piece per finished task
 * and per kept habit. The copy is the app's own village.* strings, so the
 * promise here is exactly the one the app keeps.
 *
 * Three parts, in the order the rules are taught: the home island (a finished
 * task is a home and a tree), the habit islands, which are playable (a kept
 * habit grows its own place), then the inventory of everything else.
 *
 * The inventory counts what the home island's drawing really holds, so the
 * numbers are honest: change one and change the other. The five habit places
 * are not in it, because their islands carry their own live counts.
 */
const BUILT: readonly { kind: VillageIconKind; count: number; tint: string }[] = [
  { kind: 'homes', count: 7, tint: 'bg-[#fbe3d9]' },
  { kind: 'trees', count: 12, tint: 'bg-[#dff0c9]' },
  { kind: 'rest', count: 6, tint: 'bg-[#fff0c2]' },
  { kind: 'other', count: 8, tint: 'bg-[#f3e6c4]' },
  { kind: 'fruit', count: 5, tint: 'bg-[#e9dff5]' },
  { kind: 'outdoors', count: 3, tint: 'bg-[#cfe9f5]' },
  { kind: 'limits', count: 4, tint: 'bg-[#fbe3d9]' },
];

export default function VillageSection() {
  const t = useT();

  return (
    <section
      id="village"
      className="relative overflow-hidden px-6 py-16 sm:py-24 bg-[linear-gradient(180deg,#FBF8F3_0%,#d9edf8_30%,#e3f0d3_100%)]"
    >
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <motion.span
            {...fadeRise(0)}
            className="game-pill inline-block rounded-full bg-lavender-light px-4 py-1.5 text-sm font-semibold text-charcoal"
          >
            {t.village.name}
          </motion.span>
          <motion.h2
            {...fadeRise(0.08)}
            className="mt-5 font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-charcoal"
          >
            {t.village.ruleTask}
          </motion.h2>
        </div>

        <motion.div
          {...fadeRiseScale(0.2)}
          className="game-panel-lg relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] bg-[#8cc6e8]"
        >
          <VillageIsland className="block w-full" label={t.village.name} />
        </motion.div>

        <motion.h3
          {...fadeRise(0)}
          className="mx-auto mt-16 max-w-2xl text-center font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-black leading-snug text-charcoal"
        >
          {t.village.ruleHabit}
        </motion.h3>
        <div className="mt-8">
          <HabitIslandsPlayground />
        </div>

        <motion.h3
          {...fadeRise(0)}
          className="mt-16 text-center text-sm font-bold uppercase tracking-wide text-charcoal-light"
        >
          {t.village.tilesTitle}
        </motion.h3>
        <motion.ul
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="mt-6 flex flex-wrap justify-center gap-4"
        >
          {BUILT.map(({ kind, count, tint }) => (
            <motion.li
              key={kind}
              variants={staggerChild}
              className={`game-panel game-panel-hover flex w-[calc(50%-0.5rem)] items-center gap-3 rounded-2xl sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(25%-0.75rem)] ${tint} px-3 py-3`}
            >
              <span className="game-tile relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white">
                <VillageIcon kind={kind} className="h-10 w-10" />
                <span
                  dir="ltr"
                  className="game-pill absolute -top-2.5 -end-3 rounded-full bg-white px-1.5 text-[11px] font-black leading-5 text-charcoal"
                >
                  ×{count}
                </span>
              </span>
              <span className="min-w-0 flex-1 text-sm font-bold leading-tight text-charcoal">
                {t.village.tiles[kind]}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p {...fadeRise(0.1)} className="mt-10 text-center text-base text-charcoal-light">
          {t.village.nothingIsLost}
        </motion.p>
      </div>
    </section>
  );
}
