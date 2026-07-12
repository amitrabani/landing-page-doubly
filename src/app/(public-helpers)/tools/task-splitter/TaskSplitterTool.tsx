'use client';

import { useCallback, useRef, useState } from 'react';

type Subtask = { text: string; duration: string | null };
type TaskResult = { title: string; subtasks: Subtask[]; urgency: 'low' | 'medium' | 'high' | null };

const MAX_LENGTH = 200;

const PRESETS = [
  { label: 'Clean the kitchen', icon: '🍳' },
  { label: 'Do laundry', icon: '🧺' },
  { label: 'Reply to inbox', icon: '✉️' },
  { label: 'Plan a weekend trip', icon: '🧳' },
  { label: 'File my taxes', icon: '🧾' },
  { label: 'Clean the bathroom', icon: '🚿' },
] as const;

function parseMinutes(d: string | null): number {
  if (!d) return 0;
  const m = d.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function TaskSplitterTool() {
  const [input, setInput] = useState('');
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [result, setResult] = useState<TaskResult | null>(null);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const splitTask = useCallback(async (task: string) => {
    const trimmed = task.trim();
    if (!trimmed || trimmed.length < 2 || trimmed.length > MAX_LENGTH) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setActiveTask(trimmed);
    setResult(null);
    setChecked(new Set());
    setError(null);
    setLoading(true);

    try {
      const res = await fetch('/api/split-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ task: trimmed }),
        signal: controller.signal,
      });

      if (controller.signal.aborted) return;

      if (res.status === 429) {
        setError('You are going fast. Wait a moment and try again.');
        return;
      }
      if (!res.ok) {
        setError('Could not break that down right now. Try again in a few seconds.');
        return;
      }
      const data = (await res.json()) as TaskResult;
      if (controller.signal.aborted) return;
      setResult(data);
    } catch (err) {
      if (controller.signal.aborted) return;
      if (err instanceof DOMException && err.name === 'AbortError') return;
      setError('Could not break that down right now. Try again in a few seconds.');
    } finally {
      if (!controller.signal.aborted) setLoading(false);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    splitTask(input);
  };

  const toggleCheck = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const subtasks = result?.subtasks || [];
  const totalMinutes = subtasks.reduce((s, st) => s + parseMinutes(st.duration), 0);
  const allDone = subtasks.length > 0 && checked.size === subtasks.length;
  const remaining = MAX_LENGTH - input.length;

  return (
    <div className="rounded-3xl bg-white border border-charcoal/8 shadow-sm shadow-charcoal/5 p-5 sm:p-7">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="task-splitter-input" className="text-sm font-medium text-charcoal">
          What is the task you cannot start?
        </label>
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            id="task-splitter-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value.slice(0, MAX_LENGTH))}
            placeholder="e.g. File my expense report"
            autoComplete="off"
            maxLength={MAX_LENGTH}
            className="flex-1 rounded-2xl px-5 py-3 text-base bg-cream border border-charcoal/10 text-charcoal placeholder:text-muted-light focus:outline-none focus:border-lavender/50 focus:ring-2 focus:ring-lavender/15 transition-all"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="rounded-2xl px-6 py-3 text-base font-semibold bg-charcoal text-cream hover:bg-charcoal-light transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Breaking it down…' : 'Break it down'}
          </button>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-light">
          <span>Private. Nothing is saved on our server.</span>
          <span aria-live="polite">{remaining} characters left</span>
        </div>
      </form>

      <div className="mt-5">
        <div className="text-xs font-medium text-muted mb-2">Or try one of these:</div>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              onClick={() => {
                setInput(p.label);
                splitTask(p.label);
              }}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeTask === p.label
                  ? 'bg-lavender text-white'
                  : 'bg-warm/60 text-charcoal-light border border-warm-dark/40 hover:border-lavender/40'
              }`}
            >
              <span className="mr-1.5" aria-hidden="true">{p.icon}</span>
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 min-h-[60px]" aria-live="polite">
        {loading && (
          <div className="flex items-center gap-3 text-sm text-muted">
            <span className="inline-block w-2 h-2 rounded-full bg-lavender animate-pulse" />
            Breaking it into steps…
          </div>
        )}

        {error && !loading && (
          <div className="rounded-2xl bg-coral-light/10 border border-coral-light/40 px-4 py-3 text-sm text-coral-dark">
            {error}{' '}
            {activeTask && (
              <button
                type="button"
                onClick={() => splitTask(activeTask)}
                className="ml-1 underline font-medium hover:no-underline"
              >
                Try again
              </button>
            )}
          </div>
        )}

        {!loading && result && (
          <div className="rounded-2xl bg-cream border border-charcoal/8 p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-xs font-medium text-lavender-dark mb-0.5">Task</div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal">
                  {result.title}
                </h3>
              </div>
              {result.urgency && (
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full ${
                    result.urgency === 'high'
                      ? 'bg-coral-light/20 text-coral-dark'
                      : result.urgency === 'medium'
                        ? 'bg-lavender-light/30 text-lavender-dark'
                        : 'bg-sage/15 text-sage-dark'
                  }`}
                >
                  {result.urgency.charAt(0).toUpperCase() + result.urgency.slice(1)} urgency
                </span>
              )}
            </div>

            {subtasks.length > 0 ? (
              <>
                <div className="flex items-center justify-between text-xs font-medium text-muted-light mb-2">
                  <span>{checked.size}/{subtasks.length} steps done</span>
                  {totalMinutes > 0 && <span>~{totalMinutes} min total</span>}
                </div>
                <ul className="space-y-2">
                  {subtasks.map((st, i) => (
                    <li key={`${i}-${st.text}`}>
                      <button
                        type="button"
                        onClick={() => toggleCheck(i)}
                        className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
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
                          {st.text}
                        </span>
                        {st.duration && (
                          <span className="text-xs text-muted-light flex-shrink-0">
                            {st.duration}
                          </span>
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
                {allDone && (
                  <div className="mt-5 text-center text-sm text-sage-dark font-medium">
                    Done. That wasn&rsquo;t as scary as it looked, right?
                  </div>
                )}
              </>
            ) : (
              <p className="text-sm text-muted">
                Couldn&rsquo;t find clear sub-steps for that one. Try rephrasing as an action,
                like &ldquo;Write the project plan&rdquo; or &ldquo;Clean the garage.&rdquo;
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
