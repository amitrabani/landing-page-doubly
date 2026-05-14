# Timer Warm Tactile Redesign

Date: 2026-05-14
Status: Approved (brainstorm), ready for implementation plan
Scope: `/tools/pomodoro` and `/tools/visual-timer`

## Goal

Both timers feel more visually delightful, more premium / app-like, and more on-brand for the Doubly ADHD audience, while reusing as much code as possible across the two pages. Direction chosen: **Warm Tactile** — a dial that appears to sit in the cream surface like a physical object, with an inset shadow, a soft coral wedge that breathes gently when running, and gradient-treated controls.

The "Aurora Glow" and "Frosted Petal" directions were considered and rejected. Aurora's dark stage was too far from the warm Doubly palette. Frosted Petal's glassmorphism worked but was less calm than Warm Tactile.

## Architectural change: extract the dial

Today, `VisualTimer.tsx` owns both dial rendering and timer state. `PomodoroTimer.tsx` has no dial — just large digits and a thin progress bar. The pomodoro will switch to dial-first, so the dial must become reusable.

Three pure presentational components are extracted to `src/app/(public-helpers)/_components/`:

- **`TimerDial.tsx`** — SVG dial. Props: `progress` (0..1, fraction of time remaining), `wedgeColor` (CSS color or var), `display` (digit string for the chip), `status` ('idle' | 'running' | 'paused'), `ariaLabel`. Renders the cream surface, inset shadow, twelve tick marks (heavier at quarters, no numbers — identical to today's visual timer), conic-gradient wedge with breath glow when running, digits chip centered inside.
- **`TimerControls.tsx`** — primary Start/Pause/Resume button plus Reset, optional Skip slot. Props: `status`, `onStart`, `onPause`, `onReset`, optional `onSkip`, optional `startLabelOverride` (for the "Done" edge case in the visual timer when remaining is zero).
- **`PresetPills.tsx`** — the duration preset row used by the visual timer, possibly reused for future tools. Props: `presets: number[]`, `currentMinutes`, `onApply`, `onCustomOpen`, `customOpen`.

State logic, persistence, and the reducers stay where they are — the two timers have meaningfully different state machines (modes, long-break cadence, etc.) and consolidating them adds complexity without saving code.

## Visual language spec

All values reference the existing CSS variables in `src/app/globals.css`.

**Card surface (the section that wraps the whole tool):**

- `background: linear-gradient(160deg, var(--color-cream), var(--color-cream-dark))` replacing the flat white.
- `rounded-3xl` and existing outer shadow preserved.
- Border: `var(--color-warm-dark)` at 30% opacity, unchanged.

**Dial:**

- Outer face: `radial-gradient(circle at 30% 25%, white, #F0E8DA)` for a soft top-left highlight.
- Inset shadow: `inset 6px 6px 16px rgba(120, 100, 70, 0.18), inset -6px -6px 16px rgba(255, 255, 255, 0.9)`. Warm brown tint, not neutral gray, to match the cream palette.
- Outer shadow: `0 8px 24px rgba(45, 43, 50, 0.06)` for a gentle float.
- Tick marks: 12 marks, every third (12 / 3 / 6 / 9) at 2px stroke and 0.55 opacity, others at 1px and 0.25 opacity. Identical to today.
- Center dot: 3px charcoal, identical to today.

**Wedge:**

- Stays an SVG `<path>` with the existing wedge geometry (`wedgePath(progress)`). No change to the geometry math.
- Fill: an SVG `<linearGradient>` defined in `<defs>` that fades from the base hue at the top to its light variant at the bottom (e.g., `--color-coral` → `--color-coral-light`). One gradient per mode for the pomodoro (coral, sage, lavender), one for the visual timer (coral).
- Soft glow: a CSS `filter: drop-shadow(0 0 8px <wedge-color-35>)` applied to the path. The breath animation oscillates this filter between the rest value and `drop-shadow(0 0 14px <wedge-color-55>)`.
- The path keeps its existing `d` transition for smooth shrinking.

**Digits chip (inside the dial):**

- Background: `rgba(255, 255, 255, 0.7)` with `backdrop-filter: blur(6px)`.
- Pill shape (`rounded-full`), 4px vertical / 14px horizontal padding.
- Same tabular-nums font, slight letter-spacing tightening (`-0.02em`).
- Vertically centered in the dial, not pinned to the bottom as it is today on the visual timer.

**Primary button (Start / Pause / Resume):**

- Background: `linear-gradient(180deg, var(--color-charcoal-light), var(--color-charcoal))`.
- Inner highlight: `inset 0 1px 0 rgba(255, 255, 255, 0.1)`.
- Outer shadow: `0 4px 12px rgba(45, 43, 50, 0.18)`.
- Text: `var(--color-cream)`, semibold.
- Hover: shadow grows to `0 6px 16px rgba(45, 43, 50, 0.22)`, no color shift.
- Disabled state preserved (50% opacity, no shadow).

**Ghost buttons (Reset, Skip, inactive presets, inactive tabs):**

- Background: `rgba(255, 255, 255, 0.6)`.
- Inner border: `inset 0 0 0 1px rgba(45, 43, 50, 0.08)`.
- Hover: background goes to `rgba(255, 255, 255, 0.85)`.

**Active pill / tab:**

- For preset pills and inactive pomodoro mode tabs that are currently selected, use the same charcoal gradient as the primary button.
- For pomodoro mode tabs specifically, the *active* tab uses the mode's accent gradient (`coral → coral-dark` for Focus, `sage → sage-dark` for Short break, `lavender → lavender-dark` for Long break) so the dial color and tab color reinforce each other.

## Per-timer layout

**Visual timer (`/tools/visual-timer` — `VisualTimer.tsx`):**

Order, top to bottom inside the card:

1. `<TimerDial>` with coral wedge, digits inside.
2. Status text ("Counting down from 10 min" / "Paused" / "Time is up" / "Set for 10 min") — unchanged copy.
3. `<TimerControls>` with Start/Pause primary and Reset ghost.
4. `<PresetPills>` row with custom toggle.
5. Custom minutes input (revealed when toggled).
6. Sound checkbox, unchanged.

No content removed. Visual treatment only.

**Pomodoro (`/tools/pomodoro` — `PomodoroTimer.tsx`):**

Order, top to bottom inside the card:

1. Mode tabs (Focus / Short break / Long break), active tab uses the mode's accent gradient.
2. `<TimerDial>` with wedge color mapped from mode: `var(--color-coral)` for Focus, `var(--color-sage)` for Short break, `var(--color-lavender)` for Long break. Digits inside the dial.
3. "Sessions completed today: N" line below the dial.
4. `<TimerControls>` with Start/Pause primary, Reset ghost, Skip ghost.
5. Sound checkbox + Customize durations toggle row (unchanged).
6. Settings panel (revealed when toggled), unchanged.

Removed: the giant 7xl/8xl digit display and the thin progress bar. The dial replaces both — the wedge IS the progress bar, and the digits live inside the dial.

## Motion and accessibility

**Running state:** wedge has a 4-second `ease-in-out` infinite breath cycle on the drop-shadow opacity. Wedge geometry continues to update via the existing `d` transition on a 200ms linear curve.

**Paused state:** breath cycle stops at full opacity. Wedge stays.

**Idle / finished:** no motion.

**`prefers-reduced-motion: reduce`:** the breath glow animation is disabled. The wedge still updates via the `d` transition because that conveys remaining time. No other content has motion.

**Contrast:** the digits-on-cream-chip combination meets WCAG AA (`#2D2B32` charcoal on `rgba(255,255,255,0.7)` over the cream face). Verified by inspection; can be retested with axe if needed.

**Screen reader semantics:** unchanged. The SVG keeps `role="img"` with an `aria-label` that includes the human duration. The digits chip retains `aria-live="polite"`. The mode tabs keep `role="tab"` / `aria-selected`.

**Touch targets:** all buttons remain ≥44px tall on mobile.

## Files changed

New:
- `src/app/(public-helpers)/_components/TimerDial.tsx`
- `src/app/(public-helpers)/_components/TimerControls.tsx`
- `src/app/(public-helpers)/_components/PresetPills.tsx`

Modified:
- `src/app/(public-helpers)/_components/VisualTimer.tsx` — keep state/persistence, render new components, remove inline SVG.
- `src/app/(public-helpers)/tools/pomodoro/PomodoroTimer.tsx` — keep reducer/persistence, swap digit display + progress bar for `<TimerDial>`, mode tab gradients, use shared `<TimerControls>`.

No new dependencies. No package.json changes. No globals.css token additions — all values can be expressed with existing CSS variables.

## Performance

Both pages remain client-rendered for the timer widget and SSR for everything else. The SVG is unchanged in complexity (twelve ticks, one path, one circle, one inner dot). The breath animation is a single CSS keyframe on a `filter` property; with one running instance per page it is well under the INP and CLS budgets in §10 of the project CLAUDE.md. No new JavaScript on the page.

## Out of scope

- Sound design changes.
- Adding numerals to the dial (rejected — "as today" tick style was confirmed).
- Reusing state logic across the two timers.
- Dark mode (not yet implemented site-wide).
- Settings persistence migration (existing `localStorage` keys preserved).

## Testing

Manual:

- Both timer pages load, run, pause, resume, reset, complete.
- Pomodoro mode switching changes wedge color correctly.
- Visual timer presets and custom input still work.
- Sound toggle preserved across reloads.
- Tab title still updates while running.
- `prefers-reduced-motion: reduce` (DevTools rendering pane) disables the breath glow but the wedge still shrinks.
- Mobile width 360px: card, dial, controls, presets, mode tabs all fit and stay tappable.
- Lighthouse mobile performance 90+.

No automated tests today on these components. None added in this scope; can be a follow-up.
