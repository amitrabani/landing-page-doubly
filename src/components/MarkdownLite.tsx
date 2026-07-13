import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '@/i18n/config';
import { localizedHref } from '@/i18n/links';

// Minimal renderer for the markdown-lite used by the tools-i18n content packs:
// **bold**, *em*, and [text](href). No raw HTML is ever interpreted.
//
// Internal hrefs resolve through localizedHref, which sends the reader into
// their own locale only when that page has actually been translated (the
// "related tools" prose links at tools that may not be localized yet).
// External links open in a new tab.

function renderInline(text: string, locale: Locale, keyBase: string): ReactNode[] {
  // Links first so their bodies can still contain bold/em.
  const nodes: ReactNode[] = [];
  const linkRe = /\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let i = 0;
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) nodes.push(...renderEmphasis(text.slice(last, m.index), `${keyBase}-t${i}`));
    const href = localizedHref(locale, m[2]);
    const body = renderEmphasis(m[1], `${keyBase}-lb${i}`);
    nodes.push(
      href.startsWith('/') ? (
        <Link key={`${keyBase}-l${i}`} href={href} className="text-lavender-dark underline hover:no-underline">
          {body}
        </Link>
      ) : (
        <a
          key={`${keyBase}-l${i}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lavender-dark underline hover:no-underline"
        >
          {body}
        </a>
      ),
    );
    last = m.index + m[0].length;
    i++;
  }
  if (last < text.length) nodes.push(...renderEmphasis(text.slice(last), `${keyBase}-t${i}`));
  return nodes;
}

function renderEmphasis(text: string, keyBase: string): ReactNode[] {
  // **bold** then *em* inside the remaining plain segments.
  const nodes: ReactNode[] = [];
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  parts.forEach((part, idx) => {
    if (idx % 2 === 1) {
      nodes.push(<strong key={`${keyBase}-b${idx}`}>{part}</strong>);
      return;
    }
    const emParts = part.split(/\*([^*]+)\*/g);
    emParts.forEach((ep, j) => {
      if (!ep) return;
      if (j % 2 === 1) nodes.push(<em key={`${keyBase}-e${idx}-${j}`}>{ep}</em>);
      else nodes.push(ep);
    });
  });
  return nodes;
}

/** Renders one markdown-lite string as inline content (no wrapping element). */
export function InlineMd({ text, locale }: { text: string; locale: Locale }) {
  return <>{renderInline(text, locale, 'md')}</>;
}

/** Renders a \n\n-separated markdown-lite string as styled paragraphs. */
export function ParagraphsMd({
  text,
  locale,
  className = 'text-base text-charcoal-light leading-7 mb-4',
}: {
  text: string;
  locale: Locale;
  className?: string;
}) {
  const paragraphs = text.split(/\n\n+/).filter((p) => p.trim());
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i} className={className}>
          {renderInline(p, locale, `p${i}`)}
        </p>
      ))}
    </>
  );
}
