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
 * The five habit islands, playable. Each island takes ONE tap. The tap keeps
 * its habit once: the count goes up by one, the island grows by the app's own
 * rule, and the line the app shows for that reward floats up off it. Showing
 * beats telling: nobody reads "a kept habit grows its own place", everybody
 * taps an island.
 *
 * After its tap an island is used up. Its button stays pressed down and
 * ignores every further tap, and its "+1" badge becomes a check mark. The
 * button is marked aria-disabled, not disabled: a disabled button drops the
 * keyboard focus, and a screen reader could no longer find the new count.
 *
 * The starting counts are chosen so that the tap on three of the five crosses
 * a line, because that is where the rule shows itself: open water becomes a
 * sandbar (0 to 1), the farm gets its greenhouse (4 to 5), the track gets its
 * stand and finish gate (24 to 25). The library and the water start
 * mid-growth: their tap adds one to the count and widens the island a little.
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
  // The islands tapped so far, in tap order. An island is in here at most once.
  const [keptKinds, setKeptKinds] = useState<readonly HabitIslandKind[]>([]);
  // The floating reward line and the screen-reader announcement follow the last tap.
  const lastKept = keptKinds.length > 0 ? keptKinds[keptKinds.length - 1] : null;

  const keep = (kind: HabitIslandKind) => {
    setKeptKinds((kept) => (kept.includes(kind) ? kept : [...kept, kind]));
  };

  const countOf = (kind: HabitIslandKind) => START_COUNTS[kind] + (keptKinds.includes(kind) ? 1 : 0);

  return (
    <MotionConfig reducedMotion="user">
      <motion.ul
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        className="flex flex-wrap justify-center gap-4"
      >
        {HABIT_ISLAND_KINDS.map((kind) => {
          const isKept = keptKinds.includes(kind);
          const count = countOf(kind);
          // A burst only when the tap carried the island into a new stage.
          const reachedNewStage = habitIslandGrowth(count).stage !== habitIslandGrowth(START_COUNTS[kind]).stage;

          return (
            <motion.li
              key={kind}
              variants={staggerChild}
              className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.667rem)] lg:w-[calc(20%-0.8rem)]"
            >
              <button
                type="button"
                aria-disabled={isKept}
                onClick={() => keep(kind)}
                className={`game-btn relative flex w-full flex-col items-center rounded-3xl bg-[linear-gradient(180deg,#8cc6e8_0%,#63a5c9_100%)] px-2 pb-3 pt-2 [--game-btn-edge:#4e8fb5] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-lavender ${
                  isKept ? 'cursor-default' : 'cursor-pointer'
                }`}
              >
                <HabitIsland kind={kind} count={count} className="block w-full" />
                <IslandLabel name={t.village.tiles[kind]} count={count} />

                {isKept ? (
                  <span
                    aria-hidden="true"
                    className="game-pill absolute end-2 top-2 flex h-6 w-6 items-center justify-center rounded-full text-white"
                    style={{ backgroundColor: c.leafDeep }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                ) : (
                  <span
                    aria-hidden="true"
                    dir="ltr"
                    className="game-pill absolute end-2 top-2 rounded-full bg-white px-1.5 text-[11px] font-black leading-5 text-charcoal"
                  >
                    +1
                  </span>
                )}

                {lastKept === kind ? (
                  <motion.span
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

                <ConfettiBurst fire={reachedNewStage ? 1 : 0} count={14} colors={BURST_COLORS} />
              </button>
            </motion.li>
          );
        })}
      </motion.ul>

      {/* The same reward, said once for anyone who cannot see it float. */}
      <p aria-live="polite" className="sr-only">
        {lastKept ? `${t.village.tiles[lastKept]} ×${countOf(lastKept)}. ${t.village.rewards[lastKept]}` : ''}
      </p>
    </MotionConfig>
  );
}
