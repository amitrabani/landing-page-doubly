export type ToolSlug =
  | 'task-splitter'
  | 'brain-dump'
  | 'pick-one'
  | 'eisenhower-matrix'
  | 'pomodoro'
  | 'visual-timer'
  | 'brown-noise'
  | 'body-doubling-room'
  | 'hyperfocus-timer';

export type Tool = {
  slug: ToolSlug;
  status: 'live' | 'coming-soon';
  hot?: boolean;
};

// Single source of truth for the SHAPE of the tools library (which tools exist,
// which are live, which is hot). Consumed by the /tools hub, the homepage tools
// section, and the footer so every tool gets direct internal links from
// high-crawl-priority pages (helps Google discover + index them).
//
// The user-facing title + description live in the translation dictionaries
// (`t.toolCards[slug]`, generated from content/tools-i18n/{locale}/_index.json)
// so they render in the visitor's language. Keep this list and the packs in the
// same order; scripts/check-tool-cards.mjs enforces that they agree.
export const tools: Tool[] = [
  { slug: 'task-splitter', status: 'live' },
  { slug: 'brain-dump', status: 'live' },
  { slug: 'pick-one', status: 'live' },
  { slug: 'eisenhower-matrix', status: 'live' },
  { slug: 'pomodoro', status: 'live' },
  { slug: 'visual-timer', status: 'live' },
  { slug: 'brown-noise', status: 'live' },
  { slug: 'body-doubling-room', status: 'live' },
  { slug: 'hyperfocus-timer', status: 'live', hot: true },
];
