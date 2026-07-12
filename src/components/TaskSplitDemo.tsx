'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  EASE,
  SPRING,
  SPRING_SOFT,
  SPRING_SNAPPY,
  VIEWPORT_ONCE_TIGHT,
  fadeRise,
  staggerContainer,
} from '@/lib/motion';
import WordReveal from '@/components/motion/WordReveal';
import AnimatedNumber from '@/components/motion/AnimatedNumber';
import ConfettiBurst from '@/components/motion/ConfettiBurst';
import TiltCard from '@/components/motion/TiltCard';
import { APP_STORE_URL, trackAppStoreClick } from '@/lib/appStore';
import { useT, useLocale } from '@/i18n/TranslationProvider';

interface Subtask {
  text: string;
  duration: string | null;
}

interface TaskResult {
  title: string;
  subtasks: Subtask[];
  urgency: string | null;
}

// Chips settle in from slightly behind the plane; the container stagger supplies the delay.
const chipVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: EASE } },
};

// Call AI for custom (non-preset) tasks. The page locale is sent so the AI
// answers in the page's language (presets are already localized and skip this).
async function splitTaskAI(task: string, locale: string): Promise<TaskResult> {
  const res = await fetch('/api/split-task', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task, locale }),
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
  const t = useT();
  const locale = useLocale();
  const presets = t.taskSplitDemo.presets;
  const presetResults = t.taskSplitDemo.presetResults as unknown as Record<string, TaskResult>;
  const reduced = useReducedMotion();
  const [activeTask, setActiveTask] = useState<string | null>(null);
  const [taskResult, setTaskResult] = useState<TaskResult | null>(null);
  const [checked, setChecked] = useState<Set<number>>(new Set());
  const [customInput, setCustomInput] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(false);
  const [confettiFire, setConfettiFire] = useState(0);
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
        const result = await splitTaskAI(label, locale);
        if (controller.signal.aborted) return;
        setTaskResult(result);
      } catch {
        if (controller.signal.aborted) return;
        setError(true);
      } finally {
        if (!controller.signal.aborted) setIsTyping(false);
      }
    }
  }, [activeTask, locale]);

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
  const totalMin = subtasks.reduce((sum, st) => sum + parseDuration(st.duration), 0);
  const progress = subtasks.length > 0 ? checked.size / subtasks.length : 0;

  // One celebratory burst each time the list reaches fully checked
  useEffect(() => {
    if (allDone) setConfettiFire((c) => c + 1);
  }, [allDone]);

  return (
    <section id="split-demo" className="py-12 sm:py-16 px-6 bg-warm">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <WordReveal
            text={t.taskSplitDemo.title}
            as="h2"
            className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-charcoal leading-tight"
            highlight={t.taskSplitDemo.titleHighlight}
            highlightClassName="text-lavender-dark"
          />
          <motion.p {...fadeRise(0.2, 16)} className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.taskSplitDemo.subtitle}
          </motion.p>
        </div>

        {/* Preset chips */}
        <motion.div
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE_TIGHT}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {presets.map((p, i) => (
            <motion.div key={p.label} variants={chipVariant}>
              <motion.button
                onClick={() => handleSelect(p.label)}
                animate={{ scale: activeTask === p.label ? 1.03 : 1 }}
                whileHover={reduced ? undefined : { rotate: i % 2 === 0 ? 1 : -1 }}
                whileTap={{ scale: 0.95 }}
                transition={SPRING_SNAPPY}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                  activeTask === p.label
                    ? 'bg-lavender text-white shadow-md shadow-lavender/20'
                    : 'bg-white/80 text-charcoal-light border border-charcoal/8 hover:border-lavender/30 hover:bg-lavender-light/10'
                }`}
              >
                <span className="me-1.5">{p.icon}</span>
                {p.label}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom input */}
        <motion.div {...fadeRise(0.25, 15)} className="mb-10">
          <div className="flex gap-2 max-w-md mx-auto">
            <motion.input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleCustomSubmit()}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder={t.taskSplitDemo.customInputPlaceholder}
              animate={{
                boxShadow: inputFocused
                  ? '0 0 0 5px rgba(184, 169, 212, 0.16), 0 4px 18px 0 rgba(184, 169, 212, 0.22)'
                  : '0 0 0 0px rgba(184, 169, 212, 0), 0 0 0 0 rgba(184, 169, 212, 0)',
              }}
              transition={reduced ? { duration: 0 } : { duration: 0.35, ease: EASE }}
              className="flex-1 rounded-full px-5 py-2.5 text-sm bg-white/80 border border-charcoal/8 text-charcoal placeholder:text-muted-light focus:outline-none focus:border-lavender/40 transition-colors"
            />
            <motion.button
              onClick={handleCustomSubmit}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={SPRING_SNAPPY}
              className="rounded-full px-5 py-2.5 text-sm font-medium bg-charcoal text-cream hover:bg-charcoal-light transition-colors"
            >
              {t.taskSplitDemo.splitButton}
            </motion.button>
          </div>
        </motion.div>

        {/* Result card: 3D fold-in from a perspective parent, gentle pointer tilt nested inside */}
        <div className="[perspective:1200px]">
          <AnimatePresence mode="wait">
            {(isTyping || taskResult) && (
              <motion.div
                key={activeTask}
                initial={{ opacity: 0, y: 20, scale: 0.97, rotateX: reduced ? 0 : 8 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                exit={{ opacity: 0, y: -10, scale: 0.97, rotateX: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <TiltCard
                  maxTilt={3}
                  className="relative bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-8"
                >
                  <ConfettiBurst
                    fire={confettiFire}
                    count={20}
                    colors={['#A8B5A0', '#B8A9D4', '#D4C8ED']}
                  />

                  {/* Task header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-lavender-light/30 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M8 3v10" stroke="#9585B8" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xs text-lavender-dark font-medium">{t.taskSplitDemo.taskLabel}</div>
                        <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal">
                          {taskResult?.title || activeTask}
                        </div>
                      </div>
                    </div>
                    {taskResult?.urgency && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ ...SPRING, delay: 0.1 }}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          taskResult.urgency === 'high'
                            ? 'bg-coral-light/20 text-coral-dark'
                            : taskResult.urgency === 'medium'
                              ? 'bg-lavender-light/30 text-lavender-dark'
                              : 'bg-sage/15 text-sage-dark'
                        }`}
                      >
                        {t.taskSplitDemo.urgencyLabels[
                          taskResult.urgency as 'low' | 'medium' | 'high'
                        ] ?? `${taskResult.urgency} ${t.taskSplitDemo.urgencySuffix}`}
                      </motion.span>
                    )}
                  </div>

                  {/* AI thinking animation */}
                  {isTyping && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-muted text-sm">
                        <div aria-hidden className="flex items-center gap-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-1.5 h-1.5 rounded-full bg-lavender"
                              animate={reduced ? { opacity: 0.6 } : { y: [0, -3, 0], opacity: [0.4, 0.9, 0.4] }}
                              transition={
                                reduced
                                  ? { duration: 0 }
                                  : { duration: 1.3, repeat: Infinity, delay: i * 0.16, ease: 'easeInOut' }
                              }
                            />
                          ))}
                        </div>
                        {t.taskSplitDemo.aiThinking}
                      </div>
                      <div aria-hidden className="space-y-2">
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={i}
                            className="h-11 rounded-xl bg-cream border border-charcoal/5"
                            initial={{ opacity: 0 }}
                            animate={reduced ? { opacity: 0.5 } : { opacity: [0.3, 0.6, 0.3] }}
                            transition={
                              reduced
                                ? { duration: 0.3 }
                                : { duration: 1.6, repeat: Infinity, delay: 0.1 + i * 0.2, ease: 'easeInOut' }
                            }
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Error state */}
                  {error && !isTyping && (
                    <div className="text-center py-4">
                      <p className="text-muted text-sm mb-3">{t.taskSplitDemo.errorMessage}</p>
                      <button
                        onClick={() => {
                          const task = activeTask;
                          setActiveTask(null);
                          if (task) setTimeout(() => handleSelect(task), 0);
                        }}
                        className="text-sm font-medium text-lavender-dark hover:underline"
                      >
                        {t.taskSplitDemo.tryAgain}
                      </button>
                    </div>
                  )}

                  {/* Subtask list */}
                  {!isTyping && subtasks.length > 0 && (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-medium text-muted-light">
                          <AnimatedNumber
                            value={checked.size}
                            format={(x) => t.taskSplitDemo.stepsDone(x, subtasks.length)}
                          />
                        </div>
                        <div className="text-xs text-muted-light">
                          <AnimatedNumber value={totalMin} format={(x) => t.taskSplitDemo.minTotal(x)} />
                        </div>
                      </div>

                      {/* Progress bar fills as steps get checked */}
                      <div className="h-1 rounded-full bg-charcoal/5 overflow-hidden mb-4">
                        <motion.div
                          className="h-full rounded-full bg-sage origin-left rtl:origin-right"
                          initial={false}
                          animate={{ scaleX: progress }}
                          transition={reduced ? { duration: 0 } : SPRING_SOFT}
                        />
                      </div>

                      <div className="relative ps-5 flex flex-col gap-2">
                        {/* Connector line grows down the left as rows appear */}
                        <motion.div
                          aria-hidden
                          className="absolute start-[7px] top-3 bottom-3 w-0.5 rounded-full bg-gradient-to-b from-lavender/40 via-sage/40 to-sage/20"
                          style={{ transformOrigin: 'top' }}
                          initial={reduced ? false : { scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={
                            reduced
                              ? { duration: 0 }
                              : { duration: 0.3 + subtasks.length * 0.08, ease: EASE, delay: 0.1 }
                          }
                        />
                        {subtasks.map((st, idx) => (
                          <motion.button
                            key={st.text}
                            initial={{ opacity: 0, x: reduced ? 0 : -16 }}
                            animate={{ opacity: 1, x: 0 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{
                              ...SPRING_SOFT,
                              delay: 0.08 + idx * 0.08,
                              scale: { ...SPRING_SNAPPY, delay: 0 },
                            }}
                            onClick={() => toggleCheck(idx)}
                            className={`w-full flex items-center gap-3 rounded-xl px-4 py-3 text-start transition-colors ${
                              checked.has(idx)
                                ? 'bg-sage/15 border border-sage/20'
                                : 'bg-cream border border-charcoal/5 hover:border-lavender/20'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                                checked.has(idx)
                                  ? 'bg-sage border-sage'
                                  : 'border-charcoal/15'
                              }`}
                            >
                              <AnimatePresence>
                                {checked.has(idx) && (
                                  <motion.svg
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                  >
                                    <motion.path
                                      d="M2.5 6l2.5 2.5 4.5-5"
                                      stroke="white"
                                      strokeWidth="1.5"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      exit={{ pathLength: 0 }}
                                      transition={{ duration: 0.28, ease: EASE }}
                                    />
                                  </motion.svg>
                                )}
                              </AnimatePresence>
                            </div>
                            <span
                              className={`text-sm font-medium flex-1 transition-colors ${
                                checked.has(idx) ? 'text-sage-dark line-through' : 'text-charcoal'
                              }`}
                            >
                              {st.text}
                            </span>
                            {st.duration && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ ...SPRING, delay: 0.22 + idx * 0.08 }}
                                className={`text-xs flex-shrink-0 rounded-full px-2 py-0.5 transition-colors ${
                                  checked.has(idx)
                                    ? 'bg-sage/10 text-sage-dark/50'
                                    : 'bg-charcoal/[0.04] text-muted-light'
                                }`}
                              >
                                {st.duration}
                              </motion.span>
                            )}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Completed state with CTA */}
                  <AnimatePresence>
                    {allDone && (
                      <motion.div
                        initial={{ opacity: 0, y: 14, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, transition: { duration: 0.2, ease: 'easeOut' } }}
                        transition={SPRING_SOFT}
                        className="mt-8 text-center"
                      >
                        <div className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-5 py-2.5 text-sm font-medium text-sage-dark mb-4">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <motion.path
                              d="M4 8l3 3 5-5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.4, delay: 0.25, ease: EASE }}
                            />
                          </svg>
                          {t.taskSplitDemo.allDoneMessage}
                        </div>
                        <p className="text-muted text-sm mb-5 max-w-sm mx-auto">
                          {t.taskSplitDemo.allDoneDescription}
                        </p>
                        <motion.a
                          href={APP_STORE_URL}
                          onClick={() => trackAppStoreClick('task_split_all_done')}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={SPRING_SNAPPY}
                          className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-7 py-3 text-sm font-medium hover:bg-charcoal-light transition-colors shadow-lg shadow-charcoal/10"
                        >
                          {t.taskSplitDemo.allDoneCta}
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </motion.a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </TiltCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
