'use client';

import { MotionConfig, motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { villageColors as c } from './villageColors';

/**
 * A complete small island shaped by one habit: the farm, the gym, the running
 * track, the library, the water. Ported from the Doubly app
 * (story/VillageHabitIsland*.tsx), drawing for drawing, so the islands on this
 * page are the ones the app grows.
 *
 * These are small places, not symbols. Each has its own shore, a path, a
 * building, trees and an activity area, and each GROWS with its count by the
 * app's own rule (`habitIslandGrowth`): open water at 0, a small sandbar with
 * one piece at the first completion, wider with every tick, a second stage at
 * 5 and the full island at 25. Counts only ever go up, so an island never
 * shrinks.
 *
 * Motion: the island rises out of the water when it mounts, its width eases
 * whenever the count changes, and a piece earned by a new stage pops up out of
 * the ground. The rise is the island's OWN animation, not a variant inherited
 * from a parent: an island that first appears at its first completion mounts
 * long after its parent was revealed, and an inherited variant would leave it
 * hidden for good. `reducedMotion="user"` drops all three transforms for
 * anyone who asked the system for less motion.
 */

export const HABIT_ISLAND_KINDS = ['veggies', 'strength', 'running', 'reading', 'water'] as const;
export type HabitIslandKind = (typeof HABIT_ISLAND_KINDS)[number];

type Stage = 0 | 1 | 2 | 3;

/** The count at which an island reaches stage 2, and stage 3. */
const STAGE_AT = { 2: 5, 3: 25 } as const;
/** Width at the first completion, as a share of the full island. */
const FIRST_SCALE = 0.55;

/** How an island grows with its count. Pure, and the same rule the app uses. */
export function habitIslandGrowth(count: number): { stage: Stage; scale: number } {
  const n = Math.max(Math.floor(count), 0);
  if (n === 0) return { stage: 0, scale: 0 };
  if (n >= STAGE_AT[3]) return { stage: 3, scale: 1 };
  const t = (n - 1) / (STAGE_AT[3] - 1);
  return { stage: n >= STAGE_AT[2] ? 2 : 1, scale: FIRST_SCALE + (1 - FIRST_SCALE) * t };
}

/**
 * The drawing's own space. The island is centred on the origin and W wide at
 * full growth; the view box leaves room for the tallest roof above it and the
 * shallows below it.
 */
const W = 200;
const VIEW = { x: -120, y: -84, w: 240, h: 142 };

interface SceneProps {
  cx: number;
  cy: number;
  width: number;
  stage: 1 | 2 | 3;
}

/** A piece a new stage pays: it grows up out of the ground where it stands. */
function Piece({ children }: { children: ReactNode }) {
  return (
    <motion.g
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 380, damping: 16 }}
      style={{ transformBox: 'fill-box', originX: 0.5, originY: 1 }}
    >
      {children}
    </motion.g>
  );
}

function Tree({ x, y, size }: { x: number; y: number; size: number }) {
  return (
    <g>
      <rect x={x - size * 0.08} y={y - size * 0.52} width={size * 0.16} height={size * 0.52} fill={c.woodShade} />
      <circle cx={x} cy={y - size * 0.65} r={size * 0.32} fill={c.leaf} />
      <circle cx={x - size * 0.12} cy={y - size * 0.76} r={size * 0.2} fill={c.leafLit} />
    </g>
  );
}

const ORCHARD_FRUIT = [
  [-0.15, -0.72],
  [0.12, -0.78],
  [-0.02, -0.58],
  [0.22, -0.62],
] as const;

function OrchardTree({ x, y, size }: { x: number; y: number; size: number }) {
  return (
    <g>
      <Tree x={x} y={y} size={size} />
      {ORCHARD_FRUIT.map(([dx, dy]) => (
        <circle key={`${dx}-${dy}`} cx={x + size * dx} cy={y + size * dy} r={size * 0.07} fill={c.crop} />
      ))}
    </g>
  );
}

function Cottage({ x, y, width, height }: { x: number; y: number; width: number; height: number }) {
  return (
    <g>
      <rect x={x} y={y - height} width={width} height={height} fill={c.wall} />
      <rect x={x + width * 0.72} y={y - height} width={width * 0.28} height={height} fill={c.wallShade} />
      <path
        d={`M ${x - width * 0.08} ${y - height} L ${x + width * 0.5} ${y - height * 1.48} L ${x + width * 1.08} ${y - height} Z`}
        fill={c.roof}
      />
      <path
        d={`M ${x - width * 0.08} ${y - height} L ${x + width * 0.5} ${y - height * 1.48} L ${x + width * 0.5} ${y - height} Z`}
        fill={c.roofShade}
      />
      <rect x={x + width * 0.16} y={y - height * 0.68} width={width * 0.13} height={height * 0.28} fill={c.glassLit} />
      <rect x={x + width * 0.6} y={y - height * 0.48} width={width * 0.17} height={height * 0.48} fill={c.wood} />
    </g>
  );
}

/** Healthy eating: a cottage and a dug bed; a greenhouse at stage 2; a silo, an orchard and a crate at 3. */
function FarmIsland({ cx, cy, width: w, stage }: SceneProps) {
  // One row at the first vegetable: the island's one piece. Four at stage 2, six at 3.
  const rowCount = stage === 1 ? 1 : stage === 2 ? 4 : 6;
  return (
    <g>
      <path
        d={`M ${cx - w * 0.42} ${cy - w * 0.01} Q ${cx - w * 0.08} ${cy - w * 0.23} ${cx + w * 0.4} ${cy - w * 0.08}`}
        stroke={c.dirt}
        strokeWidth={w * 0.05}
        strokeLinecap="round"
        fill="none"
      />
      {stage === 3 ? (
        <Piece>
          <rect x={cx - w * 0.43} y={cy - w * 0.35} width={w * 0.09} height={w * 0.23} fill={c.wallShade} />
          <ellipse cx={cx - w * 0.385} cy={cy - w * 0.35} rx={w * 0.045} ry={w * 0.025} fill={c.roofShade} />
        </Piece>
      ) : null}
      <Cottage x={cx - w * 0.37} y={cy - w * 0.02} width={w * 0.28} height={w * 0.2} />
      <ellipse cx={cx + w * 0.17} cy={cy - w * 0.06} rx={w * 0.24} ry={w * 0.11} fill={c.soil} />
      {Array.from({ length: rowCount }, (_, index) => {
        const row = index % 3;
        const col = Math.floor(index / 3);
        const rowY = cy - w * 0.115 + row * w * 0.055;
        const shift = col * w * 0.18;
        return (
          <g key={index}>
            <path
              d={`M ${cx + w * 0.01 + shift} ${rowY} Q ${cx + w * 0.13 + shift} ${rowY - w * 0.025} ${cx + w * 0.24 + shift} ${rowY}`}
              stroke={c.soilRidge}
              strokeWidth={w * 0.026}
              strokeLinecap="round"
              fill="none"
            />
            <circle cx={cx + w * 0.12 + shift} cy={rowY - w * 0.018} r={w * 0.021} fill={index % 2 ? c.crop : c.sprout} />
          </g>
        );
      })}
      {stage >= 2 ? (
        <Piece>
          <path
            d={`M ${cx - w * 0.04} ${cy - w * 0.2} Q ${cx + w * 0.06} ${cy - w * 0.34} ${cx + w * 0.16} ${cy - w * 0.2}`}
            fill={c.seaShimmer}
            stroke={c.wall}
            strokeWidth={w * 0.018}
          />
          <rect x={cx - w * 0.04} y={cy - w * 0.2} width={w * 0.2} height={w * 0.12} fill={c.seaShimmer} opacity={0.75} />
        </Piece>
      ) : null}
      {stage === 3 ? (
        <Piece>
          <OrchardTree x={cx - w * 0.02} y={cy - w * 0.14} size={w * 0.15} />
          <OrchardTree x={cx + w * 0.28} y={cy - w * 0.16} size={w * 0.16} />
          <OrchardTree x={cx + w * 0.41} y={cy - w * 0.02} size={w * 0.17} />
          <rect x={cx - w * 0.02} y={cy + w * 0.035} width={w * 0.1} height={w * 0.05} rx={w * 0.01} fill={c.wood} />
          <circle cx={cx + w * 0.005} cy={cy + w * 0.03} r={w * 0.014} fill={c.crop} />
          <circle cx={cx + w * 0.04} cy={cy + w * 0.025} r={w * 0.014} fill={c.roofRidge} />
        </Piece>
      ) : (
        <Tree x={cx + w * 0.38} y={cy - w * 0.04} size={w * 0.18} />
      )}
    </g>
  );
}

/** Strength: two pull-up frames and a bench on a dirt pad; rings at stage 2; a barbell, a bag and a box at 3. */
function GymIsland({ cx, cy, width: w, stage }: SceneProps) {
  return (
    <g>
      <path
        d={`M ${cx - w * 0.4} ${cy + w * 0.01} Q ${cx - w * 0.08} ${cy - w * 0.18} ${cx + w * 0.38} ${cy - w * 0.03}`}
        stroke={c.dirt}
        strokeWidth={w * 0.055}
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx={cx + w * 0.05} cy={cy - w * 0.08} rx={w * 0.34} ry={w * 0.12} fill={c.dirt} />
      {[-0.18, 0.02].map((offset, index) => (
        <g key={offset}>
          <rect x={cx + w * offset} y={cy - w * 0.33} width={w * 0.025} height={w * 0.24} fill={c.stoneShade} />
          <rect x={cx + w * (offset + 0.15)} y={cy - w * 0.33} width={w * 0.025} height={w * 0.24} fill={c.stoneShade} />
          <rect x={cx + w * offset} y={cy - w * 0.33} width={w * 0.175} height={w * 0.022} rx={w * 0.01} fill={c.stone} />
          {stage >= 2 && index === 1 ? (
            <Piece>
              <line
                x1={cx + w * (offset + 0.055)}
                y1={cy - w * 0.31}
                x2={cx + w * (offset + 0.055)}
                y2={cy - w * 0.22}
                stroke={c.woodShade}
                strokeWidth={w * 0.012}
              />
              <circle
                cx={cx + w * (offset + 0.055)}
                cy={cy - w * 0.19}
                r={w * 0.03}
                fill="none"
                stroke={c.woodShade}
                strokeWidth={w * 0.015}
              />
            </Piece>
          ) : null}
        </g>
      ))}
      <rect x={cx - w * 0.22} y={cy - w * 0.09} width={w * 0.25} height={w * 0.035} rx={w * 0.014} fill={c.wood} />
      <rect x={cx - w * 0.18} y={cy - w * 0.055} width={w * 0.025} height={w * 0.05} fill={c.woodShade} />
      <rect x={cx - w * 0.01} y={cy - w * 0.055} width={w * 0.025} height={w * 0.05} fill={c.woodShade} />
      {stage === 3 ? (
        <Piece>
          <rect x={cx + w * 0.1} y={cy - w * 0.09} width={w * 0.26} height={w * 0.018} fill={c.woodDeep} />
          <circle cx={cx + w * 0.1} cy={cy - w * 0.08} r={w * 0.038} fill={c.ink} />
          <circle cx={cx + w * 0.36} cy={cy - w * 0.08} r={w * 0.038} fill={c.ink} />
          <rect x={cx - w * 0.37} y={cy - w * 0.34} width={w * 0.02} height={w * 0.27} fill={c.stoneShade} />
          <rect x={cx - w * 0.42} y={cy - w * 0.3} width={w * 0.12} height={w * 0.15} rx={w * 0.035} fill={c.roofShade} />
          <rect x={cx - w * 0.03} y={cy - w * 0.075} width={w * 0.1} height={w * 0.07} fill={c.wood} />
          <rect x={cx - w * 0.015} y={cy - w * 0.115} width={w * 0.08} height={w * 0.04} fill={c.woodShade} />
        </Piece>
      ) : null}
      {stage < 3 ? <Tree x={cx - w * 0.38} y={cy} size={w * 0.17} /> : null}
      <Tree x={cx + w * 0.42} y={cy - w * 0.01} size={w * 0.14} />
    </g>
  );
}

/** Running: the oval, burgundy with white lane lines; a lane more per stage, then the stand and the finish gate. */
function RunningIsland({ cx, cy, width: w, stage }: SceneProps) {
  const dash = `${w * 0.035} ${w * 0.028}`;
  return (
    <g>
      <ellipse cx={cx} cy={cy - w * 0.025} rx={w * 0.43} ry={w * 0.145} fill="none" stroke={c.roofShade} strokeWidth={w * 0.095} />
      <ellipse cx={cx} cy={cy - w * 0.035} rx={w * 0.4} ry={w * 0.125} fill="none" stroke={c.roof} strokeWidth={w * 0.075} />
      <ellipse cx={cx} cy={cy - w * 0.035} rx={w * 0.43} ry={w * 0.148} fill="none" stroke={c.wall} strokeWidth={w * 0.008} />
      <ellipse
        cx={cx}
        cy={cy - w * 0.035}
        rx={w * 0.4}
        ry={w * 0.125}
        fill="none"
        stroke={c.wall}
        strokeWidth={w * 0.008}
        strokeDasharray={dash}
      />
      {stage >= 2 ? (
        <ellipse
          cx={cx}
          cy={cy - w * 0.035}
          rx={w * 0.355}
          ry={w * 0.098}
          fill="none"
          stroke={c.wall}
          strokeWidth={w * 0.008}
          strokeDasharray={dash}
        />
      ) : null}
      {stage === 3 ? (
        <g>
          <ellipse
            cx={cx}
            cy={cy - w * 0.035}
            rx={w * 0.31}
            ry={w * 0.072}
            fill="none"
            stroke={c.wall}
            strokeWidth={w * 0.008}
            strokeDasharray={dash}
          />
          <ellipse cx={cx} cy={cy - w * 0.035} rx={w * 0.265} ry={w * 0.048} fill="none" stroke={c.wall} strokeWidth={w * 0.008} />
        </g>
      ) : null}
      <path d={`M ${cx + w * 0.28} ${cy - w * 0.14} L ${cx + w * 0.31} ${cy + w * 0.065}`} stroke={c.wall} strokeWidth={w * 0.014} />
      <rect x={cx - w * 0.09} y={cy - w * 0.11} width={w * 0.18} height={w * 0.06} rx={w * 0.015} fill={c.dirt} />
      {stage === 3 ? (
        <Piece>
          {[0, 1, 2].map((row) => (
            <rect
              key={row}
              x={cx - w * (0.11 - row * 0.018)}
              y={cy - w * (0.12 - row * 0.032)}
              width={w * (0.22 - row * 0.036)}
              height={w * 0.018}
              rx={w * 0.006}
              fill={row === 0 ? c.woodShade : c.wood}
            />
          ))}
          <rect x={cx - w * 0.05} y={cy - w * 0.23} width={w * 0.012} height={w * 0.12} fill={c.woodDeep} />
          <rect x={cx + w * 0.055} y={cy - w * 0.23} width={w * 0.012} height={w * 0.12} fill={c.woodDeep} />
          <rect x={cx - w * 0.05} y={cy - w * 0.23} width={w * 0.117} height={w * 0.014} fill={c.wall} />
          <path
            d={`M ${cx - w * 0.038} ${cy - w * 0.23} L ${cx + w * 0.055} ${cy - w * 0.2} L ${cx - w * 0.038} ${cy - w * 0.17} Z`}
            fill={c.roofRidge}
          />
        </Piece>
      ) : null}
      <Tree x={cx - w * 0.2} y={cy - w * 0.02} size={w * 0.1} />
      <Tree x={cx + w * 0.18} y={cy - w * 0.015} size={w * 0.09} />
    </g>
  );
}

const BOOK_SPINES = [c.roofRidge, c.crop, c.leaf, c.sea, c.glassLit, c.roof] as const;

/**
 * The library front: stone facade, pediment with an open-book emblem, four
 * columns, steps, a tall doorway and lit reading-room windows. `unit` is the
 * island width, so details keep the island's own scale.
 */
function LibraryFront({ x: bx, y: by, width: bw, unit: w }: { x: number; y: number; width: number; unit: number }) {
  const bh = w * 0.24;
  return (
    <g>
      <rect x={bx} y={by - bh} width={bw} height={bh} fill={c.wall} />
      <rect x={bx + bw * 0.8} y={by - bh} width={bw * 0.2} height={bh} fill={c.wallShade} />
      <rect x={bx - bw * 0.06} y={by - w * 0.014} width={bw * 1.12} height={w * 0.016} fill={c.stone} />
      <rect x={bx - bw * 0.03} y={by - w * 0.028} width={bw * 1.06} height={w * 0.016} fill={c.stoneSpeck} />
      <path d={`M ${bx - bw * 0.08} ${by - bh} L ${bx + bw * 0.5} ${by - bh - w * 0.11} L ${bx + bw * 1.08} ${by - bh} Z`} fill={c.roof} />
      <path d={`M ${bx - bw * 0.08} ${by - bh} L ${bx + bw * 0.5} ${by - bh - w * 0.11} L ${bx + bw * 0.5} ${by - bh} Z`} fill={c.roofShade} />
      {/* An open book on the pediment, so the front names itself. */}
      <path
        d={`M ${bx + bw * 0.5} ${by - bh - w * 0.045} q -${w * 0.03} -${w * 0.014} -${w * 0.05} 0 l 0 ${w * 0.026} q ${w * 0.02} -${w * 0.012} ${w * 0.05} 0 Z`}
        fill={c.stoneSpeck}
      />
      <path
        d={`M ${bx + bw * 0.5} ${by - bh - w * 0.045} q ${w * 0.03} -${w * 0.014} ${w * 0.05} 0 l 0 ${w * 0.026} q -${w * 0.02} -${w * 0.012} -${w * 0.05} 0 Z`}
        fill={c.sun}
      />
      {[0.1, 0.32, 0.68, 0.9].map((t) => (
        <g key={t}>
          <rect x={bx + bw * t - w * 0.014} y={by - bh + w * 0.01} width={w * 0.028} height={bh - w * 0.024} fill={c.stoneSpeck} />
          <rect x={bx + bw * t + w * 0.004} y={by - bh + w * 0.01} width={w * 0.01} height={bh - w * 0.024} fill={c.stoneShade} />
        </g>
      ))}
      <path
        d={`M ${bx + bw * 0.44} ${by - w * 0.028} L ${bx + bw * 0.44} ${by - bh * 0.62} Q ${bx + bw * 0.5} ${by - bh * 0.82} ${bx + bw * 0.56} ${by - bh * 0.62} L ${bx + bw * 0.56} ${by - w * 0.028} Z`}
        fill={c.woodDeep}
      />
      <rect x={bx + bw * 0.16} y={by - bh * 0.7} width={bw * 0.1} height={bh * 0.42} fill={c.glassLit} />
      <rect x={bx + bw * 0.74} y={by - bh * 0.7} width={bw * 0.1} height={bh * 0.42} fill={c.glassLit} />
    </g>
  );
}

/** Reading: the library; a second tree at stage 2; a wider front, the outdoor shelf wall, a lamp and a stack of books at 3. */
function ReadingIsland({ cx, cy, width: w, stage }: SceneProps) {
  return (
    <g>
      <path
        d={`M ${cx - w * 0.4} ${cy + w * 0.02} Q ${cx - w * 0.1} ${cy - w * 0.14} ${cx + w * 0.38} ${cy - w * 0.02}`}
        stroke={c.dirt}
        strokeWidth={w * 0.05}
        strokeLinecap="round"
        fill="none"
      />
      <LibraryFront x={cx - w * 0.22} y={cy - w * 0.03} width={w * (stage === 3 ? 0.5 : 0.42)} unit={w} />
      {stage >= 2 ? <Tree x={cx + w * 0.37} y={cy} size={w * 0.18} /> : null}
      <Tree x={cx - w * 0.4} y={cy - w * 0.01} size={w * 0.16} />
      {stage === 3 ? (
        <Piece>
          <rect x={cx - w * 0.42} y={cy - w * 0.16} width={w * 0.018} height={w * 0.13} fill={c.woodShade} />
          <circle cx={cx - w * 0.411} cy={cy - w * 0.18} r={w * 0.028} fill={c.glassLit} />
          {/* The outdoor shelf wall: three shelves, eight spines each. */}
          <rect x={cx + w * 0.16} y={cy - w * 0.29} width={w * 0.27} height={w * 0.29} fill={c.wood} />
          <path d={`M ${cx + w * 0.15} ${cy - w * 0.29} L ${cx + w * 0.295} ${cy - w * 0.33} L ${cx + w * 0.44} ${cy - w * 0.29} Z`} fill={c.roofShade} />
          <rect x={cx + w * 0.173} y={cy - w * 0.276} width={w * 0.244} height={w * 0.262} fill={c.woodDeep} />
          {[0.188, 0.099].map((shelfY) => (
            <rect key={shelfY} x={cx + w * 0.173} y={cy - w * shelfY} width={w * 0.244} height={w * 0.014} fill={c.wood} />
          ))}
          {Array.from({ length: 24 }, (_, index) => {
            const shelf = Math.floor(index / 8);
            const col = index % 8;
            return (
              <rect
                key={index}
                x={cx + w * (0.181 + col * 0.029)}
                y={cy - w * (0.262 - shelf * 0.089)}
                width={w * 0.024}
                height={w * 0.066}
                fill={BOOK_SPINES[(index * 5 + shelf) % BOOK_SPINES.length]}
              />
            );
          })}
          {/* A stack waiting by the door. */}
          {[0, 1, 2].map((layer) => (
            <rect
              key={layer}
              x={cx - w * (0.28 - layer * 0.006)}
              y={cy + w * (0.02 - layer * 0.022)}
              width={w * 0.07}
              height={w * 0.02}
              rx={w * 0.006}
              fill={BOOK_SPINES[(layer * 2 + 1) % BOOK_SPINES.length]}
            />
          ))}
        </Piece>
      ) : null}
    </g>
  );
}

/** Water: a spring and the stream it feeds; a footbridge and a stone cistern at stage 2; a pool, reeds and foam at 3. */
function WaterIsland({ cx, cy, width: w, stage }: SceneProps) {
  const stream = `M ${cx - w * 0.01} ${cy - w * 0.17} C ${cx + w * 0.03} ${cy - w * 0.07}, ${cx - w * 0.02} ${cy - w * 0.01}, ${cx + w * 0.12} ${cy + w * 0.09}`;
  return (
    <g>
      <ellipse cx={cx - w * 0.08} cy={cy - w * 0.17} rx={w * 0.19} ry={w * 0.075} fill={c.waterDeep} />
      <ellipse cx={cx - w * 0.1} cy={cy - w * 0.19} rx={w * 0.13} ry={w * 0.04} fill={c.waterLit} />
      <path d={stream} stroke={c.waterLit} strokeWidth={w * (stage === 3 ? 0.11 : 0.08)} strokeLinecap="round" fill="none" />
      <path d={stream} stroke={c.foam} strokeWidth={w * 0.018} strokeLinecap="round" fill="none" opacity={0.8} />
      {stage === 3 ? (
        <Piece>
          <ellipse cx={cx + w * 0.13} cy={cy + w * 0.1} rx={w * 0.17} ry={w * 0.065} fill={c.waterDeep} />
          <ellipse cx={cx + w * 0.1} cy={cy + w * 0.085} rx={w * 0.1} ry={w * 0.027} fill={c.waterLit} opacity={0.85} />
          {[-0.26, -0.2, -0.14].map((offset) => (
            <path
              key={offset}
              d={`M ${cx + w * offset} ${cy - w * 0.15} Q ${cx + w * (offset - 0.01)} ${cy - w * 0.23} ${cx + w * (offset + 0.01)} ${cy - w * 0.28}`}
              stroke={c.leafDeep}
              strokeWidth={w * 0.012}
              strokeLinecap="round"
              fill="none"
            />
          ))}
        </Piece>
      ) : null}
      {stage >= 2 ? (
        <Piece>
          <path
            d={`M ${cx - w * 0.04} ${cy - w * 0.035} L ${cx + w * 0.1} ${cy + w * 0.015}`}
            stroke={c.woodShade}
            strokeWidth={w * 0.065}
            strokeLinecap="round"
          />
          {[-0.02, 0.02, 0.06].map((offset) => (
            <path
              key={offset}
              d={`M ${cx + w * offset} ${cy - w * 0.065 + offset * w * 0.35} L ${cx + w * (offset + 0.025)} ${cy - w * 0.005 + offset * w * 0.35}`}
              stroke={c.wood}
              strokeWidth={w * 0.016}
              strokeLinecap="round"
            />
          ))}
          <rect x={cx + w * 0.17} y={cy - w * 0.22} width={w * 0.18} height={w * 0.16} fill={c.stone} />
          <rect x={cx + w * 0.28} y={cy - w * 0.22} width={w * 0.07} height={w * 0.16} fill={c.stoneShade} />
          <ellipse cx={cx + w * 0.26} cy={cy - w * 0.22} rx={w * 0.09} ry={w * 0.035} fill={c.waterDeep} />
        </Piece>
      ) : null}
      <ellipse cx={cx + w * 0.02} cy={cy + w * 0.1} rx={w * 0.05} ry={w * 0.025} fill={c.stone} />
      <ellipse cx={cx + w * 0.32} cy={cy + w * 0.07} rx={w * 0.035} ry={w * 0.02} fill={c.stoneShade} />
      <Tree x={cx - w * 0.36} y={cy - w * 0.02} size={w * 0.17} />
      <Tree x={cx + w * 0.38} y={cy} size={w * 0.14} />
      {stage === 3 ? (
        <path
          d={`M ${cx + w * 0.08} ${cy + w * 0.07} Q ${cx + w * 0.16} ${cy + w * 0.14} ${cx + w * 0.25} ${cy + w * 0.08}`}
          stroke={c.foam}
          strokeWidth={w * 0.025}
          fill="none"
          opacity={0.85}
        />
      ) : null}
    </g>
  );
}

const SCENES: Record<HabitIslandKind, (props: SceneProps) => ReactNode> = {
  veggies: FarmIsland,
  strength: GymIsland,
  running: RunningIsland,
  reading: ReadingIsland,
  water: WaterIsland,
};

/** The ground every island shares: shallows, a sand shore, grass with the light on it, broken foam. */
function Shore({ kind }: { kind: HabitIslandKind }) {
  const w = W;
  const lean = kind === 'water' ? w * 0.035 : kind === 'reading' ? -w * 0.025 : 0;
  return (
    <g>
      <ellipse cx={0} cy={w * 0.035} rx={w * 0.58} ry={w * 0.23} fill={c.seaShimmer} opacity={0.42} />
      <path
        d={`M ${-w * 0.51 + lean} ${-w * 0.025}
            C ${-w * 0.46} ${-w * 0.17}, ${-w * 0.2} ${-w * 0.23}, ${w * 0.03} ${-w * 0.2}
            C ${w * 0.3} ${-w * 0.24}, ${w * 0.53 + lean} ${-w * 0.13}, ${w * 0.51} ${w * 0.025}
            C ${w * 0.48} ${w * 0.18}, ${w * 0.13} ${w * 0.21}, ${-w * 0.08} ${w * 0.19}
            C ${-w * 0.35} ${w * 0.22}, ${-w * 0.55 + lean} ${w * 0.12}, ${-w * 0.51 + lean} ${-w * 0.025} Z`}
        fill={c.sand}
      />
      <path
        d={`M ${-w * 0.43 + lean} ${-w * 0.04}
            C ${-w * 0.37} ${-w * 0.15}, ${-w * 0.15} ${-w * 0.19}, ${w * 0.05} ${-w * 0.17}
            C ${w * 0.27} ${-w * 0.2}, ${w * 0.44 + lean} ${-w * 0.11}, ${w * 0.43} ${w * 0.01}
            C ${w * 0.4} ${w * 0.12}, ${w * 0.12} ${w * 0.16}, ${-w * 0.06} ${w * 0.14}
            C ${-w * 0.28} ${w * 0.16}, ${-w * 0.47 + lean} ${w * 0.08}, ${-w * 0.43 + lean} ${-w * 0.04} Z`}
        fill={c.grass}
      />
      <path
        d={`M ${-w * 0.32 + lean} ${-w * 0.075} Q ${-w * 0.12} ${-w * 0.18} ${w * 0.12} ${-w * 0.13} Q ${-w * 0.05} ${-w * 0.02} ${-w * 0.32 + lean} ${-w * 0.075} Z`}
        fill={c.grassLit}
        opacity={0.48}
      />
      <path
        d={`M ${-w * 0.49 + lean} ${w * 0.055} Q ${-w * 0.35} ${w * 0.16} ${-w * 0.16} ${w * 0.17}`}
        stroke={c.foam}
        strokeWidth={w * 0.018}
        strokeLinecap="round"
        fill="none"
        opacity={0.78}
      />
      <path
        d={`M ${w * 0.18} ${-w * 0.18} Q ${w * 0.4} ${-w * 0.17} ${w * 0.49 + lean} ${-w * 0.065}`}
        stroke={c.foam}
        strokeWidth={w * 0.014}
        strokeLinecap="round"
        fill="none"
        opacity={0.62}
      />
    </g>
  );
}

/**
 * Every scale pivots on the island's centre, which is the origin of the
 * drawing. Two traps, both hit on the way here:
 *
 * - framer-motion writes `transform-origin` on SVG elements itself, from
 *   `originX` / `originY`, and drops a raw `transformOrigin` style without a
 *   word. The pivot has to be given as those two values or it stays 50% 50%.
 * - with `transform-box: view-box` the reference box starts at the user-space
 *   origin (0, 0), NOT at the view box's min corner, so the drawing's centre
 *   is 0 / 0 of that box, not the middle of it.
 *
 * With either one wrong, every young island drifts to the bottom right of its
 * tile as it shrinks.
 */
const pivotOnCenter = { transformBox: 'view-box', originX: 0, originY: 0 } as const;

export default function HabitIsland({
  kind,
  count,
  riseDelay = 0,
  className,
}: {
  kind: HabitIslandKind;
  count: number;
  /** Seconds to wait before rising, so a group of islands can surface one after another. */
  riseDelay?: number;
  className?: string;
}) {
  const { stage, scale } = habitIslandGrowth(count);
  const Scene = SCENES[kind];

  return (
    <MotionConfig reducedMotion="user">
      <svg viewBox={`${VIEW.x} ${VIEW.y} ${VIEW.w} ${VIEW.h}`} className={className} aria-hidden="true">
        {stage === 0 ? (
          // Open water: nothing has been built here yet. Two ripples, so the spot reads as sea and not as a gap.
          <g fill="none" stroke={c.foam} strokeLinecap="round" opacity={0.7}>
            <path d="M -46 2 Q -20 -10 8 0" strokeWidth={3} />
            <path d="M 6 20 Q 30 10 52 18" strokeWidth={2.4} />
          </g>
        ) : (
          <motion.g
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18, delay: riseDelay }}
            style={pivotOnCenter}
          >
            <motion.g
              initial={false}
              animate={{ scale }}
              transition={{ type: 'spring', stiffness: 220, damping: 15 }}
              style={pivotOnCenter}
            >
              <Shore kind={kind} />
              <Scene cx={0} cy={0} width={W} stage={stage} />
            </motion.g>
          </motion.g>
        )}
      </svg>
    </MotionConfig>
  );
}
