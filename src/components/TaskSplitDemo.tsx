'use client';

import { useState, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Subtask {
  text: string;
  duration: string | null;
}

interface TaskResult {
  title: string;
  subtasks: Subtask[];
  urgency: string | null;
}

const presets = [
  { label: 'Clean the kitchen', icon: '🍳' },
  { label: 'Do laundry', icon: '🧺' },
  { label: 'Cook dinner', icon: '🍲' },
  { label: 'Clean the bathroom', icon: '🚿' },
  { label: 'Organize the bedroom', icon: '🛏️' },
  { label: 'Grocery shopping', icon: '🛒' },
];

// Hardcoded results for presets (instant, reliable)
const presetResults: Record<string, TaskResult> = {
  'Clean the kitchen': {
    title: '🍳 Clean the kitchen',
    subtasks: [
      { text: 'Clear countertops and put items away', duration: '3 minutes' },
      { text: 'Load dirty dishes into dishwasher', duration: '5 minutes' },
      { text: 'Wipe down countertops and stovetop', duration: '4 minutes' },
      { text: 'Scrub the sink', duration: '2 minutes' },
      { text: 'Sweep the floor', duration: '3 minutes' },
      { text: 'Take out the trash', duration: '2 minutes' },
    ],
    urgency: 'medium',
  },
  'Do laundry': {
    title: '🧺 Do the laundry',
    subtasks: [
      { text: 'Gather dirty clothes from around the house', duration: '5 minutes' },
      { text: 'Sort into whites, colors, and delicates', duration: '3 minutes' },
      { text: 'Load first batch into washing machine', duration: '2 minutes' },
      { text: 'Hang or fold dry clothes from last load', duration: '10 minutes' },
      { text: 'Put folded clothes away in drawers/closet', duration: '5 minutes' },
    ],
    urgency: null,
  },
  'Cook dinner': {
    title: '🍲 Cook dinner',
    subtasks: [
      { text: 'Decide what to make and check ingredients', duration: '3 minutes' },
      { text: 'Wash and prep vegetables', duration: '8 minutes' },
      { text: 'Start cooking main dish', duration: '15 minutes' },
      { text: 'Prepare side dish or salad', duration: '7 minutes' },
      { text: 'Set the table', duration: '2 minutes' },
      { text: 'Plate and serve', duration: '2 minutes' },
    ],
    urgency: 'high',
  },
  'Clean the bathroom': {
    title: '🚿 Clean the bathroom',
    subtasks: [
      { text: 'Spray cleaner on shower, sink, and toilet', duration: '2 minutes' },
      { text: 'Scrub the toilet bowl and wipe the seat', duration: '3 minutes' },
      { text: 'Clean the sink and faucet', duration: '2 minutes' },
      { text: 'Wipe down the mirror', duration: '1 minute' },
      { text: 'Scrub the shower/tub', duration: '5 minutes' },
      { text: 'Mop or wipe the floor', duration: '3 minutes' },
      { text: 'Replace towels and restock toilet paper', duration: '2 minutes' },
    ],
    urgency: 'medium',
  },
  'Organize the bedroom': {
    title: '🛏️ Organize the bedroom',
    subtasks: [
      { text: 'Make the bed and straighten pillows', duration: '3 minutes' },
      { text: 'Pick up clothes from floor and chairs', duration: '4 minutes' },
      { text: 'Put dirty clothes in hamper, clean ones away', duration: '5 minutes' },
      { text: 'Clear and organize nightstand', duration: '3 minutes' },
      { text: 'Dust surfaces', duration: '3 minutes' },
      { text: 'Vacuum or sweep the floor', duration: '4 minutes' },
    ],
    urgency: 'low',
  },
  'Grocery shopping': {
    title: '🛒 Grocery shopping',
    subtasks: [
      { text: 'Check fridge and pantry for what you need', duration: '5 minutes' },
      { text: 'Write a list grouped by aisle', duration: '5 minutes' },
      { text: 'Grab reusable bags', duration: '1 minute' },
      { text: 'Shop and check off items', duration: '30 minutes' },
      { text: 'Unpack and put groceries away', duration: '10 minutes' },
    ],
    urgency: null,
  },
};

// Call AI for custom (non-preset) tasks
async function splitTaskAI(task: string): Promise<TaskResult> {
  const res = await fetch('/api/split-task', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task }),
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
}

function parseDuration(d: string | null): number {
  if (!d) return 0;
  const match = d.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

export default function TaskSplitDemo() {
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [taskResult, setTaskResult] = useState<TaskResult | null>(null);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [customInput, setCustomInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const handleSelect = useCallback(async (label: string) => {
    if (activeTask === label) return;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setChecked(new Set());
    setActiveTask(label);
    setIsTyping(true);
    setTaskResult(null);
    setError(false);

    // Use preset if available, otherwise call AI
    const preset = presetResults[label];
    if (preset) {
      // Small delay to feel intentional
      setTimeout(() => {
        if (controller.signal.aborted) return;
        setTaskResult(preset);
        setIsTyping(false);
      }, 600);
    } else {
      try {
        const result = await splitTaskAI(label);
        if (controller.signal.aborted) return;
        setTaskResult(result);
      } catch {
        if (controller.signal.aborted) return;
        setError(true);
      } finally {
        if (!controller.signal.aborted) setIsTyping(false);
      }
    }
  }, [activeTask]);

  const handleCustomSubmit = useCallback(() => {
    const trimmed = customInput.trim();
    if (!trimmed) return;
    handleSelect(trimmed);
    setCustomInput('');
  }, [customInput, handleSelect]);

  const toggleCheck = (idx: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const subtasks = taskResult?.subtasks || [];
  const allDone = subtasks.length > 0 && checked.size === subtasks.length;

  return (
    <section className="py-24 sm:py-32 px-6 bg-warm">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            Type a task. Watch it split.
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            Big tasks feel impossible. Doubly breaks them into small, doable steps so you can just start.
          </p>
        </motion.div>

        {/* Preset chips */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => handleSelect(p.label)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeTask === p.label
                  ? 'bg-lavender text-white shadow-md shadow-lavender/20 scale-[1.03]'
                  : 'bg-white/80 text-charcoal-light border border-charcoal/8 hover:border-lavender/30 hover:bg-lavender-light/10'
              }`}
            >
              <span className="mr-1.5">{p.icon}</span>
              {p.label}
            </button>
          ))}
        </motion.div>

        {/* Custom input */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit()}
              placeholder="Or type your own task..."
              className="flex-1 rounded-full px-5 py-2.5 text-sm bg-white/80 border border-charcoal/8 text-charcoal placeholder:text-muted-light focus:outline-none focus:border-lavender/40 focus:ring-2 focus:ring-lavender/10 transition-all"
            />
            <button
              onClick={handleCustomSubmit}
              className="rounded-full px-5 py-2.5 text-sm font-medium bg-charcoal text-cream hover:bg-charcoal-light transition-all hover:scale-[1.02]"
            >
              Split it
            </button>
          </div>
        </motion.div>

        {/* Result card */}
        <AnimatePresence mode="wait">
          {(isTyping || taskResult) && (
            <motion.div
              key={activeTask}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-8"
            >
              {/* Task header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-lavender-light/30 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M8 3v10" stroke="#9585B8" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-lavender-dark font-medium">Task</div>
                    <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal">
                      {taskResult?.title || activeTask}
                    </div>
                  </div>
                </div>
                {taskResult?.urgency && (
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                    taskResult.urgency === 'high'
                      ? 'bg-coral-light/20 text-coral-dark'
                      : taskResult.urgency === 'medium'
                        ? 'bg-lavender-light/30 text-lavender-dark'
                        : 'bg-sage/15 text-sage-dark'
                  }`}>
                    {taskResult.urgency} urgency
                  </span>
                )}
              </div>

              {/* AI thinking animation */}
              {isTyping && (
                <div className="flex items-center gap-3 text-muted text-sm">
                  <div className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-lavender"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                  AI is breaking it down...
                </div>
              )}

              {/* Error state */}
              {error && !isTyping && (
                <div className="text-center py-4">
                  <p className="text-muted text-sm mb-3">Could not reach AI right now. Try a preset above or try again.</p>
                  <button
                    onClick={() => {
                      const task = activeTask;
                      setActiveTask(null);
                      if (task) setTimeout(() => handleSelect(task), 0);
                    }}
                    className="text-sm font-medium text-lavender-dark hover:underline"
                  >
                    Try again
                  </button>
                </div>
              )}

              {/* Subtask list */}
              {!isTyping && subtasks.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-medium text-muted-light">
                      {checked.size}/{subtasks.length} steps done
                    </div>
                    <div className="text-xs text-muted-light">
                      ~{subtasks.reduce((sum, st) => sum + parseDuration(st.duration), 0)} min total
                    </div>
                  </div>
                  {subtasks.map((st, idx) => (
                    <motion.button
                      key={st.text}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      onClick={() => toggleCheck(idx)}
                      className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                        checked.has(idx)
                          ? 'bg-sage/15 border border-sage/20'
                          : 'bg-cream border border-charcoal/5 hover:border-lavender/20'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          checked.has(idx)
                            ? 'bg-sage border-sage'
                            : 'border-charcoal/15'
                        }`}
                      >
                        <AnimatePresence>
                          {checked.has(idx) && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                            >
                              <path
                                d="M2.5 6l2.5 2.5 4.5-5"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </motion.svg>
                          )}
                        </AnimatePresence>
                      </div>
                      <span
                        className={`text-sm font-medium flex-1 transition-all ${
                          checked.has(idx) ? 'text-sage-dark line-through' : 'text-charcoal'
                        }`}
                      >
                        {st.text}
                      </span>
                      {st.duration && (
                        <span className={`text-xs flex-shrink-0 ${
                          checked.has(idx) ? 'text-sage-dark/50' : 'text-muted-light'
                        }`}>
                          {st.duration}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Completed state with CTA */}
              <AnimatePresence>
                {allDone && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mt-8 text-center"
                  >
                    <div className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-5 py-2.5 text-sm font-medium text-sage-dark mb-4">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M4 8l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      All done. That wasn&apos;t so hard, right?
                    </div>
                    <p className="text-muted text-sm mb-5 max-w-sm mx-auto">
                      Doubly does this for every task you throw at it. No more staring at a giant to-do list.
                    </p>
                    <a
                      href="https://app.usedoubly.com"
                      className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-7 py-3 text-sm font-medium hover:bg-charcoal-light transition-all hover:scale-[1.02] shadow-lg shadow-charcoal/10"
                    >
                      Use Doubly
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
