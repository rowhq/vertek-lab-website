'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Navigation items
type NavItem = {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  {
    label: 'Servicios',
    href: '#capabilities',
    hasSubmenu: true,
    submenu: [
      { label: 'Diseño de Producto', href: '#diseno-producto' },
      { label: 'Desarrollo de Software', href: '#desarrollo-software' },
      { label: 'Inteligencia Artificial', href: '#inteligencia-artificial' },
    ],
  },
  { label: 'Proceso', href: '#how-we-work' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Contacto', href: '/contacto' },
];

// Sidebar Menu
function SidebarMenu({
  isOpen,
  onClose,
  isScrolled,
}: {
  isOpen: boolean;
  onClose: () => void;
  isScrolled: boolean;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Sidebar Panel - Webisoft-style animation */}
          <motion.div
            ref={menuRef}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: 'top' }}
            className="fixed left-4 right-4 top-4 z-50 w-auto max-w-[463px] lg:right-auto lg:w-[463px]"
          >
            {/* Menu container with chamfered bottom-left corner */}
            <div className="relative">
              {/* Background SVG with chamfered corner */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 463 716"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0H463V716H9L0 707V0Z"
                  fill="#E6E6E6"
                />
              </svg>

              {/* Content */}
              <div className="relative z-10 flex h-[min(716px,calc(100vh-32px))] flex-col justify-between overflow-y-auto">
                {/* Top section */}
                <div>
                  {/* Header - altura condicional según scroll */}
                  <div className={`flex items-start justify-between ${isScrolled ? 'h-[80px]' : 'h-[116px]'}`}>
                    {/* Logo + Text */}
                    <div className={`flex items-start gap-6 px-4 py-3 ${isScrolled ? 'h-[80px]' : 'h-[116px]'}`}>
                      <a href="/" onClick={onClose} className={`flex items-start gap-6 ${isScrolled ? 'h-full' : ''}`}>
                        <div className="relative h-[52px] w-[65px] shrink-0">
                          <Image
                            src="/images/vertek-isotipo.svg"
                            alt="Vertek"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className={`flex flex-col justify-between ${isScrolled ? 'h-full' : 'h-[92px]'}`}>
                          <div className={`relative ${isScrolled ? 'h-[16px] w-[69px]' : 'h-[13px] w-[56px]'}`}>
                            <Image
                              src="/images/vertek-wordmark.svg"
                              alt="vertek"
                              fill
                              className="object-contain"
                            />
                          </div>
                          <p className="text-[14px] text-black whitespace-nowrap" style={{ fontFamily: 'Helvetica Neue, sans-serif', lineHeight: 1.05 }}>
                            Laboratorio de productos AI-First
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Close button */}
                    <div className={`flex w-[119px] items-center justify-center border-l border-gray-300 ${isScrolled ? 'h-[80px]' : 'h-[116px]'}`}>
                      <button
                        onClick={onClose}
                        className="text-black transition-colors hover:text-purple"
                        aria-label="Close menu"
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Navigation Items */}
                  <nav className="flex flex-col gap-6 pt-14 pb-12">
                    {/* Top line */}
                    <div className="h-px w-full bg-gray-200" />

                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                        className="flex flex-col gap-6"
                      >
                        {item.hasSubmenu ? (
                          // Item con submenu (Servicios)
                          <>
                            <button
                              onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                              className="group flex w-full items-center justify-between px-4 pr-8 text-black transition-colors hover:text-purple"
                            >
                              <span className="text-xl sm:text-2xl lg:text-[28px]" style={{ fontFamily: 'Helvetica Neue, sans-serif', lineHeight: 1.5 }}>
                                {item.label}
                              </span>
                              <motion.svg
                                animate={{ rotate: expandedItem === item.label ? 45 : 0 }}
                                transition={{ duration: 0.2 }}
                                className="h-4 w-4 text-black group-hover:text-purple"
                                fill="none"
                                viewBox="0 0 16 16"
                                stroke="currentColor"
                                strokeWidth={1.5}
                              >
                                <path d="M8 1v14M1 8h14" />
                              </motion.svg>
                            </button>
                            <AnimatePresence>
                              {expandedItem === item.label && item.submenu && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="flex flex-col gap-4 pl-8 pb-2">
                                    {item.submenu.map((subItem) => (
                                      <a
                                        key={subItem.label}
                                        href={subItem.href}
                                        onClick={onClose}
                                        className="text-[18px] text-black/70 transition-colors hover:text-purple"
                                        style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
                                      >
                                        {subItem.label}
                                      </a>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          // Item simple sin submenu (Proceso, Proyectos, Contacto)
                          <a
                            href={item.href}
                            onClick={onClose}
                            className="group flex items-center justify-between px-4 pr-8 text-black transition-colors hover:text-purple"
                          >
                            <span className="text-xl sm:text-2xl lg:text-[28px]" style={{ fontFamily: 'Helvetica Neue, sans-serif', lineHeight: 1.5 }}>
                              {item.label}
                            </span>
                          </a>
                        )}
                        <div className="h-px w-full bg-gray-200" />
                      </motion.div>
                    ))}
                  </nav>
                </div>

                {/* Footer CTA - Purple section */}
                <div className="relative h-[118px] w-full">
                  {/* Purple background with chamfered corner */}
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 463 118"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 0H463V118H9L0 109V0Z"
                      fill="#5D04F6"
                    />
                  </svg>

                  {/* CTA Content */}
                  <div className="relative z-10 flex h-full items-center justify-between pl-4 pr-0">
                    <div>
                      <p className="text-[16px] text-[#E6E6E6]" style={{ fontFamily: 'Helvetica Neue, sans-serif', lineHeight: 1.35 }}>
                        ¿Listo para comenzar?
                      </p>
                      <p className="text-[24px] text-[#E6E6E6]" style={{ fontFamily: 'Helvetica Neue, sans-serif', lineHeight: 1.35 }}>
                        Conversemos
                      </p>
                    </div>

                    {/* Arrow button */}
                    <a
                      href="/contacto"
                      onClick={onClose}
                      className="flex h-[118px] w-[118px] items-center justify-center border-l border-[#E6E6E6]/20 transition-colors hover:bg-[#E6E6E6]/10"
                    >
                      <svg className="h-[30px] w-[38px] text-[#E6E6E6]" fill="none" viewBox="0 0 38 30" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M1 15h36M23 1l14 14-14 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isInternalPage = pathname === '/proyectos' || pathname === '/contacto';

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-transparent transition-all duration-300">
      <div className="flex h-auto items-stretch justify-between p-4">
        {/* Left: Card with Logo + Text + Hamburger */}
        <div className={`relative w-auto max-w-[463px] lg:w-[463px] transition-all duration-300 ${
          isScrolled ? 'h-[80px]' : 'h-[116px]'
        }`}>
          {/* Background SVG with special shape - chamfer on bottom-left */}
          {/* viewBox y path fijos para evitar salto visual - el SVG escala con el contenedor */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 463 116"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0H463V116H9L0 107V0Z"
              fill="#E6E6E6"
            />
          </svg>
          {/* Content */}
          <div className={`relative z-10 flex w-full items-start justify-between transition-all duration-300 ${
            isScrolled ? 'h-[80px]' : 'h-[116px]'
          }`}>
            {/* Logo + Text Section */}
            <div className={`flex shrink-0 items-start gap-6 px-4 py-3 transition-all duration-300 ${
              isScrolled ? 'h-[80px]' : 'h-[116px]'
            }`}>
              <a href="/" className={`flex items-start gap-6 ${isScrolled ? 'h-full' : ''}`}>
                {/* Isotipo */}
                <div className="relative h-[52px] w-[65px] shrink-0">
                  <Image
                    src="/images/vertek-isotipo.svg"
                    alt="Vertek"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Text Content */}
                <div className={`flex shrink-0 flex-col items-start justify-between transition-all duration-300 ${
                  isScrolled ? 'h-[56px]' : 'h-[92px]'
                }`}>
                  {/* Wordmark */}
                  <div className="relative h-[13px] w-[56px] shrink-0">
                    <Image
                      src="/images/vertek-wordmark.svg"
                      alt="vertek"
                      fill
                      className="object-contain"
                    />
                  </div>

                  {/* Description */}
                  <p
                    className="not-italic text-black transition-all duration-300 whitespace-nowrap"
                    style={{
                      fontFamily: 'Helvetica Neue, sans-serif',
                      fontSize: '14px',
                      fontWeight: 400,
                      lineHeight: 1.05,
                    }}
                  >
                    Laboratorio de productos AI-First
                  </p>
                </div>
              </a>
            </div>

            {/* Hamburger Menu with separator */}
            <div className={`relative w-[119px] shrink-0 flex items-center justify-center border-l border-gray-300 transition-all duration-300 ${
              isScrolled ? 'h-[80px]' : 'h-[116px]'
            }`}>
              {/* Hamburger button */}
              <button
                className="flex flex-col items-center justify-center gap-[5px]"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? 45 : 0,
                    y: isMenuOpen ? 6 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-[1px] w-8 bg-black"
                />
                <motion.span
                  animate={{
                    opacity: isMenuOpen ? 0 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="block h-[1px] w-8 bg-black"
                />
                <motion.span
                  animate={{
                    rotate: isMenuOpen ? -45 : 0,
                    y: isMenuOpen ? -6 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-[1px] w-8 bg-black"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Right section: Tagline + CTA Button */}
        <div className="flex items-start gap-[56px]">
          {/* Tagline - hidden on internal pages and when scrolled */}
          {!isInternalPage && (
            <div className={`hidden lg:flex items-center justify-end transition-all duration-300 ${
              isScrolled ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'
            }`}>
              <p
                className="text-right text-[32px] leading-[1.35] text-[#E6E6E6] whitespace-nowrap"
                style={{
                  fontFamily: 'Helvetica Neue, sans-serif',
                  fontWeight: 500,
                }}
              >
                Sistemas estructurados.
                <br />
                Entrega acelerada.
              </p>
            </div>
          )}

          {/* CTA Button - Chamfered corners - always visible */}
          <a
            href="/contacto"
            className="group relative h-[40px] w-[160px] lg:w-[195px] transition-all"
          >
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 195 40"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0.5 0.5H186.5L194.5 8.5V39.5H8.5L0.5 31.5V0.5Z"
                className="fill-[#E6E6E6] stroke-[#E6E6E6] transition-all group-hover:fill-black group-hover:stroke-black"
                strokeWidth="1"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center gap-3">
              <span
                className="text-sm lg:text-base text-black transition-colors group-hover:text-white"
                style={{ fontFamily: 'Helvetica Neue, sans-serif' }}
              >
                Conversemos
              </span>
              <span className="text-black transition-colors group-hover:text-white">→</span>
            </div>
          </a>
        </div>
      </div>

      {/* Sidebar Menu */}
      <SidebarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} isScrolled={isScrolled} />
    </header>
  );
}
