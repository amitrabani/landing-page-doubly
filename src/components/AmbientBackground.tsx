/**
 * Page-level atmosphere: slow-drifting gradient blobs + a film grain wash.
 * Server component; motion is pure CSS (disabled under prefers-reduced-motion in globals.css).
 */
export default function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="ambient-blob absolute -top-[15%] -right-[10%] h-[55vmax] w-[55vmax] rounded-full bg-[radial-gradient(circle,rgba(212,200,237,0.35)_0%,transparent_65%)]" />
      <div className="ambient-blob-slow absolute top-[35%] -left-[18%] h-[50vmax] w-[50vmax] rounded-full bg-[radial-gradient(circle,rgba(240,181,160,0.22)_0%,transparent_65%)]" />
      <div className="ambient-blob absolute bottom-[-20%] right-[8%] h-[45vmax] w-[45vmax] rounded-full bg-[radial-gradient(circle,rgba(168,181,160,0.25)_0%,transparent_65%)]" />
      <div className="grain absolute inset-0" />
    </div>
  );
}
