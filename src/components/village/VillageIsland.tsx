'use client';

import { motion, type Variants } from 'framer-motion';
import { useId, type ReactNode } from 'react';
import { useHydratedReducedMotion } from '@/components/motion/useHydratedReducedMotion';
import { villageColors as c } from './villageColors';
import { Birds, Butterfly, Cloud } from './VillageSprites';

/**
 * Doubly's village as the camera sees it from the sky: two islands in the
 * water, drawn for this distance, with everything a settled player has
 * built. Ported from the app's far view (story/FarIsland.tsx) in its grown
 * state: Doubly's house roofed and lit, a home and a tree per finished task,
 * the bridge to the second island, and the places habits build - the veggie
 * patch, the well, the library, the gym, the track, the cairn, lamps, flowers.
 *
 * It is its own drawing, not the side-view sprites dressed up: a side view
 * can never be clipped or veiled into ground seen from above.
 *
 * The drawing frames itself with its own sky and sea. When it scrolls into
 * view every reward pops in one after another, in the order it would be
 * earned: trees and homes first (a finished task), then the places habits
 * build. With Reduce Motion on, the grown village is simply there.
 */

/** The framed view is a touch wider than the app's drawing, so the far islet clears the frame. */
const W = 500;
const H = 300;

const HOME = { cx: 226, cy: 176, rx: 150, ry: 46 };
const FAR = { cx: 436, cy: 228, rx: 40, ry: 27 };

/** The first two are fruit trees: five apples between them, the inventory's count. */
const TREE_SPOTS = [
  { x: 122, y: 168, s: 1, apples: 3 },
  { x: 296, y: 160, s: 0.9, apples: 2 },
  { x: 262, y: 186, s: 1.1 },
  { x: 104, y: 186, s: 0.85 },
  { x: 432, y: 214, s: 0.6 },
  { x: 404, y: 240, s: 0.7 },
  { x: 416, y: 248, s: 0.55 },
  { x: 456, y: 242, s: 0.7 },
  { x: 471, y: 232, s: 0.6 },
  { x: 152, y: 156, s: 0.7 },
  { x: 330, y: 176, s: 0.8 },
  { x: 86, y: 170, s: 0.7 },
] as const;

const HOME_SPOTS = [
  { x: 300, y: 172, s: 1 },
  { x: 138, y: 180, s: 1 },
  { x: 330, y: 156, s: 1 },
  { x: 414, y: 218, s: 0.85 },
  { x: 454, y: 216, s: 0.85 },
  { x: 434, y: 246, s: 0.85 },
] as const;

const LAMP_DOTS = [
  { x: 176, y: 198 },
  { x: 190, y: 208 },
  { x: 252, y: 214 },
  { x: 282, y: 192 },
  { x: 150, y: 190 },
  { x: 304, y: 184 },
] as const;

const FLOWER_DOTS = [
  { x: 200, y: 188, fill: c.roofRidge },
  { x: 208, y: 184, fill: c.crop },
  { x: 196, y: 194, fill: c.crop },
  { x: 214, y: 190, fill: c.roofRidge },
  { x: 168, y: 176, fill: c.roofRidge },
  { x: 176, y: 172, fill: c.crop },
  { x: 318, y: 200, fill: c.crop },
  { x: 326, y: 196, fill: c.roofRidge },
] as const;

const BUTTERFLY_SPOTS = [
  { x: 206, y: 176, fill: c.roofRidge },
  { x: 236, y: 196, fill: c.crop },
  { x: 322, y: 188, fill: c.sea },
  { x: 160, y: 168, fill: c.glassLit },
] as const;

/** One island: deeper water in its lee, shallows, foam, sand, grass. */
function Island({ cx, cy, rx, ry }: { cx: number; cy: number; rx: number; ry: number }) {
  return (
    <g>
      <ellipse cx={cx + 8} cy={cy + 32} rx={rx * 1.24} ry={ry * 1.14} fill="#417ea1" opacity={0.32} />
      <ellipse cx={cx} cy={cy + 18} rx={rx * 1.3} ry={ry * 1.3} fill={c.seaShimmer} opacity={0.5} />
      <ellipse
        cx={cx}
        cy={cy + 18}
        rx={rx * 1.34}
        ry={ry * 1.41}
        stroke={c.foam}
        strokeWidth={3}
        strokeDasharray="36 24"
        fill="none"
        opacity={0.55}
      />
      <ellipse cx={cx} cy={cy + 15} rx={rx * 1.15} ry={ry * 1.13} fill={c.sandShade} />
      <ellipse cx={cx} cy={cy + 10} rx={rx * 1.14} ry={ry * 1.09} fill={c.sand} />
      <ellipse cx={cx} cy={cy + 4} rx={rx * 1.02} ry={ry} fill={c.grassShade} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry * 0.96} fill={c.grass} />
      <ellipse
        cx={cx - rx * 0.22}
        cy={cy - ry * 0.22}
        rx={rx * 0.65}
        ry={ry * 0.57}
        fill={c.grassLit}
        opacity={0.65}
      />
    </g>
  );
}

/** Where apples hang on a crown, as offsets from its centre in crown radii. */
const APPLE_OFFSETS = [
  [-0.45, 0.35],
  [0.5, 0.1],
  [0.1, 0.6],
] as const;

/** A tree from up here: a contact shadow, a trunk, a round crown lit top-left. */
function MapTree({ x, y, s, apples = 0 }: { x: number; y: number; s: number; apples?: number }) {
  return (
    <g>
      <ellipse cx={x + 2 * s} cy={y + 1.2 * s} rx={9 * s} ry={2.6 * s} fill={c.shadow} opacity={0.16} />
      <rect x={x - 1.6 * s} y={y - 10 * s} width={3.2 * s} height={11 * s} fill={c.woodShade} />
      <circle cx={x} cy={y - 15 * s} r={11 * s} fill={c.leaf} />
      <circle cx={x - 3.5 * s} cy={y - 18 * s} r={6 * s} fill={c.leafLit} />
      {APPLE_OFFSETS.slice(0, apples).map(([dx, dy]) => (
        <circle key={`${dx}-${dy}`} cx={x + dx * 11 * s} cy={y - 15 * s + dy * 11 * s} r={2.3 * s} fill={c.roof} />
      ))}
    </g>
  );
}

/** A neighbour's house, small and front-on, lit from the upper left. */
function MapHome({ x, y, s }: { x: number; y: number; s: number }) {
  return (
    <g>
      <ellipse cx={x + 2 * s} cy={y + 0.8 * s} rx={14 * s} ry={3 * s} fill={c.shadow} opacity={0.16} />
      <rect x={x - 12 * s} y={y - 20 * s} width={24 * s} height={20 * s} fill={c.wall} />
      <rect x={x + 7 * s} y={y - 20 * s} width={5 * s} height={20 * s} fill={c.wallShade} />
      <path d={`M ${x - 15 * s} ${y - 20 * s} L ${x} ${y - 32 * s} L ${x} ${y - 20 * s} Z`} fill={c.roof} />
      <path d={`M ${x} ${y - 20 * s} L ${x} ${y - 32 * s} L ${x + 15 * s} ${y - 20 * s} Z`} fill={c.roofShade} />
      <rect x={x - 4 * s} y={y - 12 * s} width={8 * s} height={12 * s} rx={1.5} fill={c.woodShade} />
      <rect x={x + 5 * s} y={y - 16 * s} width={5 * s} height={5 * s} rx={0.8} fill={c.glassLit} />
    </g>
  );
}

/** Doubly's own house, three-quarter view, roofed and lit. */
function DoublyHouse() {
  return (
    <g>
      <ellipse cx={228} cy={172} rx={32} ry={5} fill={c.shadow} opacity={0.16} />
      <path d="M 196 140 L 216 133 L 216 170 L 196 174 Z" fill={c.wallShade} />
      <rect x={216} y={133} width={35} height={37} fill={c.wall} />
      <ellipse cx={225.5} cy={145.5} rx={9} ry={8} fill={c.glow} opacity={0.35} />
      <rect x={221} y={141} width={9} height={9} rx={1.5} fill={c.glassLit} />
      <rect x={235} y={149} width={10} height={21} rx={2} fill={c.woodShade} />
      <path d="M 212 134 L 233.5 114 L 255 134 Z" fill={c.roof} />
      <path d="M 196 141 L 212 134 L 233.5 114 L 216 120 Z" fill={c.roofShade} />
    </g>
  );
}

interface PopCue {
  order: number;
  reduced: boolean;
}

const pop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  grown: ({ order, reduced }: PopCue) => ({
    scale: 1,
    opacity: 1,
    transition: reduced
      ? { duration: 0 }
      : { type: 'spring', stiffness: 360, damping: 17, delay: 0.2 + order * 0.055 },
  }),
};

/** A reward that grows up out of the ground when the village is revealed. */
function Pop({ order, reduced, children }: PopCue & { children: ReactNode }) {
  return (
    <motion.g
      variants={pop}
      custom={{ order, reduced }}
      // framer-motion writes SVG transform-origin from originX / originY and ignores a raw transformOrigin.
      style={{ transformBox: 'fill-box', originX: 0.5, originY: 1 }}
    >
      {children}
    </motion.g>
  );
}

export interface VillageIslandProps {
  className?: string;
  /** A description for screen readers. Left out, the drawing is decoration. */
  label?: string;
}

export default function VillageIsland({ className, label }: VillageIslandProps) {
  const reduced = useHydratedReducedMotion();
  const id = useId();
  const skyId = `${id}-sky`;
  const sunId = `${id}-sun`;

  // Homes and trees interleave, because a finished task pays both: the tree
  // pops first, the home lands a beat after it.
  let order = 0;
  const next = () => order++;

  return (
    <motion.svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      initial={reduced ? 'grown' : 'hidden'}
      whileInView="grown"
      viewport={{ once: true, amount: 0.35 }}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      <defs>
        <radialGradient id={sunId} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={c.sun} stopOpacity={0.95} />
          <stop offset="45%" stopColor={c.sun} stopOpacity={0.45} />
          <stop offset="100%" stopColor={c.sun} stopOpacity={0} />
        </radialGradient>
        <linearGradient id={skyId} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={c.skyTop} />
          <stop offset="70%" stopColor={c.skyMid} />
          <stop offset="100%" stopColor={c.skyHaze} />
        </linearGradient>
      </defs>

      {/* Sky, sun and sea: the drawing frames itself. */}
      <g>
        <rect x={0} y={0} width={W} height={H} fill={`url(#${skyId})`} />
        {/* Morning light from the upper left, the side every wall is lit from. */}
        <ellipse cx={70} cy={28} rx={130} ry={96} fill={`url(#${sunId})`} />
        <rect x={0} y={96} width={W} height={H - 96} fill={c.seaFar} />
        <rect x={0} y={96} width={W} height={6} fill={c.seaShimmer} opacity={0.7} />
        <rect x={0} y={190} width={W} height={H - 190} fill={c.sea} opacity={0.6} />
        <Cloud x={70} y={60} scale={1.1} />
        <Cloud x={390} y={44} scale={1.4} />
        <Cloud x={250} y={30} scale={0.8} opacity={0.8} />
      </g>

      <Island {...HOME} />
      <Island {...FAR} />

      {/* Worn earth by the door, and the bridge across the strait. */}
      <ellipse cx={224} cy={188} rx={16} ry={5.5} fill={c.dirt} />
      <Pop order={next()} reduced={reduced}>
        <DoublyHouse />
      </Pop>
      <Pop order={next()} reduced={reduced}>
        <g>
          <path d="M 372 194 L 404 214" stroke={c.woodDeep} strokeWidth={5} strokeLinecap="round" />
          <path d="M 372 194 L 404 214" stroke={c.wood} strokeWidth={3} strokeLinecap="round" />
        </g>
      </Pop>

      {HOME_SPOTS.map((home, index) => {
        const tree = TREE_SPOTS[index];
        return (
          <g key={home.x}>
            <Pop order={next()} reduced={reduced}>
              <MapTree {...tree} />
            </Pop>
            <Pop order={next()} reduced={reduced}>
              <MapHome {...home} />
            </Pop>
          </g>
        );
      })}
      {TREE_SPOTS.slice(HOME_SPOTS.length).map((tree) => (
        <Pop key={tree.x} order={next()} reduced={reduced}>
          <MapTree {...tree} />
        </Pop>
      ))}

      {/* The places habits build: a dug bed, a well, the library, the gym pad, the track, the cairn. */}
      <Pop order={next()} reduced={reduced}>
        <g>
          <rect x={150} y={176} width={42} height={18} rx={6} fill={c.soil} />
          {Array.from({ length: 9 }, (_, index) => (
            <circle
              key={index}
              cx={158 + (index % 3) * 13}
              cy={181 + Math.floor(index / 3) * 4.5}
              r={2.4}
              fill={index >= 6 ? c.crop : index >= 3 ? c.roofRidge : c.sprout}
            />
          ))}
        </g>
      </Pop>
      <Pop order={next()} reduced={reduced}>
        <g>
          <circle cx={236} cy={204} r={4.2} fill={c.stoneShade} />
          <circle cx={236} cy={204} r={2.4} fill={c.waterDeep} />
        </g>
      </Pop>
      <Pop order={next()} reduced={reduced}>
        <g>
          <rect x={216} y={206} width={7} height={5.5} rx={1} fill={c.wood} />
          <rect x={217.5} y={207.5} width={1.4} height={3} fill={c.roofRidge} />
          <rect x={219.5} y={207.5} width={1.4} height={3} fill={c.crop} />
        </g>
      </Pop>
      <Pop order={next()} reduced={reduced}>
        <g>
          <ellipse cx={276} cy={208} rx={11.6} ry={5.8} fill={c.dirt} />
          {Array.from({ length: 4 }, (_, index) => (
            <rect key={index} x={269.2 + index * 4.5} y={200} width={1.6} height={7} fill={c.stoneShade} />
          ))}
        </g>
      </Pop>
      <Pop order={next()} reduced={reduced}>
        <ellipse cx={318} cy={204} rx={20} ry={8.4} fill="none" stroke={c.dirt} strokeWidth={3} />
      </Pop>
      <Pop order={next()} reduced={reduced}>
        <g>
          <circle cx={112} cy={198} r={4.2} fill={c.stoneShade} />
          <circle cx={112} cy={193.4} r={3.4} fill={c.stone} />
          <circle cx={112} cy={189.2} r={2.4} fill={c.stoneShade} />
        </g>
      </Pop>

      {FLOWER_DOTS.map((dot) => (
        <Pop key={`${dot.x}-${dot.y}`} order={next()} reduced={reduced}>
          <circle cx={dot.x} cy={dot.y} r={3.2} fill={dot.fill} />
        </Pop>
      ))}
      {LAMP_DOTS.map((dot) => (
        <Pop key={`${dot.x}-${dot.y}`} order={next()} reduced={reduced}>
          <g>
            <circle cx={dot.x} cy={dot.y} r={5} fill={c.lanternGlow} opacity={0.35} />
            <circle cx={dot.x} cy={dot.y} r={2} fill={c.lantern} />
          </g>
        </Pop>
      ))}
      {BUTTERFLY_SPOTS.map((spot) => (
        <Pop key={`${spot.x}-${spot.y}`} order={next()} reduced={reduced}>
          <Butterfly x={spot.x} y={spot.y} scale={1.8} fill={spot.fill} />
        </Pop>
      ))}

      <Birds x={368} y={66} scale={1} />
      <Birds x={96} y={74} scale={0.8} opacity={0.7} />
      <Birds x={300} y={52} scale={0.75} opacity={0.6} />
    </motion.svg>
  );
}
