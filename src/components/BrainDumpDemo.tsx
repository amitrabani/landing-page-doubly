'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import t from '@/translations/en';

const DUMP_TEXT = t.brainDumpDemo.dumpText;
const tasks = t.brainDumpDemo.tasks;

// Precompute character ranges for each task phrase in the dump text
function computeRanges() {
  const lower = DUMP_TEXT.toLowerCase();
  return tasks.map((task) => {
    const start = lower.indexOf(task.phrase);
    return { start, end: start + task.phrase.length };
  });
}

export default function BrainDumpDemo() {
  const [typedLength, setTypedLength] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const [done, setDone] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const ranges = useMemo(computeRanges, []);

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

  // Build rendered text with highlights
  const renderedText = useMemo(() => {
    const typed = DUMP_TEXT.substring(0, typedLength);
    const parts: { value: string; isTask: boolean; taskDone: boolean }[] = [];
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

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            {t.brainDumpDemo.title}
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.brainDumpDemo.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">
          {/* Left: Brain dump text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 w-full"
          >
            <div className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-6 sm:p-8 h-full">
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
              </div>

              <div className="min-h-[160px] sm:min-h-[140px]">
                <p className="text-sm sm:text-base leading-relaxed">
                  {renderedText.map((part, i) =>
                    part.isTask ? (
                      <span
                        key={i}
                        className={`rounded px-0.5 font-medium transition-colors duration-300 ${
                          part.taskDone
                            ? 'bg-lavender-light/40 text-lavender-dark'
                            : 'bg-lavender-light/20 text-charcoal'
                        }`}
                      >
                        {part.value}
                      </span>
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 flex items-start gap-2 text-xs text-muted-light"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1" />
                      <path d="M7 4.5v3M7 9.5v0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    <span>{t.brainDumpDemo.filterNote}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Extracted tasks (appear live) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <div className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-6 sm:p-8 h-full flex flex-col">
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
                  <AnimatePresence key={task.phrase}>
                    {revealedTasks[idx] ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        className="flex items-center gap-3 rounded-xl bg-cream border border-sage/20 px-4 py-3"
                      >
                        <div className="w-5 h-5 rounded-lg border-2 border-sage/30 flex-shrink-0 flex items-center justify-center">
                          <motion.svg
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.15, type: 'spring', stiffness: 400, damping: 15 }}
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                          >
                            <path d="M2 5l2 2 4-4" stroke="#8A9B80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </motion.svg>
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
                ))}
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
