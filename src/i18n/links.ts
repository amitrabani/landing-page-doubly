import { defaultLocale, type Locale } from './config';
import { toolHref, toolsHubHref, learnHref } from './toolsManifest';

// Single resolver for every English-authored internal href that gets rendered on
// a localized page (breadcrumbs, "related tools" prose, nav, footer).
//
// It sends the visitor into their own locale ONLY when that localized page
// actually exists, and otherwise leaves the link pointing at the English page.
// Blindly prefixing "/{locale}" would 404 on any page not translated yet — the
// translation rollout is progressive, so that is the common case, not the edge.
export function localizedHref(locale: Locale, href: string): string {
  // External links, anchors, mailto: untouched.
  if (!href.startsWith('/')) return href;
  if (locale === defaultLocale) return href;

  // The homepage is translated into every locale.
  if (href === '/') return `/${locale}`;

  if (href === '/tools') return toolsHubHref(locale);
  if (href === '/learn') return learnHref(locale);

  const tool = href.match(/^\/tools\/([a-z0-9-]+)$/);
  if (tool) return toolHref(locale, tool[1]);

  // /privacy, /terms, /support and anything else are English-only.
  return href;
}
