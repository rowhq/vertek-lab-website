'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// Navigation items with numbers - Webisoft style
const navItems = [
  { number: '01', label: 'Services', href: '#services' },
  { number: '02', label: 'Projects', href: '#cases' },
  { number: '03', label: 'Expertise', href: '#method' },
  { number: '04', label: 'Contact', href: '#contact' },
];

// Sidebar Menu - Webisoft style
function SidebarMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/20"
            onClick={onClose}
          />

          {/* Sidebar Panel */}
          <motion.div
            ref={menuRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-0 top-0 z-50 flex h-full w-full max-w-lg flex-col bg-[#f5f5f5]"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-8">
              <div>
                <a href="#hero" onClick={onClose} className="block">
                  <span className="text-3xl font-bold tracking-tight text-black">VERTEK</span>
                  <span className="text-3xl font-bold tracking-tight text-accent">.lab</span>
                </a>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-secondary">
                  Development Labs
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-black transition-colors hover:text-accent"
                aria-label="Close menu"
              >
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Items - Numbered */}
            <nav className="flex-1 px-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <a
                    href={item.href}
                    onClick={onClose}
                    className="group flex items-center gap-6 border-b border-dashed border-gray-300 py-5 transition-colors hover:text-accent"
                  >
                    <span className="text-sm font-medium text-secondary group-hover:text-accent">
                      {item.number}
                    </span>
                    <span className="text-2xl font-medium text-black group-hover:text-accent">
                      {item.label}
                    </span>
                    {item.label === 'Services' && (
                      <span className="ml-auto text-secondary group-hover:text-accent">+</span>
                    )}
                  </a>
                </motion.div>
              ))}
            </nav>

            {/* Footer CTA - Salmon background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-accent p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-black/70">
                    Contact Us
                  </p>
                  <p className="mt-1 text-2xl font-medium text-black">LET&apos;S TALK</p>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  className="flex h-12 w-12 items-center justify-center border border-black/20 text-black transition-all hover:bg-black hover:text-white"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
              <div className="mt-4 flex items-center gap-2 border-t border-dashed border-black/20 pt-4">
                <span className="text-sm text-black/70">/</span>
                <span className="text-sm font-medium text-black">V034671</span>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-0 z-50 transition-all duration-500',
        isScrolled
          ? 'border-b border-line bg-white/95 backdrop-blur-md'
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
          className="group flex flex-col"
          aria-label="Vertek.lab - Home"
        >
          <span className="text-xl font-bold tracking-tight text-black transition-colors group-hover:text-accent lg:text-2xl">
            VERTEK<span className="text-accent">.lab</span>
          </span>
          <span className="hidden text-[10px] font-medium uppercase tracking-[0.15em] text-secondary lg:block">
            Development Labs
          </span>
        </a>

        {/* Right side - CTA & Menu */}
        <div className="flex items-center gap-4 lg:gap-6">
          {/* Let's Talk Button - Desktop only */}
          <a
            href="#contact"
            className="hidden items-center gap-2 bg-black px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-gray-800 lg:inline-flex"
          >
            Let&apos;s Talk
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Menu Button - Hamburger */}
          <button
            className="relative z-50 flex h-10 w-10 items-center justify-center"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="flex flex-col items-center justify-center gap-1.5">
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 4 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-0.5 w-6 bg-black"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -4 : 0,
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block h-0.5 w-6 bg-black"
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
