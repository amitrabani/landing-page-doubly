/**
 * Page-level atmosphere: a slow rotating aurora mesh, drifting gradient blobs, and a
 * film-grain wash. Pure decoration (fixed, -z, pointer-events-none) - it never affects
 * layout geometry, so the demos' measurements stay exact. All motion is CSS keyframes
 * (disabled by the reduced-motion block in globals.css), so this renders on the server
 * and costs no JS. The aurora is rasterized at half size and scaled up 2x in CSS -
 * see `.aurora` in globals.css for why.
 */
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Rotating aurora mesh (positioned + scaled by the .aurora rule) */}
      <div className="aurora absolute left-1/2 top-1/2 h-[70vmax] w-[70vmax]" />

      {/* Drifting blobs */}
      <div className="ambient-blob absolute -top-[15%] -right-[10%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(212,200,237,0.35)_0%,transparent_65%)]" />
      <div className="ambient-blob-slow absolute top-[35%] -left-[18%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(240,181,160,0.22)_0%,transparent_65%)]" />
      <div className="ambient-blob absolute bottom-[-20%] right-[8%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(168,181,160,0.25)_0%,transparent_65%)]" />

      {/* Soft vignette to seat the content */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,rgba(45,43,50,0.05)_100%)]" />

      <div className="grain absolute inset-0" />
    </div>
  );
}
