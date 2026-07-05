'use client';

import { motion } from 'framer-motion';
import { SPRING_SNAPPY } from '@/lib/motion';
import { APP_STORE_URL, trackAppStoreClick, type AppStorePlacement } from '@/lib/appStore';
import t from '@/translations/en';

/**
 * Small App Store pill CTA that sits under a demo section.
 * Placement is required so every click lands in PostHog with its source.
 */
export default function TryInDoublyCTA({
  placement,
  label = t.common.tryInDoubly,
  className = '',
}: {
  placement: AppStorePlacement;
  label?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className={`text-center ${className}`}
    >
      <motion.a
        href={APP_STORE_URL}
        onClick={() => trackAppStoreClick(placement)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={SPRING_SNAPPY}
        className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-7 py-3 text-sm font-medium hover:bg-charcoal-light transition-colors shadow-lg shadow-charcoal/10"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
        </svg>
        {label}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.a>
    </motion.div>
  );
}
