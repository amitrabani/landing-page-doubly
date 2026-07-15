'use client';

import { useT } from '@/i18n/TranslationProvider';

export type SessionPhase = 'waiting' | 'intro' | 'focus' | 'wrap-up' | 'done';

type Props = {
  phase: SessionPhase;
  peerName: string;
  peerPresent: boolean;
  onAdvance: () => void;
  onRestart: () => void;
  onLeave: () => void;
};

export default function PhaseBanner({
  phase,
  peerName,
  peerPresent,
  onAdvance,
  onRestart,
  onLeave,
}: Props) {
  const t = useT();
  const p = t.room.phases;

  // The peer's name is the only thing interpolated here, and it is a name the
  // peer typed, not a translated string, so it is safe to drop into any locale.
  const copy: { eyebrow: string; title: string; body: string; cta: string | null } =
    phase === 'waiting'
      ? { ...p.waiting, cta: null }
      : phase === 'intro'
        ? {
            eyebrow: p.intro.eyebrow,
            title: peerPresent ? p.intro.titleWithPeer(peerName) : p.intro.title,
            body: p.intro.body,
            cta: p.intro.cta,
          }
        : phase === 'focus'
          ? { ...p.focus, cta: p.focus.cta }
          : phase === 'wrap-up'
            ? { ...p.wrapUp, cta: p.wrapUp.cta }
            : { ...p.done, cta: null };

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
            {copy.title}
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
              {p.done.runAnother}
            </button>
            <button
              type="button"
              onClick={onLeave}
              className="rounded-full border border-charcoal/20 bg-white px-5 py-2.5 text-sm font-medium text-charcoal hover:bg-warm transition-colors"
            >
              {t.room.controls.leave}
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
