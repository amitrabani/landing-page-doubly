'use client';

import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import t from '@/translations/en';

interface Habit {
  id: string;
  name: string;
  icon: string;
  color: string;
  colorBg: string;
  colorCheck: string;
  type: 'boolean' | 'count';
  target: number;
  unit?: string;
  // Grid colors per intensity level (0=empty, 1-4=filled)
  gridColors: string[];
  // Fake stats
  streak: number;
  best: number;
  pct: string;
}

const habitTranslations = t.habitDemo.habits;

const sampleHabits: Habit[] = [
  {
    id: habitTranslations[0].id,
    name: habitTranslations[0].name,
    icon: habitTranslations[0].icon,
    color: 'text-sky',
    colorBg: 'bg-sky-light/25',
    colorCheck: 'bg-sky border-sky',
    type: 'count',
    target: 8,
    unit: habitTranslations[0].unit,
    gridColors: ['bg-charcoal/5', 'bg-sky-light/30', 'bg-sky-light/50', 'bg-sky/60', 'bg-sky'],
    streak: 23,
    best: 41,
    pct: '78%',
  },
  {
    id: habitTranslations[1].id,
    name: habitTranslations[1].name,
    icon: habitTranslations[1].icon,
    color: 'text-sage-dark',
    colorBg: 'bg-sage/20',
    colorCheck: 'bg-sage border-sage',
    type: 'boolean',
    target: 1,
    gridColors: ['bg-charcoal/5', 'bg-sage/20', 'bg-sage/40', 'bg-sage/60', 'bg-sage-dark'],
    streak: 12,
    best: 30,
    pct: '65%',
  },
  {
    id: habitTranslations[2].id,
    name: habitTranslations[2].name,
    icon: habitTranslations[2].icon,
    color: 'text-lavender-dark',
    colorBg: 'bg-lavender-light/25',
    colorCheck: 'bg-lavender border-lavender',
    type: 'boolean',
    target: 1,
    gridColors: ['bg-charcoal/5', 'bg-lavender-light/40', 'bg-lavender-light/60', 'bg-lavender/70', 'bg-lavender-dark'],
    streak: 8,
    best: 22,
    pct: '54%',
  },
  {
    id: habitTranslations[3].id,
    name: habitTranslations[3].name,
    icon: habitTranslations[3].icon,
    color: 'text-coral-dark',
    colorBg: 'bg-coral-light/25',
    colorCheck: 'bg-coral border-coral',
    type: 'boolean',
    target: 1,
    gridColors: ['bg-charcoal/5', 'bg-coral-light/30', 'bg-coral-light/50', 'bg-coral/50', 'bg-coral-dark'],
    streak: 5,
    best: 14,
    pct: '42%',
  },
  {
    id: habitTranslations[4].id,
    name: habitTranslations[4].name,
    icon: habitTranslations[4].icon,
    color: 'text-sage-dark',
    colorBg: 'bg-sage/20',
    colorCheck: 'bg-sage border-sage',
    type: 'boolean',
    target: 1,
    gridColors: ['bg-charcoal/5', 'bg-sage/20', 'bg-sage/40', 'bg-sage/60', 'bg-sage-dark'],
    streak: 15,
    best: 28,
    pct: '71%',
  },
];

// Generate a seeded 12-week grid per habit (deterministic per seed)
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function generateGrid(seed: number): number[][] {
  const rand = seededRandom(seed);
  const weeks = 12;
  const days = 7;
  const grid: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const week: number[] = [];
    const baseChance = 0.15 + (w / weeks) * 0.55;
    for (let d = 0; d < days; d++) {
      const dayMod = d >= 5 ? -0.12 : 0;
      const chance = Math.min(baseChance + dayMod, 0.85);
      // Last week, last day = today -> leave as 0 (will be filled by user)
      if (w === weeks - 1 && d === days - 1) {
        week.push(0);
      } else {
        const val = rand() < chance ? Math.ceil(rand() * 4) : 0;
        week.push(val);
      }
    }
    grid.push(week);
  }
  return grid;
}

export default function HabitDemo() {
  const [completions, setCompletions] = useState<Record<string, number>>({});
  const [selectedHabit, setSelectedHabit] = useState<string>('water');
  const [bounceKey, setBounceKey] = useState(0);

  // Each habit gets its own unique grid
  const grids = useMemo(() => {
    const map: Record<string, number[][]> = {};
    sampleHabits.forEach((h, i) => {
      map[h.id] = generateGrid((i + 1) * 7919); // different prime seed per habit
    });
    return map;
  }, []);

  const toggleHabit = useCallback((habit: Habit) => {
    setCompletions((prev) => {
      const current = prev[habit.id] || 0;
      if (habit.type === 'boolean') {
        return { ...prev, [habit.id]: current >= 1 ? 0 : 1 };
      }
      return { ...prev, [habit.id]: current >= habit.target ? 0 : current + 1 };
    });
    setBounceKey((k) => k + 1);
    setSelectedHabit(habit.id);
  }, []);

  const completedCount = sampleHabits.filter((h) => {
    const val = completions[h.id] || 0;
    return val >= h.target;
  }).length;

  const activeHabit = sampleHabits.find((h) => h.id === selectedHabit)!;
  const activeGrid = grids[selectedHabit];
  const activeCompletion = completions[selectedHabit] || 0;
  const activeIsDone = activeCompletion >= activeHabit.target;

  // Today's cell value based on completion
  const todayCellValue = activeHabit.type === 'count'
    ? Math.min(Math.ceil((activeCompletion / activeHabit.target) * 4), 4)
    : activeIsDone ? 4 : 0;

  return (
    <section className="py-24 sm:py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
            {t.habitDemo.title}
          </h2>
          <p className="mt-4 text-muted text-lg max-w-xl mx-auto">
            {t.habitDemo.subtitle}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Today's habits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1"
          >
            <div className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-xs font-medium text-muted-light">{t.habitDemo.todayLabel}</div>
                  <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal">
                    {t.habitDemo.yourHabits}
                  </div>
                </div>
                <div className="text-sm text-muted">
                  {completedCount}/{sampleHabits.length}
                </div>
              </div>

              <div className="space-y-2">
                {sampleHabits.map((habit, idx) => {
                  const val = completions[habit.id] || 0;
                  const isDone = val >= habit.target;
                  const isSelected = selectedHabit === habit.id;

                  return (
                    <motion.button
                      key={habit.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.06 }}
                      onClick={() => toggleHabit(habit)}
                      className={`w-full flex items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all ${
                        isDone
                          ? `${habit.colorBg} border ${isSelected ? 'border-charcoal/15' : 'border-transparent'}`
                          : `bg-cream border ${isSelected ? 'border-charcoal/15' : 'border-charcoal/5'} hover:border-lavender/20`
                      }`}
                    >
                      {/* Checkbox */}
                      <div
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          isDone ? habit.colorCheck : 'border-charcoal/15'
                        }`}
                      >
                        <AnimatePresence>
                          {isDone && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                            >
                              <path
                                d="M3 7l3 3 5-5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </motion.svg>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Icon & name */}
                      <span className="text-lg">{habit.icon}</span>
                      <span
                        className={`text-sm font-medium flex-1 transition-all ${
                          isDone ? 'text-charcoal-light' : 'text-charcoal'
                        }`}
                      >
                        {habit.name}
                      </span>

                      {/* Count indicator for count-type habits */}
                      {habit.type === 'count' && (
                        <span className={`text-xs font-medium ${isDone ? habit.color : 'text-muted-light'}`}>
                          {val}/{habit.target} {habit.unit}
                        </span>
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* All done message with CTA */}
              <AnimatePresence>
                {completedCount === sampleHabits.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mt-6 text-center"
                  >
                    <div className="inline-flex items-center gap-2 rounded-full bg-sage/15 px-4 py-2 text-sm font-medium text-sage-dark mb-4">
                      {t.habitDemo.allDoneMessage}
                    </div>
                    <p className="text-muted text-sm mb-5 max-w-xs mx-auto">
                      {t.habitDemo.allDoneDescription}
                    </p>
                    <a
                      href="https://app.usedoubly.com"
                      className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-7 py-3 text-sm font-medium hover:bg-charcoal-light transition-all hover:scale-[1.02] shadow-lg shadow-charcoal/10"
                    >
                      {t.habitDemo.allDoneCta}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Contribution grid - changes per selected habit */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="bg-white rounded-3xl border border-charcoal/5 shadow-xl shadow-charcoal/5 p-6 h-full flex flex-col">
              {/* Header with habit selector */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{activeHabit.icon}</span>
                  <div>
                    <div className="text-xs font-medium text-muted-light">{t.habitDemo.weeksLabel}</div>
                    <div className="font-[family-name:var(--font-display)] text-lg font-semibold text-charcoal">
                      {activeHabit.name}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="text-xs text-muted-light">{t.habitDemo.lessLabel}</div>
                  {activeHabit.gridColors.map((c, i) => (
                    <div key={i} className={`w-3 h-3 rounded-sm ${c}`} />
                  ))}
                  <div className="text-xs text-muted-light">{t.habitDemo.moreLabel}</div>
                </div>
              </div>

              {/* Habit tabs */}
              <div className="flex gap-1 mb-5">
                {sampleHabits.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHabit(h.id)}
                    className={`text-base px-1.5 py-1 rounded-lg transition-all ${
                      selectedHabit === h.id
                        ? 'bg-charcoal/5 scale-110'
                        : 'opacity-50 hover:opacity-80'
                    }`}
                    title={h.name}
                  >
                    {h.icon}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="flex-1 flex items-center justify-center">
                <motion.div
                  key={selectedHabit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-[3px]"
                >
                  {activeGrid.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((val, di) => {
                        const isToday = wi === activeGrid.length - 1 && di === 6;
                        const cellVal = isToday ? todayCellValue : val;
                        const cellColor = activeHabit.gridColors[cellVal] || activeHabit.gridColors[0];

                        return isToday ? (
                          <motion.div
                            key={`today-${bounceKey}`}
                            initial={{ scale: todayCellValue > 0 ? 1.5 : 1 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 12 }}
                            className={`w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-[4px] transition-colors duration-300 ${cellColor} ring-1 ring-charcoal/20`}
                          />
                        ) : (
                          <div
                            key={`${wi}-${di}`}
                            className={`w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-[4px] ${cellColor}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Stats row - per habit */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-5 border-t border-charcoal/5">
                <div className="text-center">
                  <motion.div
                    key={`${selectedHabit}-streak`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal"
                  >
                    {activeHabit.streak}
                  </motion.div>
                  <div className="text-xs text-muted-light">{t.habitDemo.currentStreak}</div>
                </div>
                <div className="text-center">
                  <motion.div
                    key={`${selectedHabit}-best`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal"
                  >
                    {activeHabit.best}
                  </motion.div>
                  <div className="text-xs text-muted-light">{t.habitDemo.bestStreak}</div>
                </div>
                <div className="text-center">
                  <motion.div
                    key={`${selectedHabit}-pct`}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal"
                  >
                    {activeHabit.pct}
                  </motion.div>
                  <div className="text-xs text-muted-light">{t.habitDemo.completion}</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
