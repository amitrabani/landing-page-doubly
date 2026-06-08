import t from '@/translations/en';

const APP_STORE_URL =
  'https://apps.apple.com/us/app/adhd-planner-doubly/id6760469944?ppid=cc9063af-1b63-4ba2-842d-e5f979b03beb';

export default function AppStoreButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-block transition-transform hover:scale-[1.03] active:scale-[0.98] ${className}`}
    >
      <img src="/app-store-badge.svg" alt={t.hero.cta} className="h-14 w-auto" />
    </a>
  );
}
