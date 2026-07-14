'use client';

import { useCallback, useEffect, useState } from 'react';
import { useT } from '@/i18n/TranslationProvider';

const STORAGE_KEY = 'eisenhower-matrix-v1';

type Quadrant = 'pool' | 'fire' | 'boring' | 'noisy' | 'drop';

type Task = {
  id: string;
  text: string;
  quadrant: Quadrant;
};

// `key` is the persisted quadrant id (it is written to localStorage and used to
// bucket tasks), so it stays English. Only the copy is localized, looked up by key.
type QuadrantConfig = {
  key: Exclude<Quadrant, 'pool'>;
  accent: string;
  border: string;
  chip: string;
};

const QUADRANTS: QuadrantConfig[] = [
  {
    key: 'fire',
    accent: 'bg-coral-light/15',
    border: 'border-coral/40',
    chip: 'bg-coral text-white',
  },
  {
    key: 'boring',
    accent: 'bg-sage/15',
    border: 'border-sage/40',
    chip: 'bg-sage-dark text-white',
  },
  {
    key: 'noisy',
    accent: 'bg-sky-light/30',
    border: 'border-sky/40',
    chip: 'bg-sky text-charcoal',
  },
  {
    key: 'drop',
    accent: 'bg-warm/60',
    border: 'border-warm-dark/40',
    chip: 'bg-charcoal text-cream',
  },
];

function makeId(): string {
  return `t_${Math.random().toString(36).slice(2, 9)}_${Date.now().toString(36)}`;
}

function loadTasks(): Task[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (t): t is Task =>
        typeof t === 'object' &&
        t !== null &&
        typeof t.id === 'string' &&
        typeof t.text === 'string' &&
        typeof t.quadrant === 'string' &&
        ['pool', 'fire', 'boring', 'noisy', 'drop'].includes(t.quadrant),
    );
  } catch {
    return [];
  }
}

export default function EisenhowerMatrixTool() {
  const copy = useT().toolWidgets.eisenhower;
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setTasks(loadTasks());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      // ignore
    }
  }, [tasks, hydrated]);

  const addTasksFromInput = useCallback(() => {
    const lines = input
      .split(/[\n;]+/)
      .map((l) => l.replace(/^[\s\-*•\d.)]+/, '').trim())
      .filter((l) => l.length > 0 && l.length < 200);
    if (lines.length === 0) return;
    setTasks((prev) => [
      ...prev,
      ...lines.map((text) => ({ id: makeId(), text, quadrant: 'pool' as Quadrant })),
    ]);
    setInput('');
  }, [input]);

  const handleInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      addTasksFromInput();
    }
  };

  const moveTask = (id: string, quadrant: Quadrant) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, quadrant } : t)));
    setSelectedId(null);
  };

  const deleteTask = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
    if (selectedId === id) setSelectedId(null);
  };

  const selectTask = (id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    e.dataTransfer.setData('text/plain', id);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, quadrant: Quadrant) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    if (id) moveTask(id, quadrant);
  };

  const handleClearAll = () => {
    setTasks([]);
    setSelectedId(null);
  };

  const pool = tasks.filter((t) => t.quadrant === 'pool');
  const tasksByQuadrant = (q: Exclude<Quadrant, 'pool'>) =>
    tasks.filter((t) => t.quadrant === q);

  const counts = {
    fire: tasksByQuadrant('fire').length,
    boring: tasksByQuadrant('boring').length,
    noisy: tasksByQuadrant('noisy').length,
    drop: tasksByQuadrant('drop').length,
  };

  return (
    <div className="rounded-3xl bg-white border border-charcoal/8 shadow-sm shadow-charcoal/5 p-5 sm:p-7">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="matrix-input" className="sr-only">
          {copy.inputLabel}
        </label>
        <input
          id="matrix-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKey}
          placeholder={copy.inputPlaceholder}
          maxLength={400}
          className="flex-1 rounded-2xl px-5 py-3 text-base bg-cream border border-charcoal/10 text-charcoal placeholder:text-muted-light focus:outline-none focus:border-lavender/50 focus:ring-2 focus:ring-lavender/15 transition-all"
        />
        <button
          type="button"
          onClick={addTasksFromInput}
          disabled={!input.trim()}
          className="rounded-2xl px-6 py-3 text-base font-semibold bg-charcoal text-cream hover:bg-charcoal-light transition-all disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {copy.addButton}
        </button>
      </div>

      {tasks.length > 0 && (
        <div className="mt-2 flex items-center justify-between text-xs text-muted-light">
          <span>{copy.totals(tasks.length, pool.length)}</span>
          <button
            type="button"
            onClick={handleClearAll}
            className="underline hover:no-underline"
          >
            {copy.clearAll}
          </button>
        </div>
      )}

      {pool.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xs uppercase tracking-wider text-muted font-semibold mb-2">
            {copy.unsortedHeading(pool.length)}
          </h3>
          <ul className="flex flex-wrap gap-2" aria-label={copy.unsortedListLabel}>
            {pool.map((task) => (
              <li
                key={task.id}
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
                className={`group flex items-center gap-2 rounded-xl px-3 py-2 text-sm border cursor-grab active:cursor-grabbing transition-all ${
                  selectedId === task.id
                    ? 'bg-lavender/15 border-lavender'
                    : 'bg-cream border-charcoal/10 hover:border-lavender/40'
                }`}
              >
                <button
                  type="button"
                  onClick={() => selectTask(task.id)}
                  className="text-charcoal font-medium text-start"
                  aria-pressed={selectedId === task.id}
                >
                  {task.text}
                </button>
                <button
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  aria-label={copy.removeTask(task.text)}
                  className="text-muted-light hover:text-coral-dark transition-colors text-base leading-none"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedId && (
        <div className="mt-4 rounded-2xl bg-lavender/10 border border-lavender/40 p-4 text-sm text-charcoal">
          <p className="font-medium mb-2">{copy.placeHint}</p>
          <p className="text-xs text-muted">{copy.placeHintDesktop}</p>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {QUADRANTS.map((q) => {
          const items = tasksByQuadrant(q.key);
          const qCopy = copy.quadrants[q.key];
          return (
            <section
              key={q.key}
              aria-label={copy.quadrantRegionLabel(qCopy.label)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, q.key)}
              className={`rounded-2xl border-2 ${q.border} ${q.accent} p-4 min-h-[180px] transition-all ${
                selectedId ? 'ring-2 ring-lavender/30 ring-offset-2 ring-offset-cream' : ''
              }`}
            >
              <header className="flex items-start justify-between gap-2 mb-3">
                <div className="min-w-0">
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-charcoal leading-snug">
                    {qCopy.label}
                  </h3>
                  <p className="text-xs text-charcoal-light leading-5 mt-0.5">{qCopy.sub}</p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-light mt-1">
                    {qCopy.textbook}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full ${q.chip} text-xs font-semibold px-2 py-0.5`}
                  aria-label={copy.quadrantCountLabel(counts[q.key], qCopy.label)}
                >
                  {counts[q.key]}
                </span>
              </header>

              {selectedId && (
                <button
                  type="button"
                  onClick={() => moveTask(selectedId, q.key)}
                  className="w-full rounded-xl bg-white border border-dashed border-lavender/60 text-sm font-medium text-lavender-dark py-2 mb-3 hover:bg-lavender/10 transition-all"
                >
                  {copy.dropHere}
                </button>
              )}

              <ul className="space-y-2">
                {items.map((task) => (
                  <li
                    key={task.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, task.id)}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm bg-white border transition-all cursor-grab active:cursor-grabbing ${
                      selectedId === task.id
                        ? 'border-lavender'
                        : 'border-charcoal/8 hover:border-lavender/40'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => selectTask(task.id)}
                      className="flex-1 text-charcoal font-medium text-start min-w-0 truncate"
                      aria-pressed={selectedId === task.id}
                    >
                      {task.text}
                    </button>
                    <button
                      type="button"
                      onClick={() => moveTask(task.id, 'pool')}
                      aria-label={copy.moveBackToUnsorted(task.text)}
                      className="text-xs text-muted-light hover:text-charcoal transition-colors"
                      title={copy.sendBackToUnsorted}
                    >
                      ↩
                    </button>
                    <button
                      type="button"
                      onClick={() => deleteTask(task.id)}
                      aria-label={copy.removeTask(task.text)}
                      className="text-muted-light hover:text-coral-dark transition-colors text-base leading-none"
                    >
                      ×
                    </button>
                  </li>
                ))}
                {items.length === 0 && !selectedId && (
                  <li className="text-xs text-muted-light italic">{copy.empty}</li>
                )}
              </ul>
            </section>
          );
        })}
      </div>

      {tasks.length === 0 && (
        <p className="mt-6 text-sm text-muted-light text-center">{copy.emptyState}</p>
      )}

      {counts.boring > 0 && pool.length === 0 && tasks.length >= 3 && (
        <div className="mt-6 rounded-2xl bg-sage/10 border border-sage/30 p-4 text-sm text-charcoal leading-6">
          <strong className="text-sage-dark">{copy.hintLabel}</strong> {copy.hintBody}
        </div>
      )}
    </div>
  );
}
