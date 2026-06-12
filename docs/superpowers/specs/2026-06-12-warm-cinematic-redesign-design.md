# Warm Cinematic Landing Page Redesign

Date: 2026-06-12
Status: Approved by user ("do it and run")

## Goal

Elevate the Doubly landing page to award-winning visual quality ("robust and selling")
while preserving 100% of existing content, the live BrainDump and TaskSplit demos, and
the page's calm ADHD-friendly identity.

## Hard contract

- Every user-visible string stays verbatim. No copy rewrites, no removals.
- Section order unchanged. Anchor ids preserved: `how-it-works`, `testimonials`, `faq`, `get-doubly`.
- API contracts untouched: POST /api/brain-dump `{text} -> {tasks}`, POST /api/split-task
  `{task} -> {title, subtasks[{text,duration}], urgency}`.
- BrainDumpDemo timer state machine and TaskSplitDemo abort/preset logic preserved.
- PostHogProvider untouched.
- prefers-reduced-motion respected everywhere; celebration effects are one-shot, nothing loops aggressively.

## Global systems

1. **Display font**: Fraunces (next/font, weights 500-700) mapped to `--font-display`. Inter stays body.
2. **Lenis smooth scroll** via a thin client provider.
3. **Motion primitives** in `src/components/motion/`: WordReveal, Parallax, TiltCard,
   AnimatedNumber, ConfettiBurst. Shared eases/springs/viewport constants in `src/lib/motion.ts`.
4. **Ambient atmosphere**: page-level drifting gradient blobs + subtle grain overlay,
   gradient hand-offs between sections.

## Section choreography

- **Navbar**: scroll-interpolated glass condense, hamburger morph, staggered mobile menu.
- **Hero**: word-by-word headline reveal, pointer-tracked 3D phone tilt + sheen, floating
  chips at distinct parallax depths, scroll-exit hand-off, glow halo behind App Store badge.
- **VisualProblem**: differential per-card parallax, scroll-scrubbed cascade, hover tilt.
- **TaskSplitDemo**: subtasks draw in along a growing connector line, duration pills,
  animated total, progress fill as items check, confetti on completion.
- **BrainDumpDemo**: flying-pill transition from highlighted phrase to checklist; replay button.
- **Plan**: SVG connector path draws with scroll progress across the 4 steps.
- **TwoQuestions**: scroll-staggered comparison rows; per-option accent color on result card.
- **HabitDemo**: heatmap diagonal cascade reveal; checkbox particle burst; animated counter.
- **Success**: deeper parallax + glow behind social-proof card.
- **Stakes**: scroll-linked darkening wash; beat-by-beat text reveal; lifts back to cream.
- **Testimonials**: spring hover lift, staggered star pops, middle card raised, slight rotations.
- **FAQ**: layout-animated accordion glide, plus-icon spring, row hover tint.
- **FinalCTA**: radial glow stage, word-by-word headline, shimmer on highlight line.
- **Footer**: gradient continuation, underline-grow link hovers.
- **StickyBar**: spring entrance, direction-aware hide, hides when FinalCTA visible.

## Out of scope

- three.js/WebGL, AI-generated imagery, copy changes, layout reordering, new sections.

## Verification

- `npm run build` passes.
- git diff reviewed for removed string literals (zero content loss).
- Dev server run; all sections + both live demos verified end-to-end.
