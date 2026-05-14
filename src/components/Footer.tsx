import Link from 'next/link';
import Image from 'next/image';
import t from '@/translations/en';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-charcoal/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/icon-192.png" alt="Doubly" width={28} height={28} className="rounded-lg" />
          <span className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal">
            {t.footer.brand}
          </span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link href="/tools" className="text-sm text-muted hover:text-charcoal transition-colors">
            Tools
          </Link>
          <Link href="/learn" className="text-sm text-muted hover:text-charcoal transition-colors">
            Learn
          </Link>
          <Link href="/privacy" className="text-sm text-muted hover:text-charcoal transition-colors">
            {t.footer.privacy}
          </Link>
          <Link href="/terms" className="text-sm text-muted hover:text-charcoal transition-colors">
            {t.footer.terms}
          </Link>
          <Link href="/support" className="text-sm text-muted hover:text-charcoal transition-colors">
            {t.footer.support}
          </Link>
        </div>

        <div className="text-sm text-muted-light">
          {t.footer.copyright(new Date().getFullYear())}
        </div>
      </div>
    </footer>
  );
}
