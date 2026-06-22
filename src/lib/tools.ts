export type Tool = {
  slug: string;
  title: string;
  description: string;
  status: 'live' | 'coming-soon';
  hot?: boolean;
};

// Single source of truth for the tools library. Consumed by the /tools hub,
// the homepage tools section, and the footer so every tool gets direct internal
// links from high-crawl-priority pages (helps Google discover + index them).
export const tools: Tool[] = [
  {
    slug: 'task-splitter',
    title: 'Task Breakdown Tool',
    description:
      'Type a task you cannot start. AI splits it into small, doable steps with time estimates. Built for ADHD brains.',
    status: 'live',
  },
  {
    slug: 'brain-dump',
    title: 'Brain Dump Tool',
    description:
      'Dump everything in your head, AI pulls out only the actionable tasks. No signup, nothing stored.',
    status: 'live',
  },
  {
    slug: 'pick-one',
    title: 'Pick One Task Tool',
    description:
      'Paste a messy to-do list, get one thing to start with. Smallest, scariest, or random. Built for the moment ten tasks reads as one giant unstartable thing.',
    status: 'live',
  },
  {
    slug: 'eisenhower-matrix',
    title: 'Eisenhower Matrix (ADHD Edition)',
    description:
      'Drag tasks into quadrants like "boring but important" instead of textbook labels. The matrix that finally fits an ADHD brain. Saves locally.',
    status: 'live',
  },
  {
    slug: 'pomodoro',
    title: 'ADHD Pomodoro Timer',
    description:
      '25-minute work, 5-minute break - the focus method that finally fits an ADHD brain. Free, no signup, works offline.',
    status: 'live',
  },
  {
    slug: 'visual-timer',
    title: 'Visual Timer / Time Blindness Clock',
    description:
      'A shrinking pie wedge so you can see time passing instead of reading digits. Doubles as a time blindness clock for ADHD adults.',
    status: 'live',
  },
  {
    slug: 'brown-noise',
    title: 'Ambient Sound Generator',
    description:
      'Free in-browser ambient sound generator. Brown noise plus pink and white. Steady background sound to quiet a busy ADHD brain. Sleep timer included, works offline.',
    status: 'live',
  },
  {
    slug: 'body-doubling-room',
    title: 'Body Doubling Room',
    description:
      'Free two-person focus room. Share a link, work side by side over peer-to-peer video, run a shared timer. No signup, no install.',
    status: 'live',
  },
  {
    slug: 'hyperfocus-timer',
    title: 'Hyperfocus Interrupt Timer',
    description:
      'Recurring spoken check-ins every X minutes and an optional hard stop, so an ADHD hyperfocus session does not eat your whole afternoon.',
    status: 'live',
    hot: true,
  },
];
