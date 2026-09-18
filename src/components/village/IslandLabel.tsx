import { villageColors as c } from './villageColors';

/**
 * The tag under a habit island: the place's name and how many times the habit
 * was kept. The app's own label (story/VillageAerialView.tsx) - a plaster
 * pill with a roof-coloured count - drawn with this site's game outline.
 *
 * The count sits on the shaded roof colour, not the lit one the app uses: on
 * a web page this is small body text, and cream on the lit roof is about 3:1,
 * under what small text needs. On the shade it clears 5:1.
 *
 * The count is pinned left-to-right. "×4" is notation, not prose, and in a
 * Hebrew or Arabic page the bidi algorithm would otherwise show it as "4×".
 */
export default function IslandLabel({ name, count }: { name: string; count: number }) {
  return (
    <span
      className="game-pill inline-flex max-w-full items-center gap-1.5 rounded-full py-1 ps-3 pe-1 text-xs font-bold leading-none"
      style={{ backgroundColor: c.wall, color: c.ink }}
    >
      <span className="truncate">{name}</span>
      <span
        dir="ltr"
        className="shrink-0 rounded-full px-1.5 py-1 text-[11px] font-extrabold tabular-nums"
        style={{ backgroundColor: c.roofShade, color: c.sun }}
      >
        ×{count}
      </span>
    </span>
  );
}
