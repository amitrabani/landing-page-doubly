'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Image src="/icon-192.png" alt="Doubly" width={32} height={32} className="rounded-lg" />
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal">
              doubly
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-muted hover:text-charcoal transition-colors">
              How it works
            </a>
            <a href="#features" className="text-sm text-muted hover:text-charcoal transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-sm text-muted hover:text-charcoal transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-sm text-muted hover:text-charcoal transition-colors">
              FAQ
            </a>
            <a
              href="#get-doubly"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-5 py-2.5 text-sm font-medium hover:bg-charcoal-light transition-colors"
            >
              Get Doubly
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-40 bg-cream pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['How it works', 'Features', 'Testimonials', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-medium text-charcoal"
                >
                  {item}
                </a>
              ))}
              <a
                href="#get-doubly"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-charcoal text-cream px-6 py-3 text-lg font-medium mt-4"
              >
                Get Doubly
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
