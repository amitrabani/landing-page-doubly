'use client';

import { useCallback, useRef, useState } from 'react';
import { useLocale, useT } from '@/i18n/TranslationProvider';

const MAX_LENGTH = 4000;
const MIN_LENGTH = 3;

export default function BrainDumpTool() {
  const t = useT().toolWidgets.brainDump;
  const locale = useLocale();
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState<string[] | null>(null);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const extract = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (trimmed.length < MIN_LENGTH || trimmed.length > MAX_LENGTH) return;

      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      setTasks(null);
      setChecked(new Set());
      setError(null);
      setLoading(true);

      try {
        const res = await fetch('/api/brain-dump', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: trimmed, locale }),
          signal: controller.signal,
        });

        if (controller.signal.aborted) return;

        if (res.status === 429) {
          setError(t.errorRateLimited);
          return;
        }
        if (!res.ok) {
          setError(t.errorGeneric);
          return;
        }
        const data = (await res.json()) as { tasks: string[] };
        if (controller.signal.aborted) return;
        setTasks(Array.isArray(data.tasks) ? data.tasks : []);
      } catch (err) {
        if (controller.signal.aborted) return;
        if (err instanceof DOMException && err.name === 'AbortError') return;
        setError(t.errorGeneric);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    },
    [locale, t],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    extract(input);
  };

  const toggleCheck = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const handleClear = () => {
    abortRef.current?.abort();
    setInput('');
    setTasks(null);
    setChecked(new Set());
    setError(null);
    setLoading(false);
  };

  const remaining = MAX_LENGTH - input.length;

  return (
    <div className="rounded-3xl bg-white border border-charcoal/8 shadow-sm shadow-charcoal/5 p-5 sm:p-7">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="brain-dump-input" className="text-sm font-medium text-charcoal">
          {t.label}
        </label>
        <textarea
          id="brain-dump-input"
          value={input}
          onChange={(e) => setInput(e.target.value.slice(0, MAX_LENGTH))}
          placeholder={t.placeholder}
          rows={8}
          maxLength={MAX_LENGTH}
          className="rounded-2xl px-5 py-4 text-base bg-cream border border-charcoal/10 text-charcoal placeholder:text-muted-light focus:outline-none focus:border-lavender/50 focus:ring-2 focus:ring-lavender/15 transition-all resize-y min-h-[180px]"
        />
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-xs text-muted-light">
            {t.privacy} <span aria-live="polite">{t.charactersLeft(remaining)}</span>
          </div>
          <div className="flex gap-2">
            {(input || tasks) && (
              <button
                type="button"
                onClick={handleClear}
                className="rounded-2xl px-5 py-3 text-base font-medium bg-warm/60 text-charcoal border border-warm-dark/40 hover:bg-warm transition-all"
              >
                {t.clear}
              </button>
            )}
            <button
              type="submit"
              disabled={loading || input.trim().length < MIN_LENGTH}
              className="rounded-2xl px-6 py-3 text-base font-semibold bg-charcoal text-cream hover:bg-charcoal-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? t.submitting : t.submit}
            </button>
          </div>
        </div>
      </form>

      <div className="mt-6 min-h-[60px]" aria-live="polite">
        {loading && (
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="inline-block w-2 h-2 rounded-full bg-lavender animate-pulse" />
            {t.loading}
          </div>
        )}

        {error && !loading && (
          <div className="rounded-2xl bg-coral-light/10 border border-coral-light/40 px-4 py-3 text-sm text-coral-dark">
            {error}{' '}
            <button
              type="button"
              onClick={() => extract(input)}
              className="ms-1 underline font-medium hover:no-underline"
            >
              {t.tryAgain}
            </button>
          </div>
        )}

        {!loading && tasks && tasks.length === 0 && (
          <div className="rounded-2xl bg-cream border border-charcoal/8 p-5 text-sm text-charcoal-light leading-6">
            {t.empty}
          </div>
        )}

        {!loading && tasks && tasks.length > 0 && (
          <div className="rounded-2xl bg-cream border border-charcoal/8 p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-[family-name:var(--font-display)] text-base font-semibold text-charcoal">
                {t.resultsTitle}
              </h3>
              <span className="text-xs font-medium text-muted-light">
                {t.doneCount(checked.size, tasks.length)}
              </span>
            </div>
            <ul className="space-y-2">
              {tasks.map((task, i) => (
                <li key={`${i}-${task}`}>
                  <button
                    type="button"
                    onClick={() => toggleCheck(i)}
                    className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-start transition-all ${
                      checked.has(i)
                        ? 'bg-sage/15 border border-sage/20'
                        : 'bg-white border border-charcoal/8 hover:border-lavender/30'
                    }`}
                  >
                    <span
                      className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        checked.has(i) ? 'bg-sage border-sage' : 'border-charcoal/15'
                      }`}
                      aria-hidden="true"
                    >
                      {checked.has(i) && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path
                            d="M2.5 6l2.5 2.5 4.5-5"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span
                      className={`text-sm font-medium flex-1 ${
                        checked.has(i) ? 'text-sage-dark line-through' : 'text-charcoal'
                      }`}
                    >
                      {task}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted-light">{t.footer}</p>
          </div>
        )}
      </div>
    </div>
  );
}
