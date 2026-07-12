'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useT } from '@/i18n/TranslationProvider';
import { tools } from '@/lib/tools';

// CSS-only underline that grows from the left on hover (scaleX origin-left pseudo-element).
const linkClass =
  'relative text-sm text-muted hover:text-charcoal transition-colors duration-300 ' +
  'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left ' +
  'after:scale-x-0 after:bg-current after:transition-transform after:duration-300 ' +
  'after:ease-out hover:after:scale-x-100';

export default function Footer() {
  const t = useT();
  return (
    <footer className="py-12 px-6 border-t border-charcoal/5 bg-gradient-to-b from-cream to-warm">
      <nav
        aria-label="Free ADHD tools"
        className="mx-auto max-w-6xl mb-10 pb-10 border-b border-charcoal/5"
      >
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-light mb-4">
          Free ADHD tools
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {tools
            .filter((tool) => tool.status === 'live')
            .map((tool) => (
              <Link key={tool.slug} href={`/tools/${tool.slug}`} className={linkClass}>
                {tool.title}
              </Link>
            ))}
        </div>
      </nav>

      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/icon-192.png" alt="Doubly" width={28} height={28} className="rounded-lg" />
          <span className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal">
            {t.footer.brand}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link href="/tools" className={linkClass}>
            Tools
          </Link>
          <Link href="/learn" className={linkClass}>
            Learn
          </Link>
          <Link href="/privacy" className={linkClass}>
            {t.footer.privacy}
          </Link>
          <Link href="/terms" className={linkClass}>
            {t.footer.terms}
          </Link>
          <Link href="/support" className={linkClass}>
            {t.footer.support}
          </Link>
        </div>

        <div className="text-sm text-muted-light">
          {t.footer.copyright(new Date().getFullYear())}
        </div>
      </div>
    </footer>
  );
}
