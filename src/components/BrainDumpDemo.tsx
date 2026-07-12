'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { EASE, SPRING, SPRING_SNAPPY, fadeRise } from '@/lib/motion';
import WordReveal from '@/components/motion/WordReveal';
import Parallax from '@/components/motion/Parallax';
import TryInDoublyCTA from '@/components/TryInDoublyCTA';
import t from '@/translations/en';

const DUMP_TEXT = t.brainDumpDemo.dumpText;
const tasks = t.brainDumpDemo.tasks;

// Lavender (#B8A9D4) glow keyframes, one-shot. Constant identity so framer doesn't replay.
const PHRASE_PULSE = [
  '0 0 0 0 rgba(184, 169, 212, 0)',
  '0 0 0 6px rgba(184, 169, 212, 0.35)',
  '0 0 0 0 rgba(184, 169, 212, 0)',
];

const ROW_FLASH = [
  '0 0 0 0 rgba(184, 169, 212, 0)',
  '0 0 0 5px rgba(184, 169, 212, 0.28)',
  '0 0 0 0 rgba(184, 169, 212, 0)',
];

// Breathing border tint for the dump card while the typewriter runs.
// Base matches the card's border-charcoal/5 so the loop settles invisibly.
const BORDER_BASE = 'rgba(45, 43, 50, 0.05)';
const BORDER_BREATHE = [BORDER_BASE, 'rgba(184, 169, 212, 0.4)', BORDER_BASE];

type Flight = { key: string; fromX: number; fromY: number; toX: number; toY: number };

// Precompute character ranges for each task phrase in the dump text
function computeRanges() {
  const lower = DUMP_TEXT.toLowerCase();
  return tasks.map((task) => {
    const start = lower.indexOf(task.phrase);
    // A phrase that isn't in the dump text must never reveal. Park it past the
    // end so `typedLength >= end` can't fire (the old -1 start revealed at char 13).
    if (start === -1) {
      return { start: Infinity, end: Infinity };
    }
    return { start, end: start + task.phrase.length };
  });
}

export default function BrainDumpDemo() {
  const [typedLength, setTypedLength] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [done, setDone] = useState(false);
  const [flights, setFlights] = useState<Flight[]>([]);
  const [runId, setRunId] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const phraseEls = useRef<(HTMLSpanElement | null)[]>([]);
  const rowEls = useRef<(HTMLDivElement | null)[]>([]);
  const prevRevealed = useRef<boolean[]>(tasks.map(() => false));
  const reduceMotion = useReducedMotion();
  const ranges = useMemo(computeRanges, []);

  // Delay before a landed task row springs in, leaving room for the flying token.
  const rowDelay = reduceMotion ? 0 : 0.4;

  // Which tasks have been fully typed through
  const revealedTasks = useMemo(
    () => ranges.map((r) => typedLength >= r.end),
    [typedLength, ranges],
  );

  // Is the cursor currently inside a task phrase?
  const insideTask = useMemo(
    () => ranges.some((r) => typedLength >= r.start && typedLength <= r.end),
    [typedLength, ranges],
  );

  // Did we just finish typing a task phrase? (pause moment)
  const justFinishedTask = useMemo(
    () => ranges.some((r) => typedLength === r.end),
    [typedLength, ranges],
  );

  // Start typing when section comes into view
  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Typewriter effect
  useEffect(() => {
    if (!hasStarted || done) return;
    if (typedLength >= DUMP_TEXT.length) {
      setDone(true);
      return;
    }

    // Determine delay: pause after completing a task, slow inside tasks, fast otherwise
    let delay: number;
    if (justFinishedTask) {
      delay = 500;
    } else if (insideTask) {
      delay = 45;
    } else {
      const char = DUMP_TEXT[typedLength];
      if (char === ',' || char === '.' || char === ':') {
        delay = 90;
      } else if (char === ' ') {
        delay = 15;
      } else {
        delay = 22;
      }
    }

    const timer = setTimeout(() => setTypedLength((l) => l + 1), delay);
    return () => clearTimeout(timer);
  }, [hasStarted, done, typedLength, insideTask, justFinishedTask]);

  // When a phrase completes, launch a small lavender token from the phrase toward its row.
  // Pure presentation: measured per run, never touches the timer state machine.
  useEffect(() => {
    revealedTasks.forEach((revealed, idx) => {
      if (!revealed || prevRevealed.current[idx]) return;
      prevRevealed.current[idx] = true;
      if (reduceMotion) return;
      const grid = gridRef.current;
      const fromEl = phraseEls.current[idx];
      const toEl = rowEls.current[idx];
      if (!grid || !fromEl || !toEl) return;
      const g = grid.getBoundingClientRect();
      const from = fromEl.getBoundingClientRect();
      const to = toEl.getBoundingClientRect();
      setFlights((prev) => [
        ...prev,
        {
          key: `${runId}-${idx}`,
          fromX: from.left + from.width / 2 - g.left,
          fromY: from.top + from.height / 2 - g.top,
          toX: to.left + 30 - g.left,
          toY: to.top + to.height / 2 - g.top,
        },
      ]);
    });
  }, [revealedTasks, reduceMotion, runId]);

  const handleReplay = () => {
    prevRevealed.current = tasks.map(() => false);
    setFlights([]);
    setRunId((id) => id + 1);
    setTypedLength(0);
    setDone(false);
  };

  // Build rendered text with highlights
  const renderedText = useMemo(() => {
    const typed = DUMP_TEXT.substring(0, typedLength);
    const parts: { value: string; isTask: boolean; taskDone: boolean; taskIdx?: number }[] = [];
    let cursor = 0;

    // Sort ranges by start position
    const sorted = ranges
      .map((r, i) => ({ ...r, idx: i }))
      .sort((a, b) => a.start - b.start);

    for (const range of sorted) {
      // Only process ranges that have started being typed
      if (typedLength <= range.start) continue;

      // Add non-task text before this range
      if (range.start > cursor) {
        const segEnd = Math.min(range.start, typedLength);
        if (segEnd > cursor) {
          parts.push({ value: DUMP_TEXT.substring(cursor, segEnd), isTask: false, taskDone: false });
        }
      }

      // Add the task text (partially or fully typed)
      const taskEnd = Math.min(range.end, typedLength);
      const taskStart = Math.max(range.start, cursor);
      if (taskEnd > taskStart) {
        parts.push({
          value: DUMP_TEXT.substring(taskStart, taskEnd),
          isTask: true,
          taskDone: typedLength >= range.end,
          taskIdx: range.idx,
        });
      }

      cursor = Math.max(cursor, taskEnd);
    }

    // Remaining non-task text after last range
    if (cursor < typedLength) {
      parts.push({ value: typed.substring(cursor), isTask: false, taskDone: false });
    }

    return parts;
  }, [typedLength, ranges]);

  const revealedCount = revealedTasks.filter(Boolean).length;

  // Drives the dump card's breathing border: only while the typewriter is running.
  const typingActive = hasStarted && !done && !reduceMotion;

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <WordReveal
            as="h2"
            text={t.brainDumpDemo.title}
            highlight="Keep the tasks."
            highlightClassName="text-lavender-dark"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold text-charcoal leading-tight tracking-tight"
          />
          <motion.p {...fadeRise(0.2, 20)} className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.brainDumpDemo.subtitle}
          </motion.p>
        </div>

        <div
          ref={gridRef}
          className="relative isolate flex flex-col lg:flex-row gap-6 items-stretch"
        >
          {/* Depth glow: soft lavender plane drifting behind the card pair */}
          <Parallax speed={16} className="pointer-events-none absolute -inset-10 -z-10">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[110%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(184,169,212,0.22),transparent_70%)] blur-2xl"
            />
          </Parallax>

          {/* Left: Brain dump text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 w-full [perspective:1400px]"
          >
            {/* Nested 3D layer: settles to identity well before the first pill flight.
                borderColor breathes while the typewriter runs, then stops. */}
            <motion.div
              initial={{ rotateY: reduceMotion ? 0 : 6, borderColor: BORDER_BASE }}
              whileInView={{ rotateY: 0 }}
              viewport={{ once: true }}
              animate={{ borderColor: typingActive ? BORDER_BREATHE : BORDER_BASE }}
              transition={{
                rotateY: { duration: 0.8, delay: 0.1, ease: EASE },
                borderColor: typingActive
                  ? { duration: 4, ease: 'easeInOut', repeat: Infinity }
                  : { duration: 0.6, ease: 'easeOut' },
              }}
              className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-6 sm:p-8 h-full"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-lavender-light/30 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 2C4.69 2 2 4.24 2 7c0 1.7 1.11 3.2 2.85 4.06V14l2.5-1.43H8c3.31 0 6-2.24 6-5s-2.69-5-6-5z" stroke="#9585B8" strokeWidth="1.2" />
                    <path d="M5.5 6.5h5M5.5 8.5h3.5" stroke="#9585B8" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-lavender-dark font-medium">{t.brainDumpDemo.brainDumpLabel}</div>
                  <div className="text-xs text-muted-light">{t.brainDumpDemo.brainDumpPlaceholder}</div>
                </div>
                <AnimatePresence>
                  {done && (
                    <motion.button
                      type="button"
                      onClick={handleReplay}
                      aria-label="Replay demo"
                      initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.15 } }}
                      transition={SPRING}
                      whileHover={{ rotate: -30, scale: 1.08 }}
                      whileTap={{ scale: 0.9 }}
                      className="ml-auto w-8 h-8 rounded-full bg-lavender-light/30 text-lavender-dark flex items-center justify-center hover:bg-lavender-light/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lavender/50"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M23 4v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              <div className="min-h-[160px] sm:min-h-[140px]">
                <p className="text-sm sm:text-base leading-relaxed">
                  {renderedText.map((part, i) =>
                    part.isTask ? (
                      <motion.span
                        key={i}
                        ref={(el: HTMLSpanElement | null) => {
                          if (part.taskIdx !== undefined) phraseEls.current[part.taskIdx] = el;
                        }}
                        animate={part.taskDone && !reduceMotion ? { boxShadow: PHRASE_PULSE } : undefined}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className={`rounded px-0.5 font-medium transition-colors duration-300 ${
                          part.taskDone
                            ? 'bg-lavender-light/40 text-lavender-dark'
                            : 'bg-lavender-light/20 text-charcoal'
                        }`}
                      >
                        {part.value}
                      </motion.span>
                    ) : (
                      <span
                        key={i}
                        className={`transition-colors duration-700 ${
                          done ? 'text-muted-light' : 'text-charcoal'
                        }`}
                      >
                        {part.value}
                      </span>
                    ),
                  )}
                  {!done && (
                    <span className="inline-block w-0.5 h-4 bg-lavender ml-0.5 animate-pulse align-text-bottom" />
                  )}
                </p>
              </div>

              {/* Done state */}
              <AnimatePresence>
                {done && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ delay: 0.5, duration: 0.7, ease: EASE }}
                    className="mt-4 flex items-start gap-2 text-xs text-muted-light"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
                      <path d="M7 4.5v3M7 9.5v0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    <span>{t.brainDumpDemo.filterNote}</span>
                    <motion.svg
                      initial={{ opacity: 0, scale: 0, rotate: -45 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ ...SPRING_SNAPPY, delay: 1.2 }}
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                      className="mt-0.5 flex-shrink-0 text-lavender"
                    >
                      <path d="M6 1L7.1 4.4 10.5 5.5 7.1 6.6 6 10 4.9 6.6 1.5 5.5 4.9 4.4 6 1z" fill="currentColor" />
                    </motion.svg>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Right: Extracted tasks (appear live) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full [perspective:1400px]"
          >
            {/* Mirror of the dump card's 3D entrance; settles before any flight is measured */}
            <motion.div
              initial={{ rotateY: reduceMotion ? 0 : -6 }}
              whileInView={{ rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
              className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-6 sm:p-8 h-full flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-sage/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8l3 3 5-5" stroke="#8A9B80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-sage-dark font-medium">{t.brainDumpDemo.extractedTasksLabel}</div>
                  <div className="text-xs text-muted-light">
                    {revealedCount > 0 ? t.brainDumpDemo.tasksFound(revealedCount) : t.brainDumpDemo.listening}
                  </div>
                </div>
              </div>

              <div className="space-y-2 flex-1 flex flex-col justify-center">
                {tasks.map((task, idx) => (
                  <div
                    key={task.phrase}
                    ref={(el: HTMLDivElement | null) => {
                      rowEls.current[idx] = el;
                    }}
                  >
                    <AnimatePresence>
                      {revealedTasks[idx] ? (
                        <motion.div
                          key={`task-${idx}`}
                          initial={{ opacity: 0, x: -28, scale: 0.9 }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            ...(reduceMotion ? {} : { boxShadow: ROW_FLASH }),
                          }}
                          transition={{
                            ...SPRING_SNAPPY,
                            delay: rowDelay,
                            boxShadow: { delay: rowDelay + 0.1, duration: 0.7, ease: 'easeOut' },
                          }}
                          className="flex items-center gap-3 rounded-xl bg-cream border border-sage/20 px-4 py-3"
                        >
                          <div className="w-5 h-5 rounded-lg border-2 border-sage/30 flex-shrink-0 flex items-center justify-center">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <motion.path
                                d="M2 5l2 2 4-4"
                                stroke="#8A9B80"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                initial={{
                                  pathLength: reduceMotion ? 1 : 0,
                                  opacity: reduceMotion ? 1 : 0,
                                }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ delay: rowDelay + 0.25, duration: 0.35, ease: EASE }}
                              />
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-charcoal">{task.text}</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`placeholder-${idx}`}
                          className="h-11 rounded-xl bg-cream/50 border border-dashed border-charcoal/8"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

            </motion.div>
          </motion.div>

          {/* Flying tokens: a phrase lifts off the dump card and lands in its checklist row */}
          {flights.map((flight) => (
            <motion.span
              key={flight.key}
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-10 h-4 w-10 rounded-full bg-lavender shadow-lg shadow-lavender/40"
              initial={{ x: flight.fromX - 20, y: flight.fromY - 8, opacity: 0, scale: 0.5 }}
              animate={{
                x: [flight.fromX - 20, (flight.fromX + flight.toX) / 2 - 20, flight.toX - 20],
                y: [flight.fromY - 8, Math.min(flight.fromY, flight.toY) - 40, flight.toY - 8],
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 0.75],
              }}
              transition={{ duration: 0.55, ease: EASE }}
              onAnimationComplete={() =>
                setFlights((prev) => prev.filter((f) => f.key !== flight.key))
              }
            />
          ))}
        </div>

        <TryInDoublyCTA placement="brain_dump" className="mt-10" />
      </div>
    </section>
  );
}
