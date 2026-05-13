'use client';

import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://events.usedoubly.com',
    ui_host: 'https://us.posthog.com',
    person_profiles: 'always',
    capture_pageview: false, // we capture manually below
    capture_pageleave: true,
    loaded: (ph) => {
      // The project has defaultIdentifiedOnly=true, so anonymous sessions get
      // dropped server-side. Promote every visitor to identified using a
      // stable client-generated UUID stored in localStorage. We can't pass
      // the existing anon distinct_id — PostHog treats that as a no-op.
      const STORAGE_KEY = 'doubly_web_visitor_id';
      let visitorId: string | null = null;
      try {
        visitorId = window.localStorage.getItem(STORAGE_KEY);
        if (!visitorId) {
          visitorId =
            typeof crypto !== 'undefined' && 'randomUUID' in crypto
              ? `web_${crypto.randomUUID()}`
              : `web_${Date.now()}_${Math.random().toString(36).slice(2)}`;
          window.localStorage.setItem(STORAGE_KEY, visitorId);
        }
      } catch {
        visitorId = `web_${Date.now()}_${Math.random().toString(36).slice(2)}`;
      }
      if (visitorId && ph.get_distinct_id() !== visitorId) {
        ph.identify(visitorId);
      }
    },
  });
}

function PostHogPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const ph = usePostHog();

  useEffect(() => {
    if (pathname && ph) {
      let url = window.origin + pathname;
      if (searchParams.toString()) {
        url = url + '?' + searchParams.toString();
      }
      ph.capture('$pageview', { $current_url: url });
    }
  }, [pathname, searchParams, ph]);

  return null;
}

export default function PostHogProvider({ children }: { children: React.ReactNode }) {
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    return <>{children}</>;
  }

  return (
    <PHProvider client={posthog}>
      <Suspense fallback={null}>
        <PostHogPageView />
      </Suspense>
      {children}
    </PHProvider>
  );
}
