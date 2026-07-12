'use client';

export type SessionPhase = 'waiting' | 'intro' | 'focus' | 'wrap-up' | 'done';

type Props = {
  phase: SessionPhase;
  peerName: string;
  peerPresent: boolean;
  onAdvance: () => void;
  onRestart: () => void;
  onLeave: () => void;
};

const COPY: Record<
  SessionPhase,
  { eyebrow: string; title: string; body: string; cta: string | null }
> = {
  waiting: {
    eyebrow: 'Step 0 of 3',
    title: 'Share your link',
    body: 'Send the page URL to one person. The session starts the moment they join.',
    cta: null,
  },
  intro: {
    eyebrow: 'Step 1 of 3 · Intro',
    title: 'Wave hi and say what you are about to do',
    body: 'Take 60 seconds. Camera on, one sentence each. Saying the goal out loud is what makes it stick.',
    cta: 'Start focus',
  },
  focus: {
    eyebrow: 'Step 2 of 3 · Focus',
    title: 'Heads down. You are working together in silence.',
    body: 'Mic on or off, both fine. The other person being there is the point.',
    cta: 'End focus early',
  },
  'wrap-up': {
    eyebrow: 'Step 3 of 3 · Wrap-up',
    title: 'Share one win and one thing that tripped you up',
    body: 'A short out-loud reflection locks in what you just did and makes the next session easier to start.',
    cta: 'End session',
  },
  done: {
    eyebrow: 'Session complete',
    title: 'Nice work. You showed up.',
    body: 'That counts. Stay and run another, or close the tab and go do something kind for yourself.',
    cta: null,
  },
};

export default function PhaseBanner({
  phase,
  peerName,
  peerPresent,
  onAdvance,
  onRestart,
  onLeave,
}: Props) {
  const copy = COPY[phase];

  const tint =
    phase === 'intro'
      ? 'bg-lavender/15 border-lavender/40'
      : phase === 'focus'
        ? 'bg-sage/15 border-sage/40'
        : phase === 'wrap-up'
          ? 'bg-coral/15 border-coral/40'
          : phase === 'done'
            ? 'bg-cream-dark border-warm-dark/40'
            : 'bg-warm border-warm-dark/40';

  return (
    <div className={`rounded-3xl border px-5 py-5 sm:px-7 sm:py-6 ${tint}`}>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/60">
            {copy.eyebrow}
          </p>
          <h2 className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal sm:text-xl">
            {phase === 'intro' && peerPresent ? `Wave hi to ${peerName}` : copy.title}
          </h2>
          <p className="mt-1 text-sm leading-6 text-charcoal-light">{copy.body}</p>
        </div>

        {phase === 'done' ? (
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onRestart}
              className="rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-cream hover:bg-charcoal-light transition-colors"
            >
              Run another
            </button>
            <button
              type="button"
              onClick={onLeave}
              className="rounded-full border border-charcoal/20 bg-white px-5 py-2.5 text-sm font-medium text-charcoal hover:bg-warm transition-colors"
            >
              Leave
            </button>
          </div>
        ) : copy.cta ? (
          <button
            type="button"
            onClick={onAdvance}
            disabled={!peerPresent && phase === 'intro'}
            className="self-start rounded-full bg-charcoal px-5 py-2.5 text-sm font-semibold text-cream hover:bg-charcoal-light disabled:cursor-not-allowed disabled:opacity-50 transition-colors sm:self-auto"
          >
            {copy.cta}
          </button>
        ) : null}
      </div>
    </div>
  );
}
