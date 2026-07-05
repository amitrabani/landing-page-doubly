import posthog from 'posthog-js';

export const APP_STORE_URL =
  'https://apps.apple.com/us/app/adhd-planner-doubly/id6760469944?ppid=cc9063af-1b63-4ba2-842d-e5f979b03beb';

/**
 * Every spot on the site that links to the App Store. Keeping this a union
 * (instead of free-form strings) keeps PostHog breakdowns clean.
 */
export type AppStorePlacement =
  | 'hero'
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
  if (!posthog.__loaded) return;
  posthog.capture('app_store_click', {
    placement,
    path: typeof window !== 'undefined' ? window.location.pathname : undefined,
    ...extra,
  });
}
