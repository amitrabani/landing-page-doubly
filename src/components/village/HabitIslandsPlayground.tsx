'use client';

import { MotionConfig, animate, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import ConfettiBurst from '@/components/motion/ConfettiBurst';
import { useHydratedReducedMotion } from '@/components/motion/useHydratedReducedMotion';
import { staggerChild, staggerContainer, VIEWPORT_ONCE } from '@/lib/motion';
import { useT } from '@/i18n/TranslationProvider';
import HabitIsland, { HABIT_ISLAND_KINDS, habitIslandGrowth, type HabitIslandKind } from './HabitIsland';
import IslandLabel from './IslandLabel';
import { villageColors as c } from './villageColors';

/**
 * The five habit islands, playable. Each island takes ONE tap, and that tap
 * grows it all the way: the count runs up from its small start to a full-grown
 * number, as if the habit had been kept dozens of times, and the island passes
 * through every stage of the app's own growth rule on the way. The line the
 * app shows for that reward floats up off it. Showing beats telling: nobody
 * reads "a kept habit grows its own place", everybody taps an island.
 *
 * The count runs up over about a second and a half, not in one jump, so the
 * visitor sees the buildings arrive one stage after another. With reduced
 * motion on, it jumps straight to the end.
 *
 * After its tap an island is used up. Its button stays pressed down and
 * ignores every further tap, and its play badge becomes a check mark. The
 * button is marked aria-disabled, not disabled: a disabled button drops the
 * keyboard focus, and a screen reader could no longer find the new count.
 *
 * Every island starts young (open water, or stage 1 or 2), so the tap always
 * has somewhere to go. Every grown count is past 25, the app's line for a
 * full-grown island.
 *
 * Counts only go up. Nothing here reads the clock and nothing is taken back,
 * the same promise the village makes in the app.
 */
const START_COUNTS: Record<HabitIslandKind, number> = {
  veggies: 4,
  strength: 0,
  running: 6,
  reading: 2,
  water: 1,
};

const GROWN_COUNTS: Record<HabitIslandKind, number> = {
  veggies: 48,
  strength: 36,
  running: 60,
  reading: 30,
  water: 72,
};

const GROW_SECONDS = 1.6;

const BURST_COLORS = [c.crop, c.roofRidge, c.glassLit, c.sprout, c.foam];

export default function HabitIslandsPlayground() {
  const t = useT();
  // The islands tapped so far, in tap order. An island is in here at most once.
  const [keptKinds, setKeptKinds] = useState<readonly HabitIslandKind[]>([]);
  // The floating reward line and the screen-reader announcement follow the last tap.
  const lastKept = keptKinds.length > 0 ? keptKinds[keptKinds.length - 1] : null;

  // The count each tapped island shows right now, while it runs up to its grown count.
  const [shownCounts, setShownCounts] = useState<Partial<Record<HabitIslandKind, number>>>({});
  const reduced = useHydratedReducedMotion();
  const runs = useRef<{ stop: () => void }[]>([]);

  useEffect(() => {
    const started = runs.current;
    return () => started.forEach((run) => run.stop());
  }, []);

  const keep = (kind: HabitIslandKind) => {
    if (keptKinds.includes(kind)) return;
    setKeptKinds((kept) => (kept.includes(kind) ? kept : [...kept, kind]));
    if (reduced) {
      setShownCounts((shown) => ({ ...shown, [kind]: GROWN_COUNTS[kind] }));
      return;
    }
    runs.current.push(
      animate(START_COUNTS[kind], GROWN_COUNTS[kind], {
        duration: GROW_SECONDS,
        ease: 'easeOut',
        onUpdate: (value) => setShownCounts((shown) => ({ ...shown, [kind]: Math.round(value) })),
      }),
    );
  };

  const countOf = (kind: HabitIslandKind) => shownCounts[kind] ?? START_COUNTS[kind];

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
          // One burst, at the moment the running count makes the island full-grown.
          const isFullGrown = habitIslandGrowth(count).stage === 3;

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
                    className="game-pill absolute end-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white text-charcoal"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                      <path d="M2 0.8 9 5 2 9.2Z" />
                    </svg>
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

                <ConfettiBurst fire={isFullGrown ? 1 : 0} count={14} colors={BURST_COLORS} />
              </button>
            </motion.li>
          );
        })}
      </motion.ul>

      {/* The same reward, said once for anyone who cannot see it float. It names the grown count, so
          a screen reader is not sent every step of the run. */}
      <p aria-live="polite" className="sr-only">
        {lastKept ? `${t.village.tiles[lastKept]} ×${GROWN_COUNTS[lastKept]}. ${t.village.rewards[lastKept]}` : ''}
      </p>
    </MotionConfig>
  );
}
