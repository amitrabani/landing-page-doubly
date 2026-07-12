type Status = 'idle' | 'running' | 'paused';

export type WedgeTone = 'coral' | 'sage' | 'lavender';

type ToneStops = { base: string; light: string };

const WEDGE_STOPS: Record<WedgeTone, ToneStops> = {
  coral: { base: '#E8967A', light: '#F0B5A0' },
  sage: { base: '#A8B5A0', light: '#C0CBB8' },
  lavender: { base: '#B8A9D4', light: '#D4C8ED' },
};

export type TimerDialProps = {
  progress: number;
  tone: WedgeTone;
  display: string;
  status: Status;
  ariaLabel: string;
};

const VIEWBOX = 200;
const CENTER = VIEWBOX / 2;
const RADIUS = 84;

function wedgePath(progress: number): string {
  const angle = 360 * Math.max(0, Math.min(1, progress));
  if (angle <= 0) return '';
  if (angle >= 360) {
    return `M ${CENTER} ${CENTER - RADIUS} A ${RADIUS} ${RADIUS} 0 1 1 ${CENTER} ${CENTER + RADIUS} A ${RADIUS} ${RADIUS} 0 1 1 ${CENTER} ${CENTER - RADIUS} Z`;
  }
  const startRad = (-90 * Math.PI) / 180;
  const endRad = ((-90 + angle) * Math.PI) / 180;
  const x1 = CENTER + RADIUS * Math.cos(startRad);
  const y1 = CENTER + RADIUS * Math.sin(startRad);
  const x2 = CENTER + RADIUS * Math.cos(endRad);
  const y2 = CENTER + RADIUS * Math.sin(endRad);
  const largeArc = angle > 180 ? 1 : 0;
  return `M ${CENTER} ${CENTER} L ${x1} ${y1} A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${x2} ${y2} Z`;
}

export default function TimerDial({ progress, tone, display, status, ariaLabel }: TimerDialProps) {
  const stops = WEDGE_STOPS[tone];
  const wedgeD = wedgePath(progress);
  const gradientId = `wedge-${tone}`;
  const running = status === 'running';
  const wedgeStyle: React.CSSProperties = {
    transition: 'd 200ms linear',
    ['--timer-glow' as string]: stops.base,
  };
  if (!running) {
    wedgeStyle.filter = `drop-shadow(0 0 8px ${stops.base})`;
  }

  return (
    <div
      className="relative w-full max-w-[20rem] mx-auto aspect-square rounded-full"
      style={{
        background: 'radial-gradient(circle at 30% 25%, #FFFFFF, #F0E8DA)',
        boxShadow:
          'inset 6px 6px 16px rgba(120, 100, 70, 0.18), inset -6px -6px 16px rgba(255, 255, 255, 0.9), 0 8px 24px rgba(45, 43, 50, 0.06)',
      }}
    >
      <svg
        viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
        role="img"
        aria-label={ariaLabel}
        className="w-full h-full"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stops.base} />
            <stop offset="100%" stopColor={stops.light} />
          </linearGradient>
        </defs>
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const inner = RADIUS - (i % 3 === 0 ? 10 : 5);
          const x1 = CENTER + RADIUS * Math.cos(angle);
          const y1 = CENTER + RADIUS * Math.sin(angle);
          const x2 = CENTER + inner * Math.cos(angle);
          const y2 = CENTER + inner * Math.sin(angle);
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--color-charcoal)"
              strokeOpacity={i % 3 === 0 ? 0.4 : 0.18}
              strokeWidth={i % 3 === 0 ? 2 : 1}
              strokeLinecap="round"
            />
          );
        })}
        {wedgeD && (
          <path
            d={wedgeD}
            fill={`url(#${gradientId})`}
            style={wedgeStyle}
            className={running ? 'timer-wedge-breathe' : undefined}
          />
        )}
        <circle cx={CENTER} cy={CENTER} r="2.5" fill="var(--color-charcoal)" opacity="0.6" />
      </svg>

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          aria-live="polite"
          aria-atomic="true"
          className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl font-bold text-charcoal tabular-nums tracking-tight bg-white/70 backdrop-blur-md rounded-full px-5 py-1.5 shadow-[0_2px_8px_rgba(45,43,50,0.06)]"
        >
          {display}
        </div>
      </div>
    </div>
  );
}
