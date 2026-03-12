export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-charcoal/5">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="font-[family-name:var(--font-display)] text-xl font-bold text-charcoal">
          doubly
        </div>

        <div className="flex items-center gap-8">
          <a href="#" className="text-sm text-muted hover:text-charcoal transition-colors">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted hover:text-charcoal transition-colors">
            Terms
          </a>
          <a href="#" className="text-sm text-muted hover:text-charcoal transition-colors">
            Contact
          </a>
        </div>

        <div className="text-sm text-muted-light">
          &copy; {new Date().getFullYear()} Doubly. Built for ADHD brains.
        </div>
      </div>
    </footer>
  );
}
