type Status = 'idle' | 'running' | 'paused';

export type TimerControlsProps = {
  status: Status;
  remainingMs: number;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
  onSkip?: () => void;
};

const PRIMARY_CLASS =
  'px-8 py-3 rounded-full text-cream font-semibold min-w-[8rem] transition-shadow ' +
  'shadow-[0_4px_12px_rgba(45,43,50,0.18),inset_0_1px_0_rgba(255,255,255,0.1)] ' +
  'hover:shadow-[0_6px_16px_rgba(45,43,50,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] ' +
  'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none';

const PRIMARY_STYLE: React.CSSProperties = {
  background: 'linear-gradient(180deg, var(--color-charcoal-light), var(--color-charcoal))',
};

const GHOST_CLASS =
  'px-6 py-3 rounded-full text-charcoal font-medium bg-white/60 hover:bg-white/85 ' +
  'transition-colors shadow-[inset_0_0_0_1px_rgba(45,43,50,0.08)]';

export default function TimerControls({
  status,
  remainingMs,
  onStart,
  onPause,
  onReset,
  onSkip,
}: TimerControlsProps) {
  const isRunning = status === 'running';
  const isPaused = status === 'paused';
  const isFinished = status === 'idle' && remainingMs === 0;
  const primaryLabel = isRunning ? 'Pause' : isPaused ? 'Resume' : isFinished ? 'Done' : 'Start';
  const primaryDisabled = isFinished && !onSkip;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={isRunning ? onPause : onStart}
        disabled={primaryDisabled}
        className={PRIMARY_CLASS}
        style={PRIMARY_STYLE}
      >
        {primaryLabel}
      </button>
      <button type="button" onClick={onReset} className={GHOST_CLASS}>
        Reset
      </button>
      {onSkip && (
        <button
          type="button"
          onClick={onSkip}
          aria-label="Skip to next session"
          className={GHOST_CLASS}
        >
          Skip &rarr;
        </button>
      )}
    </div>
  );
}
