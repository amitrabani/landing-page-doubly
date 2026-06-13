'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { EASE, VIEWPORT_ONCE } from '@/lib/motion';
import type { JSX, ReactNode } from 'react';

type Props = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Reveal character by character (kinetic) instead of word by word. */
  byChar?: boolean;
  /** Render a highlighted segment: words matching this exact substring get highlightClassName. */
  highlight?: string;
  highlightClassName?: string;
};

/**
 * Reveals text when scrolled into view: each unit (word, or character when `byChar`)
 * rises out from behind a mask. The full string stays in the DOM (aria-label) so SEO
 * and screen readers always see the original copy verbatim.
 */
export default function WordReveal({
  text,
  as = 'span',
  className,
  delay = 0,
  stagger = 0.045,
  byChar = false,
  highlight,
  highlightClassName,
}: Props) {
  const reduced = useReducedMotion();
  const Tag = motion[as as 'span'] as typeof motion.span;

  if (reduced) {
    if (highlight && text.includes(highlight)) {
      const [before, after] = text.split(highlight);
      return (
        <Tag className={className}>
          {before}
          <span className={highlightClassName}>{highlight}</span>
          {after}
        </Tag>
      );
    }
    return <Tag className={className}>{text}</Tag>;
  }

  // Mark which word indices fall inside the highlight substring.
  const words = text.split(' ');
  const highlightSet = new Set<number>();
  if (highlight && text.includes(highlight)) {
    const startChar = text.indexOf(highlight);
    const endChar = startChar + highlight.length;
    let cursor = 0;
    words.forEach((w, i) => {
      const wStart = cursor;
      const wEnd = cursor + w.length;
      if (wStart < endChar && wEnd > startChar) highlightSet.add(i);
      cursor = wEnd + 1;
    });
  }

  const maskClass = 'inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]';

  if (byChar) {
    // Character cascade. Words stay unbreakable; a running index keeps the stagger
    // continuous across the whole headline.
    const charStagger = stagger * 0.42;
    let charIndex = 0;
    return (
      <Tag className={className} aria-label={text}>
        {words.map((word, wi) => {
          const highlighted = highlightSet.has(wi) && highlightClassName ? highlightClassName : '';
          const node = (
            <span key={wi} aria-hidden className={'inline-block whitespace-nowrap ' + highlighted}>
              {Array.from(word).map((ch) => {
                const idx = charIndex++;
                return (
                  <span key={idx} className={maskClass}>
                    <motion.span
                      className="inline-block"
                      initial={{ y: '115%', opacity: 0 }}
                      whileInView={{ y: '0%', opacity: 1 }}
                      viewport={VIEWPORT_ONCE}
                      transition={{ duration: 0.62, delay: delay + idx * charStagger, ease: EASE }}
                    >
                      {ch}
                    </motion.span>
                  </span>
                );
              })}
            </span>
          );
          // Real space between words for natural wrapping/spacing.
          charIndex++;
          return wi < words.length - 1 ? [node, <span key={`s${wi}`}> </span>] : node;
        })}
      </Tag>
    );
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} aria-hidden className={maskClass}>
          <motion.span
            className={'inline-block ' + (highlightSet.has(i) && highlightClassName ? highlightClassName : '')}
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.65, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Wraps arbitrary children in the same masked-rise reveal (for mixed JSX headlines). */
export function LineReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <span className={className}>{children}</span>;
  return (
    <span className={'inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em] ' + (className ?? '')}>
      <motion.span
        className="inline-block"
        initial={{ y: '110%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.65, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}
