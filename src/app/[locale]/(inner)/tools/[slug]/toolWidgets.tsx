import type { ReactNode } from 'react';

// Maps each tool slug to its interactive widget. The widgets are the same
// client components the English pages render (their in-widget UI copy stays
// English for now — SEO content around them is what's localized). Reusing them
// keeps a single source of truth for the tool behavior across all locales.
import TaskSplitterTool from '@/app/(main)/(public-helpers)/tools/task-splitter/TaskSplitterTool';
import BrainDumpTool from '@/app/(main)/(public-helpers)/tools/brain-dump/BrainDumpTool';
import PickOneTool from '@/app/(main)/(public-helpers)/tools/pick-one/PickOneTool';
import EisenhowerMatrixTool from '@/app/(main)/(public-helpers)/tools/eisenhower-matrix/EisenhowerMatrixTool';
import PomodoroTimer from '@/app/(main)/(public-helpers)/tools/pomodoro/PomodoroTimer';
import VisualTimer from '@/app/(main)/(public-helpers)/_components/VisualTimer';
import BrownNoisePlayer from '@/app/(main)/(public-helpers)/tools/brown-noise/BrownNoisePlayer';
import StartSessionCTA from '@/app/(main)/(public-helpers)/tools/body-doubling-room/StartSessionCTA';
import HyperfocusTimer from '@/app/(main)/(public-helpers)/tools/hyperfocus-timer/HyperfocusTimer';

export const toolWidgets: Record<string, ReactNode> = {
  'task-splitter': <TaskSplitterTool />,
  'brain-dump': <BrainDumpTool />,
  'pick-one': <PickOneTool />,
  'eisenhower-matrix': <EisenhowerMatrixTool />,
  pomodoro: <PomodoroTimer />,
  'visual-timer': (
    <VisualTimer
      presets={[1, 3, 5, 10, 15, 25, 60]}
      defaultMinutes={10}
      storageKey="doubly:visual-timer:v1"
      ariaLabel="Visual countdown timer"
    />
  ),
  'brown-noise': <BrownNoisePlayer />,
  'body-doubling-room': <StartSessionCTA />,
  'hyperfocus-timer': <HyperfocusTimer />,
};
