'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

// Navigation structure with mega-menu columns
const navGroups = [
  {
    label: 'Services',
    items: [
      { label: 'What We Build', href: '#build', description: 'AI-powered systems and platforms' },
      { label: 'Our Method', href: '#method', description: 'Rapid development process' },
      { label: 'Enterprise', href: '#enterprise', description: 'Scalable enterprise solutions' },
    ],
  },
  {
    label: 'Work',
    items: [
      { label: 'Case Studies', href: '#cases', description: 'Client success stories' },
      { label: 'Testimonials', href: '#testimonials', description: 'What clients say' },
    ],
  },
  {
    label: 'Company',
    items: [
      { label: 'About Us', href: '#about', description: 'Our mission and team' },
      { label: 'Pricing', href: '#pricing', description: 'Transparent packages' },
      { label: 'How We Work', href: '#how-we-work', description: 'Collaboration process' },
    ],
  },
];

// Chevron icon component
function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.svg
      animate={{ rotate: isOpen ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </motion.svg>
  );
}

// Mega Menu Panel (desktop)
function MegaMenu({
  isOpen,
  onClose,
  triggerRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      // Don't close if clicking the trigger button or inside the menu
      if (triggerRef.current?.contains(target)) return;
      if (menuRef.current?.contains(target)) return;
      onClose();
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose, triggerRef]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 right-0 top-full z-50 border-t border-line/30 mega-menu-panel"
        >
          <div className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
            <div className="grid grid-cols-4 gap-8">
              {/* Navigation Columns */}
              {navGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-secondary">
                    {group.label}
                  </h3>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={onClose}
                          className="group flex items-start gap-3 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-bg-elevated"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
                          <div>
                            <span className="block text-sm font-medium text-primary group-hover:text-accent">
                              {item.label}
                            </span>
                            <span className="block text-xs text-secondary">
                              {item.description}
                            </span>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* CTA Column */}
              <div className="flex flex-col justify-between rounded-2xl bg-bg-elevated p-6">
                <div>
                  <h3 className="mb-2 font-serif text-xl text-primary">
                    Ready to build?
                  </h3>
                  <p className="text-sm text-secondary">
                    Start your project in days, not months. MVP delivery in 5-7 days.
                  </p>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
                >
                  Start Project
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Mobile Accordion component
function MobileAccordion({
  group,
  isOpen,
  onToggle,
  onNavigate,
}: {
  group: (typeof navGroups)[0];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <div className="border-b border-line/30">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-2xl font-normal text-primary">{group.label}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="space-y-1 pb-4 pl-4">
              {group.items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={onNavigate}
                  className="block py-2 text-lg text-secondary transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
        setOpenMobileAccordion(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleMobileNavigate = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileAccordion(null);
  };

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
        isScrolled
          ? 'border-b border-line/30 header-translucent'
          : 'bg-transparent'
      )}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-24 lg:px-12"
        aria-label="Main navigation"
      >
        {/* Logo - Left */}
        <a
          href="#hero"
          className="font-serif text-xl font-medium tracking-tight text-primary transition-colors hover:text-accent lg:text-2xl"
          aria-label="Vertek.lab - Home"
        >
          VERTEK<span className="text-accent">.lab</span>
        </a>

        {/* Right side - Theme Toggle & Menu */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Menu Button - Hamburger */}
          <button
            ref={menuButtonRef}
            className="relative z-50 flex h-10 w-10 items-center justify-center"
            aria-label={isMegaMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMegaMenuOpen}
            onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <motion.span
                animate={{
                  rotate: isMegaMenuOpen ? 45 : 0,
                  y: isMegaMenuOpen ? 5 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-0.5 w-6 bg-primary"
              />
              <motion.span
                animate={{
                  rotate: isMegaMenuOpen ? -45 : 0,
                  y: isMegaMenuOpen ? -5 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-0.5 w-6 bg-primary"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mega Menu - Desktop */}
      <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} triggerRef={menuButtonRef} />

      {/* Mobile Menu - Full screen panel with accordions */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-0 z-40 overflow-y-auto bg-bg"
          >
            <div className="flex min-h-full flex-col px-6 pb-12 pt-24">
              {/* Navigation Accordions */}
              <nav className="flex-1">
                {navGroups.map((group, index) => (
                  <motion.div
                    key={group.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <MobileAccordion
                      group={group}
                      isOpen={openMobileAccordion === group.label}
                      onToggle={() =>
                        setOpenMobileAccordion(
                          openMobileAccordion === group.label ? null : group.label
                        )
                      }
                      onNavigate={handleMobileNavigate}
                    />
                  </motion.div>
                ))}

                {/* Direct Contact link in mobile */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="border-b border-line/30"
                >
                  <a
                    href="#contact"
                    onClick={handleMobileNavigate}
                    className="block py-5 font-serif text-2xl font-normal text-primary transition-colors hover:text-accent"
                  >
                    Contact
                  </a>
                </motion.div>
              </nav>

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
                  onClick={handleMobileNavigate}
                >
                  Start a Project
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </motion.div>

              {/* Footer info in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45 }}
                className="mt-12 border-t border-line/30 pt-8"
              >
                <p className="text-sm text-secondary">contact@vertek.lab</p>
                <p className="mt-1 text-sm text-secondary/60">Latin America & Global</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
