'use client';

import { useEffect, useState } from 'react';

import { useT } from '@/i18n/TranslationProvider';

const AVATARS = ['🦊', '🐢', '🦉', '🐝', '🦋', '🐙', '🦔', '🌻', '🍵', '🪴'];
const DURATIONS = [15, 25, 45, 60];

type Props = {
  isFirstArrival: boolean;
  onJoin: (args: { name: string; avatar: string; durationMin: number }) => void;
};

export default function JoinScreen({ isFirstArrival, onJoin }: Props) {
  const t = useT();
  const copy = t.room.join;

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState(AVATARS[0]);
  const [duration, setDuration] = useState(25);

  useEffect(() => {
    const storedName = window.localStorage.getItem('doubly:room:name');
    const storedAvatar = window.localStorage.getItem('doubly:room:avatar');
    if (storedName) setName(storedName);
    if (storedAvatar && AVATARS.includes(storedAvatar)) setAvatar(storedAvatar);
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim().slice(0, 24);
    if (!trimmed) return;
    window.localStorage.setItem('doubly:room:name', trimmed);
    window.localStorage.setItem('doubly:room:avatar', avatar);
    onJoin({ name: trimmed, avatar, durationMin: duration });
  };

  return (
    <div className="mx-auto max-w-md px-6 py-12">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-bold text-charcoal mb-2">
        {isFirstArrival ? copy.titleFirst : copy.titleJoin}
      </h1>
      <p className="text-charcoal-light mb-8">
        {isFirstArrival ? copy.subtitleFirst : copy.subtitleJoin}
      </p>

      <form onSubmit={submit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
            {copy.nameLabel}
          </label>
          <input
            id="name"
            type="text"
            required
            maxLength={24}
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={copy.namePlaceholder}
            className="w-full rounded-2xl border border-warm-dark/40 bg-white px-4 py-3 text-charcoal placeholder-charcoal/40 focus:border-lavender focus:outline-none"
          />
        </div>

        <div>
          <span className="block text-sm font-medium text-charcoal mb-2">{copy.avatarLabel}</span>
          <div className="grid grid-cols-5 gap-2">
            {AVATARS.map((emoji) => (
              <button
                key={emoji}
                type="button"
                onClick={() => setAvatar(emoji)}
                aria-label={copy.avatarChooseAria(emoji)}
                aria-pressed={avatar === emoji}
                className={`aspect-square rounded-2xl text-2xl transition-all ${
                  avatar === emoji
                    ? 'bg-lavender/30 border-2 border-lavender'
                    : 'bg-warm border border-warm-dark/30 hover:bg-warm-dark/20'
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
        </div>

        {isFirstArrival && (
          <div>
            <span className="block text-sm font-medium text-charcoal mb-2">
              {copy.durationLabel}
            </span>
            <div className="grid grid-cols-4 gap-2">
              {DURATIONS.map((mins) => (
                <button
                  key={mins}
                  type="button"
                  onClick={() => setDuration(mins)}
                  aria-pressed={duration === mins}
                  className={`rounded-2xl px-3 py-3 text-sm font-medium transition-all ${
                    duration === mins
                      ? 'bg-charcoal text-cream'
                      : 'bg-warm border border-warm-dark/30 text-charcoal hover:bg-warm-dark/20'
                  }`}
                >
                  {copy.minutes(mins)}
                </button>
              ))}
            </div>
          </div>
        )}

        <p className="text-xs text-charcoal/60 leading-5">{copy.permissionNote}</p>

        <button
          type="submit"
          disabled={!name.trim()}
          className="w-full rounded-full bg-charcoal text-cream px-5 py-3 font-semibold hover:bg-charcoal-light disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
        >
          {isFirstArrival ? copy.createCta : copy.joinCta}
        </button>
      </form>
    </div>
  );
}
