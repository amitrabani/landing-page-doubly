'use client';

import { MotionConfig, motion } from 'framer-motion';
import { useState } from 'react';
import ConfettiBurst from '@/components/motion/ConfettiBurst';
import { staggerChild, staggerContainer, VIEWPORT_ONCE } from '@/lib/motion';
import { useT } from '@/i18n/TranslationProvider';
import HabitIsland, { HABIT_ISLAND_KINDS, habitIslandGrowth, type HabitIslandKind } from './HabitIsland';
import IslandLabel from './IslandLabel';
import { villageColors as c } from './villageColors';

/**
 * The five habit islands, playable. Tapping an island keeps its habit once:
 * the count goes up by one, the island grows by the app's own rule, and the
 * line the app shows for that reward floats up off it. Showing beats telling:
 * nobody reads "a kept habit grows its own place", everybody taps an island.
 *
 * The starting counts are chosen so that the FIRST tap on three of the five
 * crosses a line, because that is where the rule shows itself: open water
 * becomes a sandbar (0 to 1), the farm gets its greenhouse (4 to 5), the track
 * gets its stand and finish gate (24 to 25). The library and the water start
 * mid-growth and simply widen, which is the other half of the rule.
 *
 * Counts only go up. Nothing here reads the clock and nothing is taken back,
 * the same promise the village makes in the app.
 */
const START_COUNTS: Record<HabitIslandKind, number> = {
  veggies: 4,
  strength: 0,
  running: 24,
  reading: 12,
  water: 2,
};

const BURST_COLORS = [c.crop, c.roofRidge, c.glassLit, c.sprout, c.foam];

export default function HabitIslandsPlayground() {
  const t = useT();
  const [counts, setCounts] = useState(START_COUNTS);
  // Which island was tapped last, for the floating reward line and the screen-reader announcement.
  const [lastKept, setLastKept] = useState<HabitIslandKind | null>(null);
  // A burst per island, fired only when a tap carries it into a new stage.
  const [bursts, setBursts] = useState<Partial<Record<HabitIslandKind, number>>>({});

  const keep = (kind: HabitIslandKind) => {
    const next = counts[kind] + 1;
    if (habitIslandGrowth(next).stage !== habitIslandGrowth(counts[kind]).stage) {
      setBursts((fired) => ({ ...fired, [kind]: (fired[kind] ?? 0) + 1 }));
    }
    setCounts((current) => ({ ...current, [kind]: next }));
    setLastKept(kind);
  };

  return (
    <MotionConfig reducedMotion="user">
      <motion.ul
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="flex flex-wrap justify-center gap-4"
      >
        {HABIT_ISLAND_KINDS.map((kind) => (
          <motion.li
            key={kind}
            variants={staggerChild}
            className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(20%-0.8rem)]"
          >
            <button
              type="button"
              onClick={() => keep(kind)}
              className="game-btn relative flex w-full cursor-pointer flex-col items-center rounded-3xl bg-[linear-gradient(180deg,#8cc6e8_0%,#63a5c9_100%)] px-2 pb-3 pt-2 [--game-btn-edge:#4e8fb5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavender"
            >
              <HabitIsland kind={kind} count={counts[kind]} className="block w-full" />
              <IslandLabel name={t.village.tiles[kind]} count={counts[kind]} />

              <span
                aria-hidden="true"
                dir="ltr"
                className="game-pill absolute end-2 top-2 rounded-full bg-white px-1.5 text-[11px] font-black leading-5 text-charcoal"
              >
                +1
              </span>

              {lastKept === kind ? (
                // Keyed by the count, so every tap starts the float again from the ground.
                <motion.span
                  key={counts[kind]}
                  aria-hidden="true"
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: [0, 1, 1, 0], y: [10, -2, -8, -20], scale: [0.9, 1, 1, 1] }}
                  transition={{ duration: 1.7, times: [0, 0.15, 0.7, 1], ease: 'easeOut' }}
                  className="pointer-events-none absolute inset-x-2 top-[9%] mx-auto w-fit max-w-[calc(100%-1rem)] rounded-xl px-2.5 py-1 text-center text-xs font-extrabold leading-snug shadow-md"
                  style={{ backgroundColor: c.wall, color: c.ink }}
                >
                  {t.village.rewards[kind]}
                </motion.span>
              ) : null}

              <ConfettiBurst fire={bursts[kind] ?? 0} count={14} colors={BURST_COLORS} />
            </button>
          </motion.li>
        ))}
      </motion.ul>

      {/* The same reward, said once for anyone who cannot see it float. */}
      <p aria-live="polite" className="sr-only">
        {lastKept ? `${t.village.tiles[lastKept]} ×${counts[lastKept]}. ${t.village.rewards[lastKept]}` : ''}
      </p>
    </MotionConfig>
  );
}
