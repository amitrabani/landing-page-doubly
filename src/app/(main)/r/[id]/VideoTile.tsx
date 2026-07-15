'use client';

import { useEffect, useRef } from 'react';

import { useT } from '@/i18n/TranslationProvider';

type Props = {
  stream: MediaStream | null;
  name: string;
  avatar: string;
  muted: boolean;
  micOn: boolean;
  camOn: boolean;
  isSelf: boolean;
  placeholder?: string;
};

export default function VideoTile({
  stream,
  name,
  avatar,
  muted,
  micOn,
  camOn,
  isSelf,
  placeholder,
}: Props) {
  const t = useT();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasVideo = Boolean(stream && camOn && stream.getVideoTracks().some((t) => t.enabled));

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (stream && el.srcObject !== stream) {
      el.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-charcoal/90 shadow-[0_8px_24px_rgba(45,43,50,0.12)]">
      {hasVideo ? (
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted={muted}
          className={`h-full w-full object-cover ${isSelf ? 'scale-x-[-1]' : ''}`}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-warm to-warm-dark">
          <span className="text-6xl" aria-hidden="true">
            {avatar || (placeholder ? '' : '👤')}
          </span>
          {placeholder ? (
            <span className="text-base text-charcoal/70">{placeholder}</span>
          ) : (
            <span className="text-base font-medium text-charcoal">{name}</span>
          )}
        </div>
      )}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-cream">
        <span className="text-sm font-medium">{name}</span>
        <div className="flex items-center gap-1.5">
          {!micOn && (
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-coral/90"
              aria-label={t.room.tiles.micMuted}
              title={t.room.tiles.micMuted}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zM14.98 11.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z" />
              </svg>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
