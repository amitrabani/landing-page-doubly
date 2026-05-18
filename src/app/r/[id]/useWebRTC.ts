'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Role, SignalMsg } from './useSignaling';

const ICE_SERVERS: RTCIceServer[] = [{ urls: 'stun:stun.l.google.com:19302' }];
const CONNECT_TIMEOUT_MS = 15000;

export type MediaPermissions = {
  camAllowed: boolean;
  micAllowed: boolean;
  error: string | null;
};

type Args = {
  role: Role | null;
  peerPresent: boolean;
  selfId: string;
  send: (msg: SignalMsg) => void;
  registerHandler: (handler: (msg: SignalMsg) => void) => void;
};

export function useWebRTC({ role, peerPresent, selfId, send, registerHandler }: Args) {
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [connected, setConnected] = useState(false);
  const [connectError, setConnectError] = useState<string | null>(null);
  const [camOn, setCamOn] = useState(true);
  const [micOn, setMicOn] = useState(false);
  const [media, setMedia] = useState<MediaPermissions>({
    camAllowed: false,
    micAllowed: false,
    error: null,
  });

  const pcRef = useRef<RTCPeerConnection | null>(null);
  const videoSenderRef = useRef<RTCRtpSender | null>(null);
  const audioSenderRef = useRef<RTCRtpSender | null>(null);
  const pendingIceRef = useRef<RTCIceCandidateInit[]>([]);
  const remoteDescSetRef = useRef(false);
  const localStreamRef = useRef<MediaStream | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const requestMedia = useCallback(async () => {
    if (localStreamRef.current) return localStreamRef.current;
    let videoStream: MediaStream | null = null;
    let camAllowed = false;
    let micAllowed = true;

    try {
      videoStream = await navigator.mediaDevices.getUserMedia({ video: true });
      camAllowed = true;
    } catch {
      camAllowed = false;
    }

    try {
      const perm = await navigator.permissions.query({
        name: 'microphone' as PermissionName,
      });
      micAllowed = perm.state !== 'denied';
    } catch {
      micAllowed = true;
    }

    const combined = new MediaStream();
    if (videoStream) videoStream.getVideoTracks().forEach((t) => combined.addTrack(t));

    setMedia({
      camAllowed,
      micAllowed,
      error: !camAllowed && !micAllowed ? 'Camera and microphone unavailable.' : null,
    });
    setCamOn(camAllowed);
    setMicOn(false);
    localStreamRef.current = combined;
    setLocalStream(combined);
    return combined;
  }, []);

  const buildPeerConnection = useCallback(() => {
    if (pcRef.current) return pcRef.current;
    const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });

    pc.onicecandidate = (e) => {
      if (e.candidate) {
        send({ type: 'webrtc-ice', from: selfId, candidate: e.candidate.toJSON() });
      }
    };

    pc.ontrack = (e) => {
      const [stream] = e.streams;
      setRemoteStream(stream ?? null);
    };

    pc.onnegotiationneeded = async () => {
      if (pc.signalingState !== 'stable') return;
      try {
        const offer = await pc.createOffer();
        if (pc.signalingState !== 'stable') return;
        await pc.setLocalDescription(offer);
        send({ type: 'webrtc-offer', from: selfId, sdp: offer });
      } catch (err) {
        console.warn('Renegotiation failed', err);
      }
    };

    pc.onconnectionstatechange = () => {
      if (pc.connectionState === 'connected') {
        setConnected(true);
        setConnectError(null);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
      if (pc.connectionState === 'failed' || pc.connectionState === 'disconnected') {
        setConnected(false);
      }
    };

    pcRef.current = pc;
    return pc;
  }, [selfId, send]);

  const attachLocalTracks = useCallback((pc: RTCPeerConnection) => {
    const stream = localStreamRef.current;
    if (!stream) return;
    const v = stream.getVideoTracks()[0];
    const a = stream.getAudioTracks()[0];
    if (v) {
      if (videoSenderRef.current) {
        videoSenderRef.current.replaceTrack(v);
      } else {
        videoSenderRef.current = pc.addTrack(v, stream);
      }
    }
    if (a) {
      if (audioSenderRef.current) {
        audioSenderRef.current.replaceTrack(a);
      } else {
        audioSenderRef.current = pc.addTrack(a, stream);
      }
    }
  }, []);

  const flushPendingIce = useCallback(async (pc: RTCPeerConnection) => {
    const queued = pendingIceRef.current;
    pendingIceRef.current = [];
    for (const cand of queued) {
      try {
        await pc.addIceCandidate(cand);
      } catch (err) {
        console.warn('Failed to add buffered ICE candidate', err);
      }
    }
  }, []);

  const startTimeout = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!pcRef.current) return;
      if (pcRef.current.connectionState !== 'connected') {
        setConnectError(
          "Can't connect. Your network may block peer-to-peer connections. Try a different network.",
        );
      }
    }, CONNECT_TIMEOUT_MS);
  }, []);

  useEffect(() => {
    const handler = async (msg: SignalMsg) => {
      const pc = buildPeerConnection();

      if (msg.type === 'webrtc-offer') {
        attachLocalTracks(pc);
        await pc.setRemoteDescription(msg.sdp);
        remoteDescSetRef.current = true;
        await flushPendingIce(pc);
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);
        send({ type: 'webrtc-answer', from: selfId, sdp: answer });
        startTimeout();
      } else if (msg.type === 'webrtc-answer') {
        await pc.setRemoteDescription(msg.sdp);
        remoteDescSetRef.current = true;
        await flushPendingIce(pc);
      } else if (msg.type === 'webrtc-ice') {
        if (remoteDescSetRef.current) {
          try {
            await pc.addIceCandidate(msg.candidate);
          } catch (err) {
            console.warn('Failed to add ICE candidate', err);
          }
        } else {
          pendingIceRef.current.push(msg.candidate);
        }
      }
    };
    registerHandler(handler);
  }, [
    registerHandler,
    buildPeerConnection,
    attachLocalTracks,
    flushPendingIce,
    send,
    selfId,
    startTimeout,
  ]);

  useEffect(() => {
    if (role !== 'host' || !peerPresent || !localStreamRef.current) return;
    let cancelled = false;

    (async () => {
      const pc = buildPeerConnection();
      attachLocalTracks(pc);
      const offer = await pc.createOffer({ offerToReceiveAudio: true, offerToReceiveVideo: true });
      if (cancelled) return;
      await pc.setLocalDescription(offer);
      send({ type: 'webrtc-offer', from: selfId, sdp: offer });
      startTimeout();
    })();

    return () => {
      cancelled = true;
    };
  }, [role, peerPresent, buildPeerConnection, attachLocalTracks, send, selfId, startTimeout]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      pcRef.current?.close();
      pcRef.current = null;
      videoSenderRef.current = null;
      audioSenderRef.current = null;
      localStreamRef.current?.getTracks().forEach((t) => t.stop());
      localStreamRef.current = null;
    };
  }, []);

  const toggleCam = useCallback(() => {
    if (!media.camAllowed && camOn === false) return;
    const stream = localStreamRef.current;
    if (!stream) return;

    void (async () => {
      if (camOn) {
        stream.getVideoTracks().forEach((t) => {
          t.stop();
          stream.removeTrack(t);
        });
        if (videoSenderRef.current) {
          try {
            await videoSenderRef.current.replaceTrack(null);
          } catch (err) {
            console.warn('replaceTrack(null) failed', err);
          }
        }
        setCamOn(false);
      } else {
        try {
          const fresh = await navigator.mediaDevices.getUserMedia({ video: true });
          const newTrack = fresh.getVideoTracks()[0];
          if (!newTrack) return;
          stream.addTrack(newTrack);
          if (videoSenderRef.current) {
            await videoSenderRef.current.replaceTrack(newTrack);
          } else if (pcRef.current) {
            videoSenderRef.current = pcRef.current.addTrack(newTrack, stream);
          }
          setMedia((m) => ({ ...m, camAllowed: true }));
          setCamOn(true);
        } catch {
          setMedia((m) => ({ ...m, camAllowed: false }));
          setCamOn(false);
        }
      }
    })();
  }, [camOn, media.camAllowed]);

  const toggleMic = useCallback(() => {
    if (!media.micAllowed && micOn === false) return;
    const stream = localStreamRef.current;
    if (!stream) return;

    void (async () => {
      if (micOn) {
        stream.getAudioTracks().forEach((t) => {
          t.stop();
          stream.removeTrack(t);
        });
        if (audioSenderRef.current) {
          try {
            await audioSenderRef.current.replaceTrack(null);
          } catch (err) {
            console.warn('replaceTrack(null) failed', err);
          }
        }
        setMicOn(false);
      } else {
        try {
          const fresh = await navigator.mediaDevices.getUserMedia({ audio: true });
          const newTrack = fresh.getAudioTracks()[0];
          if (!newTrack) return;
          stream.addTrack(newTrack);
          if (audioSenderRef.current) {
            await audioSenderRef.current.replaceTrack(newTrack);
          } else if (pcRef.current) {
            audioSenderRef.current = pcRef.current.addTrack(newTrack, stream);
          }
          setMedia((m) => ({ ...m, micAllowed: true }));
          setMicOn(true);
        } catch {
          setMedia((m) => ({ ...m, micAllowed: false }));
          setMicOn(false);
        }
      }
    })();
  }, [micOn, media.micAllowed]);

  const retry = useCallback(() => {
    setConnectError(null);
    pcRef.current?.close();
    pcRef.current = null;
    videoSenderRef.current = null;
    audioSenderRef.current = null;
    remoteDescSetRef.current = false;
    pendingIceRef.current = [];
    setRemoteStream(null);
    setConnected(false);
  }, []);

  return {
    requestMedia,
    localStream,
    remoteStream,
    connected,
    connectError,
    media,
    camOn,
    micOn,
    toggleCam,
    toggleMic,
    retry,
  };
}
