import { villageColors as c } from './villageColors';

/**
 * The village's building blocks as plain SVG fragments. Each one draws at a
 * point inside whatever <svg> it is placed in, so the hero sky, the skyline
 * strip under the final call to action and the inventory tiles all share one
 * set of shapes.
 *
 * Ported from the Doubly app's scene layers. The same rules apply here: lit
 * from the upper left, one palette (villageColors), nothing finer than about
 * two units because it will not survive a phone screen. These are side-view
 * (elevation) drawings; the island seen from the sky is its own drawing in
 * VillageIsland, because a side view can never be dressed into a top-down one.
 */

interface At {
  x: number;
  /** The ground line the thing stands on. */
  y: number;
  scale?: number;
}

/** A tree: trunk and three blobs of leaves, with the light on the top left. */
export function Tree({ x, y, scale = 1, apples = 0 }: At & { apples?: number }) {
  const h = 44 * scale;
  const r = 13 * scale;
  const trunkW = 4.5 * scale;
  const top = y - h;
  const appleSpots = [
    [-0.55, 0.95],
    [0.5, 1.05],
    [0.05, 0.4],
  ] as const;
  return (
    <g>
      <ellipse cx={x} cy={y + 1} rx={r * 0.9} ry={2.6 * scale} fill={c.shadow} opacity={0.16} />
      <rect x={x - trunkW / 2} y={top + r} width={trunkW} height={h - r} fill={c.woodShade} />
      <rect x={x - trunkW / 2} y={top + r} width={trunkW * 0.4} height={h - r} fill={c.wood} />
      <ellipse cx={x - r * 0.62} cy={top + r * 1.25} rx={r * 0.78} ry={r * 0.72} fill={c.leafDeep} />
      <ellipse cx={x + r * 0.6} cy={top + r * 1.15} rx={r * 0.8} ry={r * 0.74} fill={c.leaf} />
      <ellipse cx={x} cy={top + r * 0.72} rx={r} ry={r * 0.9} fill={c.leaf} />
      <path
        d={`M${x - r * 0.9} ${top + r * 0.8} Q ${x - r * 0.5} ${top - r * 0.2} ${x + r * 0.25} ${top + r * 0.2} Q ${x - r * 0.2} ${top + r * 0.5} ${x - r * 0.9} ${top + r * 0.8} Z`}
        fill={c.leafLit}
      />
      {appleSpots.slice(0, apples).map(([dx, dy], index) => (
        <g key={index}>
          <circle cx={x + dx * r} cy={top + dy * r} r={2.2 * scale} fill={c.roof} />
          <circle
            cx={x + dx * r - 0.7 * scale}
            cy={top + dy * r - 0.7 * scale}
            r={0.8 * scale}
            fill={c.roofRidge}
          />
        </g>
      ))}
    </g>
  );
}

/**
 * A home in elevation: shadow, stone footing, lit wall with a shaded right
 * edge, a lit window, a door, then the gable with its eave board on top.
 */
export function SideHome({
  x,
  y,
  w = 58,
  h = 36,
  chimney = false,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  chimney?: boolean;
}) {
  const top = y - h;
  const roofH = h * 0.5;
  const over = w * 0.12;
  const shadeW = Math.max(w * 0.28, 6);
  const win = { x: x + w * 0.58, y: top + h * 0.28, w: w * 0.2, h: h * 0.32 };
  const door = { x: x + w * 0.2, w: w * 0.2, h: h * 0.56 };
  const chimneyX = x + w * 0.24;
  const chimneyFoot = top + 2 - ((chimneyX - (x - over)) / (w / 2 + over)) * roofH;
  return (
    <g>
      <ellipse cx={x + w / 2} cy={y + 1.5} rx={w * 0.62} ry={4} fill={c.shadow} opacity={0.14} />
      <rect x={x} y={top} width={w} height={h} fill={c.wall} />
      <rect x={x + w - shadeW} y={top} width={shadeW} height={h} fill={c.wallShade} />
      <rect x={x} y={y - 6} width={w} height={6} fill={c.wallDeep} />

      <ellipse
        cx={win.x + win.w / 2}
        cy={win.y + win.h / 2}
        rx={win.w * 1.5}
        ry={win.h * 1.4}
        fill={c.glow}
        opacity={0.35}
      />
      <rect
        x={win.x - 1.2}
        y={win.y - 1.2}
        width={win.w + 2.4}
        height={win.h + 2.4}
        rx={1.5}
        fill={c.woodShade}
      />
      <rect x={win.x} y={win.y} width={win.w} height={win.h} rx={0.8} fill={c.glassLit} />
      <line
        x1={win.x + win.w / 2}
        y1={win.y}
        x2={win.x + win.w / 2}
        y2={win.y + win.h}
        stroke={c.woodShade}
        strokeWidth={1}
      />
      <line
        x1={win.x}
        y1={win.y + win.h / 2}
        x2={win.x + win.w}
        y2={win.y + win.h / 2}
        stroke={c.woodShade}
        strokeWidth={0.8}
      />

      <rect
        x={door.x - 1}
        y={y - door.h - 1}
        width={door.w + 2}
        height={door.h + 1}
        rx={1.2}
        fill={c.woodShade}
      />
      <rect x={door.x} y={y - door.h} width={door.w} height={door.h} rx={0.8} fill={c.wood} />
      <circle cx={door.x + door.w - 2.4} cy={y - door.h / 2} r={0.9} fill={c.lantern} />

      <path
        d={`M${x - over} ${top + 2} L${x + w / 2} ${top - roofH} L${x + w + over} ${top + 2} Z`}
        fill={c.roof}
      />
      <path
        d={`M${x + w / 2} ${top - roofH} L${x + w + over} ${top + 2} L${x + w / 2} ${top + 2} Z`}
        fill={c.roofShade}
      />
      <rect x={x - over} y={top + 1} width={w + over * 2} height={3} rx={1.4} fill={c.woodShade} />
      {chimney ? (
        <g>
          <rect x={chimneyX} y={chimneyFoot - 15} width={7.5} height={17} fill={c.wallShade} />
          <rect x={chimneyX} y={chimneyFoot - 15} width={2.6} height={17} fill={c.wall} />
          <rect
            x={chimneyX - 1.6}
            y={chimneyFoot - 17}
            width={10.7}
            height={3}
            rx={1}
            fill={c.roofShade}
          />
        </g>
      ) : null}
    </g>
  );
}

/** Three blossoms on stems: what a settled habit grows. */
export function Flower({ x, y, scale = 1 }: At) {
  const s = scale;
  return (
    <g>
      <path
        d={`M ${x - 3 * s} ${y} v ${-4.5 * s} M ${x + 0.5 * s} ${y} v ${-6.5 * s} M ${x + 3.5 * s} ${y} v ${-4 * s}`}
        stroke={c.sprout}
        strokeWidth={1.1 * s}
        strokeLinecap="round"
        fill="none"
      />
      <circle cx={x - 3 * s} cy={y - 6.5 * s} r={2.4 * s} fill={c.roofRidge} />
      <circle cx={x + 0.5 * s} cy={y - 8.7 * s} r={2.7 * s} fill={c.crop} />
      <circle cx={x + 3.5 * s} cy={y - 6 * s} r={2.2 * s} fill={c.roofRidge} />
      <circle cx={x + 0.5 * s} cy={y - 8.7 * s} r={0.9 * s} fill={c.cropShade} />
    </g>
  );
}

/** Two wings and a body, tilted a little so it reads as flying. */
export function Butterfly({ x, y, scale = 1, fill = c.roofRidge }: At & { fill?: string }) {
  const s = scale;
  return (
    <g>
      <ellipse cx={x - 1.3 * s} cy={y - 0.4 * s} rx={1.4 * s} ry={1.1 * s} fill={fill} />
      <ellipse cx={x + 1.3 * s} cy={y - 0.4 * s} rx={1.4 * s} ry={1.1 * s} fill={fill} />
      <ellipse cx={x - s} cy={y + 0.8 * s} rx={0.9 * s} ry={0.7 * s} fill={fill} opacity={0.8} />
      <ellipse cx={x + s} cy={y + 0.8 * s} rx={0.9 * s} ry={0.7 * s} fill={fill} opacity={0.8} />
      <rect
        x={x - 0.3 * s}
        y={y - 1.3 * s}
        width={0.6 * s}
        height={2.6 * s}
        rx={0.3 * s}
        fill={c.ink}
        opacity={0.7}
      />
    </g>
  );
}

/** A pair of birds, drawn as two open V strokes. */
export function Birds({ x, y, scale = 1, opacity = 0.8 }: At & { opacity?: number }) {
  const s = scale;
  return (
    <path
      d={`M ${x} ${y} q ${5 * s} ${-5 * s} ${10 * s} 0 q ${5 * s} ${-5 * s} ${10 * s} 0 M ${x + 24 * s} ${y + 12 * s} q ${4 * s} ${-4 * s} ${8 * s} 0 q ${4 * s} ${-4 * s} ${8 * s} 0`}
      stroke={c.bird}
      strokeWidth={1.6 * s}
      strokeLinecap="round"
      fill="none"
      opacity={opacity}
    />
  );
}

/** A street lamp, lit: a post, a lantern head and the halo it throws. */
export function Lamp({ x, y, scale = 1 }: At) {
  const s = scale;
  const post = 14 * s;
  return (
    <g>
      <circle cx={x} cy={y - post - s} r={7 * s} fill={c.lanternGlow} opacity={0.4} />
      <rect x={x - 1.6 * s} y={y - 1.2 * s} width={3.2 * s} height={1.6 * s} rx={0.6 * s} fill={c.woodDeep} />
      <rect x={x - 0.6 * s} y={y - post} width={1.2 * s} height={post} fill={c.woodDeep} />
      <rect
        x={x - 2.2 * s}
        y={y - post - 3.2 * s}
        width={4.4 * s}
        height={3.8 * s}
        rx={0.9 * s}
        fill={c.lantern}
      />
      <rect
        x={x - 1.4 * s}
        y={y - post - 2.6 * s}
        width={1.3 * s}
        height={2.4 * s}
        rx={0.4 * s}
        fill={c.glow}
        opacity={0.9}
      />
      <rect
        x={x - 2.6 * s}
        y={y - post - 3.9 * s}
        width={5.2 * s}
        height={s}
        rx={0.5 * s}
        fill={c.woodDeep}
      />
    </g>
  );
}

/** A cloud: four soft lumps on a flat base. Belongs in the top third of a sky. */
export function Cloud({ x, y, scale = 1, opacity = 0.95 }: At & { opacity?: number }) {
  const s = scale;
  return (
    <g opacity={opacity} fill={c.cloud}>
      <ellipse cx={x} cy={y} rx={22 * s} ry={9 * s} />
      <ellipse cx={x - 9 * s} cy={y - 4 * s} rx={11 * s} ry={8 * s} />
      <ellipse cx={x + 6 * s} cy={y - 6 * s} rx={13 * s} ry={10 * s} />
      <ellipse cx={x + 16 * s} cy={y - 2 * s} rx={9 * s} ry={7 * s} />
    </g>
  );
}

export type VillageIconKind =
  | 'homes'
  | 'trees'
  | 'rest'
  | 'other'
  | 'fruit'
  | 'outdoors'
  | 'limits';

/**
 * One inventory icon per kind of thing the village can hold, each drawn from
 * the sprites above into a 48-unit square with the ground at 40.
 */
export function VillageIcon({ kind, className }: { kind: VillageIconKind; className?: string }) {
  const G = 40;
  const body = (() => {
    switch (kind) {
      case 'homes':
        return <SideHome x={9} y={G} w={30} h={19} chimney />;
      case 'trees':
        return <Tree x={24} y={G} scale={0.85} />;
      case 'fruit':
        return <Tree x={24} y={G} scale={0.85} apples={3} />;
      case 'rest':
        return <Lamp x={24} y={G} scale={1.7} />;
      case 'other':
        return <Flower x={24} y={G} scale={2.2} />;
      case 'outdoors':
        return <Birds x={8} y={20} scale={1.1} />;
      case 'limits':
        return <Butterfly x={24} y={24} scale={5} fill={c.crop} />;
    }
  })();
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      {body}
    </svg>
  );
}
