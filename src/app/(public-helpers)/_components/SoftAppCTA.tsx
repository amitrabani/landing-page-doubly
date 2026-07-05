'use client';

import { APP_STORE_URL, trackAppStoreClick } from '@/lib/appStore';

type Props = {
  /** Optional headline override. Defaults to "Try it in the app". */
  headline?: string;
  /** One short paragraph explaining why the app is more than the web tool. */
  body: string;
  /** Optional button label override. Defaults to "Try it in the app". */
  ctaLabel?: string;
};

export default function SoftAppCTA({
  headline = 'Try it in the app',
  body,
  ctaLabel = 'Try it in the app',
}: Props) {
  return (
    <section className="mt-16 rounded-3xl bg-warm border border-warm-dark/40 px-6 py-10 sm:px-10 sm:py-12">
      <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl min-w-0">
          <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-charcoal mb-3 leading-tight">
            {headline}
          </h2>
          <p className="text-base text-charcoal-light leading-7">{body}</p>
        </div>

        <div className="flex flex-col items-start gap-3 sm:items-end sm:shrink-0">
          <a
            href={APP_STORE_URL}
            onClick={() => trackAppStoreClick('tools_soft_cta')}
            data-cta="soft-app-cta"
            aria-label={`${ctaLabel} on the App Store`}
            className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-6 py-3 font-semibold whitespace-nowrap hover:bg-charcoal-light transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <span>{ctaLabel}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
