'use client';

import { useT } from '@/i18n/TranslationProvider';

type Props = {
  micOn: boolean;
  camOn: boolean;
  micAllowed: boolean;
  camAllowed: boolean;
  timerRunning: boolean;
  canStartTimer: boolean;
  onToggleMic: () => void;
  onToggleCam: () => void;
  onTimerToggle: () => void;
  onLeave: () => void;
};

export default function ControlsBar({
  micOn,
  camOn,
  micAllowed,
  camAllowed,
  timerRunning,
  canStartTimer,
  onToggleMic,
  onToggleCam,
  onTimerToggle,
  onLeave,
}: Props) {
  const t = useT();
  const c = t.room.controls;

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
      <ControlButton
        active={micOn}
        disabled={!micAllowed}
        onClick={onToggleMic}
        label={micOn ? c.muteMic : micAllowed ? c.unmuteMic : c.micUnavailable}
        title={micOn ? c.muteTitle : micAllowed ? c.unmuteTitle : c.micBlockedTitle}
        tone={micOn ? 'sage' : 'neutral'}
      >
        {micOn ? <MicIcon /> : <MicOffIcon />}
      </ControlButton>

      <ControlButton
        active={camOn}
        disabled={!camAllowed}
        onClick={onToggleCam}
        label={camOn ? c.camOff : camAllowed ? c.camOn : c.camUnavailable}
        title={camOn ? c.stopVideoTitle : camAllowed ? c.startVideoTitle : c.camBlockedTitle}
        tone={camOn ? 'sage' : 'neutral'}
      >
        {camOn ? <CamIcon /> : <CamOffIcon />}
      </ControlButton>

      <button
        type="button"
        onClick={onTimerToggle}
        disabled={!canStartTimer}
        className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-5 py-3 text-sm font-semibold hover:bg-charcoal-light disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
      >
        {timerRunning ? c.pauseTimer : c.startTimer}
      </button>

      <button
        type="button"
        onClick={onLeave}
        className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-5 py-3 text-sm font-medium text-charcoal hover:bg-warm transition-colors"
      >
        {c.leave}
      </button>
    </div>
  );
}

type CBProps = {
  active: boolean;
  disabled: boolean;
  onClick: () => void;
  label: string;
  title: string;
  tone: 'sage' | 'neutral';
  children: React.ReactNode;
};

function ControlButton({ active, disabled, onClick, label, title, tone, children }: CBProps) {
  const base =
    'inline-flex h-12 w-12 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-50';
  const styled =
    tone === 'sage' && active
      ? 'bg-sage text-cream hover:bg-sage-dark'
      : 'bg-warm border border-warm-dark/40 text-charcoal hover:bg-warm-dark/30';
  return (
    <button
      type="button"
      aria-label={label}
      title={title}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styled}`}
    >
      {children}
    </button>
  );
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z" />
    </svg>
  );
}
function MicOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zM14.98 11.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" />
    </svg>
  );
}
function CamIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
    </svg>
  );
}
function CamOffIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M21 6.5l-4 4V7a1 1 0 0 0-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 .73-.32L19.73 21 21 19.73 3.27 2z" />
    </svg>
  );
}
