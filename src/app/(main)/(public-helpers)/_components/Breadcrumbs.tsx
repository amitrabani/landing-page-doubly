'use client';

import Link from 'next/link';
import { useT } from '@/i18n/TranslationProvider';

type Crumb = { label: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const t = useT();

  return (
    <nav aria-label={t.toolWidgets.chrome.breadcrumbAria} className="mb-6 text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="hover:text-charcoal transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? 'text-charcoal' : ''} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              )}
              {!isLast && <span aria-hidden="true">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
