'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { nanoid } from 'nanoid';
import TimerDial from '../../(public-helpers)/_components/TimerDial';
import VideoTile from './VideoTile';
import ControlsBar from './ControlsBar';
import JoinScreen from './JoinScreen';
import PhaseBanner, { type SessionPhase } from './PhaseBanner';
import { ReactionsBar, ReactionsLayer, useReactionBursts, type ReactionEmoji } from './Reactions';
import { useSignaling, type SignalMsg } from './useSignaling';
import { useWebRTC, type RoomErrorCode } from './useWebRTC';
import { useT } from '@/i18n/TranslationProvider';

type Props = { roomId: string };

type JoinData = { name: string; avatar: string; durationMin: number };

type TimerState = {
  durationSec: number;
  startedAt: number | null;
  pausedRemainingSec: number | null;
};

const DEFAULT_TIMER: TimerState = {
  durationSec: 25 * 60,
  startedAt: null,
  pausedRemainingSec: null,
};

function format(remainingSec: number): string {
  const safe = Math.max(0, Math.round(remainingSec));
  const m = Math.floor(safe / 60);
  const s = safe % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

export default function Room({ roomId }: Props) {
  const t = useT();
  const copy = t.room;
  const router = useRouter();
  const [join, setJoin] = useState<JoinData | null>(null);
  const [selfId] = useState(() => nanoid(10));
  const [timer, setTimer] = useState<TimerState>(DEFAULT_TIMER);
  const [goalSelf, setGoalSelf] = useState('');
  const [goalPeer, setGoalPeer] = useState('');
  const [reflectionSelf, setReflectionSelf] = useState('');
  const [reflectionPeer, setReflectionPeer] = useState('');
  const [phase, setPhase] = useState<SessionPhase>('waiting');
  const [peerLeft, setPeerLeft] = useState(false);
  const [copied, setCopied] = useState(false);
  const [nowTick, setNowTick] = useState(() => Date.now());
  const { bursts: reactionBursts, fire: fireReaction } = useReactionBursts();

  const webrtcHandlerRef = useRef<(m: SignalMsg) => void>(() => {});
  const registerHandler = useCallback((fn: (m: SignalMsg) => void) => {
    webrtcHandlerRef.current = fn;
  }, []);

  const onSignalMessage = useCallback(
    (msg: SignalMsg) => {
      if (msg.type === 'webrtc-offer' || msg.type === 'webrtc-answer' || msg.type === 'webrtc-ice') {
        webrtcHandlerRef.current(msg);
        return;
      }
      if (msg.type === 'room-event') {
        const payload = (msg.payload || {}) as Record<string, unknown>;
        if (msg.kind === 'timer-start') {
          setTimer({
            durationSec: Number(payload.durationSec) || DEFAULT_TIMER.durationSec,
            startedAt: Number(payload.startedAt) || Date.now(),
            pausedRemainingSec: null,
          });
        } else if (msg.kind === 'timer-pause') {
          setTimer((t) => {
            if (t.startedAt === null) return t;
            const elapsed = (Date.now() - t.startedAt) / 1000;
            const remaining = Math.max(0, t.durationSec - elapsed);
            return { ...t, startedAt: null, pausedRemainingSec: remaining };
          });
        } else if (msg.kind === 'goal-update') {
          setGoalPeer(String(payload.text || ''));
        } else if (msg.kind === 'reflection-update') {
          setReflectionPeer(String(payload.text || ''));
        } else if (msg.kind === 'phase-change') {
          const next = String(payload.phase || '') as SessionPhase;
          if (['waiting', 'intro', 'focus', 'wrap-up', 'done'].includes(next)) {
            setPhase(next);
          }
        } else if (msg.kind === 'reaction') {
          const emoji = String(payload.emoji || '');
          if (emoji) fireReaction(emoji);
        } else if (msg.kind === 'leave') {
          setPeerLeft(true);
          setTimer((t) => {
            if (t.startedAt === null) return t;
            const elapsed = (Date.now() - t.startedAt) / 1000;
            return {
              ...t,
              startedAt: null,
              pausedRemainingSec: Math.max(0, t.durationSec - elapsed),
            };
          });
        }
      }
    },
    [fireReaction],
  );

  const signaling = useSignaling({
    roomId,
    selfId,
    selfName: join?.name || '',
    selfAvatar: join?.avatar || '',
    onMessage: onSignalMessage,
    enabled: Boolean(join),
  });

  const send = signaling.send;

  const rtc = useWebRTC({
    role: signaling.role,
    peerPresent: Boolean(signaling.peer),
    selfId,
    send,
    registerHandler,
  });

  useEffect(() => {
    if (!join) return;
    rtc.requestMedia();
  }, [join, rtc]);

  useEffect(() => {
    if (signaling.peer && peerLeft) {
      setPeerLeft(false);
    }
  }, [signaling.peer, peerLeft]);

  useEffect(() => {
    if (!peerLeft) return;
    const id = setTimeout(() => setPeerLeft(false), 5000);
    return () => clearTimeout(id);
  }, [peerLeft]);

  useEffect(() => {
    if (timer.startedAt === null) return;
    const id = setInterval(() => setNowTick(Date.now()), 500);
    return () => clearInterval(id);
  }, [timer.startedAt]);

  useEffect(() => {
    if (!join) return;
    const handler = () => {
      if (signaling.status === 'connected') {
        send({ type: 'room-event', from: selfId, kind: 'leave' });
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => {
      handler();
      window.removeEventListener('beforeunload', handler);
    };
  }, [join, signaling.status, send, selfId]);

  const changePhase = useCallback(
    (next: SessionPhase) => {
      setPhase(next);
      send({ type: 'room-event', from: selfId, kind: 'phase-change', payload: { phase: next } });
    },
    [send, selfId],
  );

  // Auto-advance waiting → intro the moment the partner arrives.
  useEffect(() => {
    if (signaling.peer && phase === 'waiting') {
      changePhase('intro');
    }
  }, [signaling.peer, phase, changePhase]);

  const handleJoin = (data: JoinData) => {
    setTimer({
      durationSec: data.durationMin * 60,
      startedAt: null,
      pausedRemainingSec: null,
    });
    setJoin(data);
  };

  const startFocusTimer = useCallback(() => {
    const remaining = timer.pausedRemainingSec ?? timer.durationSec;
    const startedAt = Date.now();
    setTimer({ durationSec: remaining, startedAt, pausedRemainingSec: null });
    send({
      type: 'room-event',
      from: selfId,
      kind: 'timer-start',
      payload: { durationSec: remaining, startedAt },
    });
  }, [timer, send, selfId]);

  const pauseFocusTimer = useCallback(() => {
    setTimer((t) => {
      if (t.startedAt === null) return t;
      const elapsed = (Date.now() - t.startedAt) / 1000;
      return { ...t, startedAt: null, pausedRemainingSec: Math.max(0, t.durationSec - elapsed) };
    });
    send({ type: 'room-event', from: selfId, kind: 'timer-pause' });
  }, [send, selfId]);

  const startOrPauseTimer = () => {
    if (timer.startedAt !== null) pauseFocusTimer();
    else startFocusTimer();
  };

  const handleAdvance = () => {
    if (phase === 'intro') {
      changePhase('focus');
      startFocusTimer();
    } else if (phase === 'focus') {
      pauseFocusTimer();
      changePhase('wrap-up');
    } else if (phase === 'wrap-up') {
      changePhase('done');
    }
  };

  const handleRestart = () => {
    if (!join) return;
    setReflectionSelf('');
    setReflectionPeer('');
    setGoalSelf('');
    setGoalPeer('');
    setTimer({ durationSec: join.durationMin * 60, startedAt: null, pausedRemainingSec: null });
    changePhase('intro');
  };

  const updateGoal = (text: string) => {
    setGoalSelf(text);
    send({ type: 'room-event', from: selfId, kind: 'goal-update', payload: { text } });
  };

  const updateReflection = (text: string) => {
    setReflectionSelf(text);
    send({ type: 'room-event', from: selfId, kind: 'reflection-update', payload: { text } });
  };

  const sendReaction = (emoji: ReactionEmoji) => {
    fireReaction(emoji);
    send({ type: 'room-event', from: selfId, kind: 'reaction', payload: { emoji } });
  };

  const handleLeave = () => {
    if (signaling.status === 'connected') {
      send({ type: 'room-event', from: selfId, kind: 'leave' });
    }
    router.push('/tools/body-doubling-room');
  };

  const copyInvite = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard blocked
    }
  };

  const { remainingSec, progress } = useMemo(() => {
    let remaining: number;
    if (timer.startedAt !== null) {
      const elapsed = (nowTick - timer.startedAt) / 1000;
      remaining = Math.max(0, timer.durationSec - elapsed);
    } else if (timer.pausedRemainingSec !== null) {
      remaining = timer.pausedRemainingSec;
    } else {
      remaining = timer.durationSec;
    }
    const fullDuration = timer.durationSec || 1;
    const prog = 1 - remaining / fullDuration;
    return { remainingSec: remaining, progress: Math.max(0, Math.min(1, prog)) };
  }, [timer, nowTick]);

  // When focus timer hits zero, auto-advance to wrap-up and fire a celebration.
  const hasCelebratedRef = useRef(false);
  useEffect(() => {
    if (phase !== 'focus') {
      hasCelebratedRef.current = false;
      return;
    }
    if (timer.startedAt === null) return;
    if (remainingSec > 0) return;
    if (hasCelebratedRef.current) return;
    hasCelebratedRef.current = true;
    ['🎉', '✨', '🎉'].forEach((e, i) => setTimeout(() => fireReaction(e), i * 180));
    pauseFocusTimer();
    changePhase('wrap-up');
  }, [phase, timer.startedAt, remainingSec, fireReaction, pauseFocusTimer, changePhase]);

  if (!join) {
    return <JoinScreen isFirstArrival={true} onJoin={handleJoin} />;
  }

  if (signaling.status === 'full') {
    return (
      <div className="mx-auto max-w-md px-6 py-16 text-center">
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-charcoal mb-3">
          {copy.full.title}
        </h1>
        <p className="text-charcoal-light mb-8">{copy.full.body}</p>
        <button
          type="button"
          onClick={() => router.push('/tools/body-doubling-room')}
          className="rounded-full bg-charcoal text-cream px-5 py-3 font-semibold hover:bg-charcoal-light transition-colors"
        >
          {copy.full.cta}
        </button>
      </div>
    );
  }

  const peerName = signaling.peer?.name || copy.tiles.peerFallbackName;
  const peerAvatar = signaling.peer?.avatar || '👻';
  const peerPlaceholder = signaling.peer ? undefined : copy.tiles.waitingForPartner;
  const peerPresent = Boolean(signaling.peer);
  const showDial = phase === 'focus';
  const showReflection = phase === 'wrap-up' || phase === 'done';

  const errorText = (code: RoomErrorCode) =>
    code === 'p2p-blocked' ? copy.errors.p2pBlocked : copy.errors.mediaUnavailable;

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 sm:py-10">
      <header className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-charcoal/60">{copy.header.eyebrow}</p>
          <h1 className="font-[family-name:var(--font-display)] text-xl font-semibold text-charcoal">
            {peerPresent ? copy.header.withPeer(peerName) : copy.header.waiting}
          </h1>
        </div>
        <button
          type="button"
          onClick={copyInvite}
          className="rounded-full border border-warm-dark/40 bg-white px-4 py-2 text-sm font-medium text-charcoal hover:bg-warm transition-colors"
        >
          {copied ? copy.header.linkCopied : copy.header.copyInvite}
        </button>
      </header>

      <div className="mb-5">
        <PhaseBanner
          phase={phase}
          peerName={peerName}
          peerPresent={peerPresent}
          onAdvance={handleAdvance}
          onRestart={handleRestart}
          onLeave={handleLeave}
        />
      </div>

      {peerLeft && (
        <div className="mb-4 rounded-2xl bg-coral/20 border border-coral/40 px-4 py-3 text-sm text-charcoal">
          {copy.status.peerLeft}
        </div>
      )}
      {rtc.connectError && (
        <div className="mb-4 flex flex-col gap-2 rounded-2xl bg-coral/20 border border-coral/40 px-4 py-3 text-sm text-charcoal sm:flex-row sm:items-center sm:justify-between">
          <span>{errorText(rtc.connectError)}</span>
          <button
            type="button"
            onClick={rtc.retry}
            className="self-start rounded-full bg-charcoal text-cream px-3 py-1.5 text-xs font-semibold hover:bg-charcoal-light"
          >
            {copy.controls.retry}
          </button>
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <VideoTile
            stream={rtc.localStream}
            name={copy.tiles.you(join.name)}
            avatar={join.avatar}
            muted
            micOn={rtc.micOn}
            camOn={rtc.camOn}
            isSelf
          />
          {showReflection ? (
            <input
              type="text"
              placeholder={copy.tiles.reflectionPlaceholder}
              value={reflectionSelf}
              onChange={(e) => updateReflection(e.target.value)}
              maxLength={140}
              className="w-full rounded-2xl border border-warm-dark/40 bg-white px-4 py-2 text-sm text-charcoal placeholder-charcoal/40 focus:border-coral focus:outline-none"
            />
          ) : (
            <input
              type="text"
              placeholder={
                phase === 'intro'
                  ? copy.tiles.goalPlaceholderIntro
                  : copy.tiles.goalPlaceholderFocus
              }
              value={goalSelf}
              onChange={(e) => updateGoal(e.target.value)}
              maxLength={120}
              className="w-full rounded-2xl border border-warm-dark/40 bg-white px-4 py-2 text-sm text-charcoal placeholder-charcoal/40 focus:border-lavender focus:outline-none"
            />
          )}
        </div>

        <div className="space-y-2">
          <VideoTile
            stream={rtc.remoteStream}
            name={peerName}
            avatar={peerAvatar}
            muted={false}
            micOn={Boolean(rtc.remoteStream)}
            camOn={Boolean(rtc.remoteStream)}
            isSelf={false}
            placeholder={peerPlaceholder}
          />
          <div className="rounded-2xl border border-warm-dark/40 bg-white/60 px-4 py-2 text-sm text-charcoal min-h-[2.5rem]">
            {showReflection ? (
              reflectionPeer || (
                <span className="text-charcoal/40">
                  {peerPresent ? copy.tiles.peerNoReflection : copy.tiles.empty}
                </span>
              )
            ) : (
              goalPeer || (
                <span className="text-charcoal/40">
                  {peerPresent ? copy.tiles.peerNoGoal : copy.tiles.empty}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-6">
        {showDial && (
          <TimerDial
            progress={progress}
            tone="lavender"
            display={format(remainingSec)}
            status={timer.startedAt !== null ? 'running' : timer.pausedRemainingSec !== null ? 'paused' : 'idle'}
            ariaLabel={copy.status.timerAria(format(remainingSec))}
          />
        )}

        {!showDial && phase !== 'done' && (
          <p className="text-sm text-charcoal/60">
            {phase === 'intro'
              ? copy.status.upNext(join.durationMin)
              : phase === 'wrap-up'
                ? copy.status.wrapUpBreath
                : copy.status.planOnArrival(join.durationMin)}
          </p>
        )}

        {phase === 'focus' && (
          <ControlsBar
            micOn={rtc.micOn}
            camOn={rtc.camOn}
            micAllowed={rtc.media.micAllowed}
            camAllowed={rtc.media.camAllowed}
            timerRunning={timer.startedAt !== null}
            canStartTimer={peerPresent}
            onToggleMic={rtc.toggleMic}
            onToggleCam={rtc.toggleCam}
            onTimerToggle={startOrPauseTimer}
            onLeave={handleLeave}
          />
        )}

        {phase !== 'focus' && (
          <div className="flex flex-wrap items-center justify-center gap-3">
            <MicCamMini
              micOn={rtc.micOn}
              camOn={rtc.camOn}
              micAllowed={rtc.media.micAllowed}
              camAllowed={rtc.media.camAllowed}
              onToggleMic={rtc.toggleMic}
              onToggleCam={rtc.toggleCam}
            />
            {phase !== 'done' && (
              <button
                type="button"
                onClick={handleLeave}
                className="rounded-full border border-charcoal/20 px-4 py-2 text-sm font-medium text-charcoal hover:bg-warm transition-colors"
              >
                {copy.controls.leave}
              </button>
            )}
          </div>
        )}

        {peerPresent && phase !== 'done' && (
          <ReactionsBar onSend={sendReaction} disabled={!peerPresent} />
        )}

        {!peerPresent && signaling.status === 'connected' && (
          <p className="text-sm text-charcoal/60">{copy.status.shareToUnlock}</p>
        )}
      </div>

      <ReactionsLayer bursts={reactionBursts} />
    </div>
  );
}

type MiniProps = {
  micOn: boolean;
  camOn: boolean;
  micAllowed: boolean;
  camAllowed: boolean;
  onToggleMic: () => void;
  onToggleCam: () => void;
};

function MicCamMini({ micOn, camOn, micAllowed, camAllowed, onToggleMic, onToggleCam }: MiniProps) {
  const c = useT().room.controls;
  const base =
    'inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors disabled:cursor-not-allowed disabled:opacity-50';
  const styleFor = (on: boolean) =>
    on ? 'bg-sage text-cream hover:bg-sage-dark' : 'bg-warm border border-warm-dark/40 text-charcoal hover:bg-warm-dark/30';
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onToggleMic}
        disabled={!micAllowed}
        aria-label={micOn ? c.muteMic : c.unmuteMic}
        className={`${base} ${styleFor(micOn)}`}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {micOn ? (
            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z" />
          ) : (
            <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zM14.98 11.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" />
          )}
        </svg>
      </button>
      <button
        type="button"
        onClick={onToggleCam}
        disabled={!camAllowed}
        aria-label={camOn ? c.camOff : c.camOn}
        className={`${base} ${styleFor(camOn)}`}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {camOn ? (
            <path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z" />
          ) : (
            <path d="M21 6.5l-4 4V7a1 1 0 0 0-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 .73-.32L19.73 21 21 19.73 3.27 2z" />
          )}
        </svg>
      </button>
    </div>
  );
}
