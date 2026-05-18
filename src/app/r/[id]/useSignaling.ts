'use client';

import { useEffect, useRef, useState } from 'react';
import type { RealtimeChannel } from '@supabase/supabase-js';
import { getSupabase } from '@/lib/supabase';

export type Role = 'host' | 'guest';

export type SignalMsg =
  | { type: 'webrtc-offer'; from: string; sdp: RTCSessionDescriptionInit }
  | { type: 'webrtc-answer'; from: string; sdp: RTCSessionDescriptionInit }
  | { type: 'webrtc-ice'; from: string; candidate: RTCIceCandidateInit }
  | {
      type: 'room-event';
      from: string;
      kind:
        | 'timer-start'
        | 'timer-pause'
        | 'goal-update'
        | 'leave'
        | 'phase-change'
        | 'reaction'
        | 'reflection-update';
      payload?: unknown;
    };

type PresenceMeta = {
  selfId: string;
  name: string;
  avatar: string;
  joinedAt: number;
};

export type SignalingStatus = 'idle' | 'connecting' | 'connected' | 'full' | 'error';

type Options = {
  roomId: string;
  selfId: string;
  selfName: string;
  selfAvatar: string;
  onMessage: (msg: SignalMsg) => void;
  enabled: boolean;
};

export function useSignaling({
  roomId,
  selfId,
  selfName,
  selfAvatar,
  onMessage,
  enabled,
}: Options) {
  const [status, setStatus] = useState<SignalingStatus>('idle');
  const [role, setRole] = useState<Role | null>(null);
  const [peer, setPeer] = useState<{ id: string; name: string; avatar: string } | null>(null);
  const channelRef = useRef<RealtimeChannel | null>(null);
  const onMessageRef = useRef(onMessage);

  useEffect(() => {
    onMessageRef.current = onMessage;
  }, [onMessage]);

  useEffect(() => {
    if (!enabled || !roomId || !selfId) return;

    let cancelled = false;
    setStatus('connecting');

    let supabase;
    try {
      supabase = getSupabase();
    } catch {
      setStatus('error');
      return;
    }

    const channel = supabase.channel(`room:${roomId}`, {
      config: {
        broadcast: { self: false, ack: false },
        presence: { key: selfId },
      },
    });
    channelRef.current = channel;

    channel.on('broadcast', { event: 'signal' }, ({ payload }) => {
      const msg = payload as SignalMsg;
      if (msg.from === selfId) return;
      onMessageRef.current(msg);
    });

    channel.on('presence', { event: 'sync' }, () => {
      const state = channel.presenceState<PresenceMeta>();
      const entries = Object.values(state).flat() as PresenceMeta[];
      const others = entries.filter((e) => e.selfId !== selfId);

      if (cancelled) return;

      if (entries.length + (entries.find((e) => e.selfId === selfId) ? 0 : 1) > 2) {
        if (!entries.find((e) => e.selfId === selfId)) {
          setStatus('full');
          channel.untrack();
          return;
        }
      }

      const me = entries.find((e) => e.selfId === selfId);
      const others1 = others[0];
      const allSorted = [...entries].sort((a, b) => a.joinedAt - b.joinedAt);
      if (me && allSorted.length > 0) {
        setRole(allSorted[0].selfId === selfId ? 'host' : 'guest');
      }
      setPeer(others1 ? { id: others1.selfId, name: others1.name, avatar: others1.avatar } : null);
    });

    channel.subscribe(async (subStatus) => {
      if (subStatus !== 'SUBSCRIBED') return;

      const currentState = channel.presenceState<PresenceMeta>();
      const currentCount = Object.values(currentState).flat().length;
      if (currentCount >= 2) {
        setStatus('full');
        return;
      }

      await channel.track({
        selfId,
        name: selfName,
        avatar: selfAvatar,
        joinedAt: Date.now(),
      } satisfies PresenceMeta);
      if (!cancelled) setStatus('connected');
    });

    return () => {
      cancelled = true;
      channel.untrack();
      supabase.removeChannel(channel);
      channelRef.current = null;
    };
  }, [enabled, roomId, selfId, selfName, selfAvatar]);

  const send = (msg: SignalMsg) => {
    const ch = channelRef.current;
    if (!ch) return;
    ch.send({ type: 'broadcast', event: 'signal', payload: msg });
  };

  return { status, role, peer, send };
}
