import posthog from 'posthog-js';

declare global {
  interface Window {
    // Reddit Pixel queue, present only when NEXT_PUBLIC_REDDIT_PIXEL_ID is set
    // (see src/app/RedditPixel.tsx). Optional so calls stay inert without it.
    rdt?: (...args: unknown[]) => void;
  }
}

export const APP_STORE_URL =
  'https://apps.apple.com/us/app/adhd-planner-doubly/id6760469944?ppid=cc9063af-1b63-4ba2-842d-e5f979b03beb';

/**
 * Every spot on the site that links to the App Store. Keeping this a union
 * (instead of free-form strings) keeps PostHog breakdowns clean.
 */
export type AppStorePlacement =
  | 'hero'
  | 'hero_phone'
  | 'navbar'
  | 'navbar_mobile'
  | 'sticky_bar'
  | 'brain_dump'
  | 'habit_demo'
  | 'habit_demo_all_done'
  | 'task_split_all_done'
  | 'two_questions'
  | 'final_cta'
  | 'tools_soft_cta';

export function trackAppStoreClick(placement: AppStorePlacement, extra?: Record<string, unknown>) {
  if (posthog.__loaded) {
    posthog.capture('app_store_click', {
      placement,
      path: typeof window !== 'undefined' ? window.location.pathname : undefined,
      ...extra,
    });
  }

  // Reddit conversion: an App Store click is the strongest web-side intent
  // signal (the page collects no emails/phones, so PageVisit is the only other
  // event). Fire a Lead so Reddit campaigns can optimize toward it; actual
  // installs are attributed app-side via AppsFlyer. Inert until the pixel loads.
  if (typeof window !== 'undefined') {
    window.rdt?.('track', 'Lead', { customEventName: `app_store_${placement}` });
  }
}
