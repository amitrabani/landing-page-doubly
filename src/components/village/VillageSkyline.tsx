import { villageColors as c } from './villageColors';
import { Butterfly, Flower, Lamp, SideHome, Tree } from './VillageSprites';

/**
 * A strip of the village seen from the street: homes, trees, lamps and
 * flowers on a band of grass. Pinned to the bottom of whatever it decorates
 * and cropped at the sides on narrow screens, so the ground always meets the
 * edge. Side view only: it never mixes with the aerial island.
 */

const W = 960;
const H = 150;
const GROUND = 126;

export default function VillageSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMax slice"
    >
      <rect x={0} y={GROUND - 6} width={W} height={H - GROUND + 6} fill={c.grassShade} />
      <path
        d={`M0 ${GROUND} Q 240 ${GROUND - 9} 480 ${GROUND} T ${W} ${GROUND} V ${H} H 0 Z`}
        fill={c.grass}
      />

      <Tree x={60} y={GROUND} scale={1.1} />
      <Flower x={112} y={GROUND} scale={1.4} />
      <Tree x={150} y={GROUND} scale={0.8} apples={3} />
      <SideHome x={190} y={GROUND} w={72} h={44} chimney />
      <Flower x={280} y={GROUND} scale={1.2} />
      <Lamp x={300} y={GROUND} scale={1.5} />
      <Tree x={340} y={GROUND} scale={1} />
      <SideHome x={385} y={GROUND} w={56} h={36} />
      <Flower x={455} y={GROUND} scale={1.5} />
      <Tree x={488} y={GROUND} scale={0.9} apples={2} />
      <Lamp x={560} y={GROUND} scale={1.5} />
      <Flower x={600} y={GROUND} scale={1.3} />
      <Tree x={630} y={GROUND} scale={1.15} />
      <SideHome x={680} y={GROUND} w={64} h={40} chimney />
      <Flower x={766} y={GROUND} scale={1.4} />
      <Lamp x={800} y={GROUND} scale={1.5} />
      <SideHome x={830} y={GROUND} w={50} h={32} />
      <Tree x={912} y={GROUND} scale={1} />
      <Flower x={945} y={GROUND} scale={1.2} />

      <Butterfly x={318} y={74} scale={3} fill={c.roofRidge} />
      <Butterfly x={596} y={66} scale={3} fill={c.crop} />
    </svg>
  );
}
