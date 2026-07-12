'use client';

import { useCallback, useEffect, useState } from 'react';

export const REACTIONS = ['👋', '👍', '❤️', '🎉'] as const;
export type ReactionEmoji = (typeof REACTIONS)[number];

type Burst = { id: string; emoji: string; left: number };

type BarProps = {
  onSend: (emoji: ReactionEmoji) => void;
  disabled: boolean;
};

export function ReactionsBar({ onSend, disabled }: BarProps) {
  return (
    <div
      role="group"
      aria-label="Send a reaction"
      className="flex items-center gap-1.5 rounded-full border border-warm-dark/40 bg-white px-2 py-1.5 shadow-[0_4px_16px_rgba(45,43,50,0.08)]"
    >
      {REACTIONS.map((emoji) => (
        <button
          key={emoji}
          type="button"
          disabled={disabled}
          onClick={() => onSend(emoji)}
          aria-label={`Send ${emoji} reaction`}
          className="flex h-9 w-9 items-center justify-center rounded-full text-xl transition-transform hover:scale-110 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {emoji}
        </button>
      ))}
    </div>
  );
}

type LayerProps = {
  bursts: Burst[];
};

export function ReactionsLayer({ bursts }: LayerProps) {
  return (
    <>
      <style>{`
        @keyframes doubly-reaction-rise {
          0% { transform: translate(-50%, 0) scale(0.6); opacity: 0; }
          15% { transform: translate(-50%, -10%) scale(1.05); opacity: 1; }
          80% { transform: translate(-50%, -180%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -240%) scale(0.9); opacity: 0; }
        }
      `}</style>
      <div className="pointer-events-none fixed inset-x-0 bottom-24 z-30 mx-auto h-40 max-w-5xl">
        {bursts.map((b) => (
          <span
            key={b.id}
            className="absolute bottom-0 text-5xl select-none"
            style={{
              left: `${b.left}%`,
              animation: 'doubly-reaction-rise 2.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
              filter: 'drop-shadow(0 6px 14px rgba(45,43,50,0.18))',
            }}
            aria-hidden="true"
          >
            {b.emoji}
          </span>
        ))}
      </div>
    </>
  );
}

export function useReactionBursts() {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    if (bursts.length === 0) return;
    const oldest = bursts[0];
    const t = setTimeout(() => {
      setBursts((prev) => prev.filter((b) => b.id !== oldest.id));
    }, 2300);
    return () => clearTimeout(t);
  }, [bursts]);

  const fire = useCallback((emoji: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const left = 20 + Math.random() * 60;
    setBursts((prev) => [...prev, { id, emoji, left }]);
  }, []);

  return { bursts, fire };
}
