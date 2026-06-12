'use client';

import { useState, useEffect } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
} from 'framer-motion';
import type { Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import t from '@/translations/en';
import { EASE, SPRING, SPRING_SOFT } from '@/lib/motion';

const SECTION_IDS = ['how-it-works', 'testimonials', 'faq'] as const;

const menuVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { when: 'afterChildren', staggerChildren: 0.05, staggerDirection: -1 },
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const menuItemVariants: Variants = {
  hidden: { opacity: 0, y: 18, transition: { duration: 0.25, ease: EASE } },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollY } = useScroll();
  const navPaddingY = useTransform(scrollY, [0, 120], [16, 10]);
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.9]);
  const blurAmount = useTransform(scrollY, [0, 80], [0, 16]);
  const shadowOpacity = useTransform(scrollY, [0, 80], [0, 0.05]);
  const backgroundColor = useMotionTemplate`rgba(251, 248, 243, ${bgOpacity})`;
  const backdropFilter = useMotionTemplate`blur(${blurAmount}px)`;
  const boxShadow = useMotionTemplate`0 1px 3px rgba(0, 0, 0, ${shadowOpacity})`;

  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 20));

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (elements.length === 0) return;
    const inView = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) inView.add(entry.target.id);
          else inView.delete(entry.target.id);
        });
        setActiveSection(SECTION_IDS.find((id) => inView.has(id)) ?? null);
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navLinks = [t.navbar.howItWorks, t.navbar.testimonials, t.navbar.faq];
  const desktopLinks = [
    { id: 'how-it-works', label: t.navbar.howItWorks },
    { id: 'testimonials', label: t.navbar.testimonials },
    { id: 'faq', label: t.navbar.faq },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 ${
          prefersReducedMotion
            ? scrolled
              ? 'bg-cream/90 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] py-2.5'
              : 'bg-transparent py-4'
            : ''
        }`}
        style={
          prefersReducedMotion
            ? undefined
            : {
                paddingTop: navPaddingY,
                paddingBottom: navPaddingY,
                backgroundColor,
                backdropFilter,
                WebkitBackdropFilter: backdropFilter,
                boxShadow,
              }
        }
      >
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon-192.png" alt="Doubly" width={32} height={32} className="rounded-lg" />
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold text-charcoal">
              {t.navbar.brand}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/tools" className="text-sm text-muted hover:text-charcoal transition-colors">
              Tools
            </Link>
            {desktopLinks.map(({ id, label }) => (
              <Link
                key={id}
                href={`/#${id}`}
                className="relative text-sm text-muted hover:text-charcoal transition-colors"
              >
                {label}
                {activeSection === id && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 rounded-full bg-lavender-dark"
                    transition={prefersReducedMotion ? { duration: 0 } : SPRING_SOFT}
                  />
                )}
              </Link>
            ))}
            <a
              href="https://apps.apple.com/us/app/adhd-planner-doubly/id6760469944?ppid=cc9063af-1b63-4ba2-842d-e5f979b03beb"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal text-cream px-5 py-2.5 text-sm font-medium hover:bg-charcoal-light transition-colors"
            >
              {t.navbar.cta}
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label={t.navbar.toggleMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <motion.path
                d="M4 8h16M4 16h16"
                initial={false}
                animate={
                  mobileOpen
                    ? { opacity: 0, rotate: 45, scale: 0.85 }
                    : { opacity: 1, rotate: 0, scale: 1 }
                }
                transition={prefersReducedMotion ? { duration: 0 } : SPRING}
              />
              <motion.path
                d="M18 6L6 18M6 6l12 12"
                initial={false}
                animate={
                  mobileOpen
                    ? { opacity: 1, rotate: 0, scale: 1 }
                    : { opacity: 0, rotate: -45, scale: 0.85 }
                }
                transition={prefersReducedMotion ? { duration: 0 } : SPRING}
              />
            </svg>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed inset-0 z-40 bg-cream pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <motion.div variants={menuItemVariants}>
                <Link
                  href="/tools"
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-medium text-charcoal"
                >
                  Tools
                </Link>
              </motion.div>
              {navLinks.map((item) => (
                <motion.div key={item} variants={menuItemVariants}>
                  <Link
                    href={`/#${item.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-xl font-medium text-charcoal"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.a
                variants={menuItemVariants}
                href="https://apps.apple.com/us/app/adhd-planner-doubly/id6760469944?ppid=cc9063af-1b63-4ba2-842d-e5f979b03beb"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-charcoal text-cream px-6 py-3 text-lg font-medium mt-4"
              >
                {t.navbar.cta}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
