'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effect for video
  const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen overflow-hidden bg-bg"
    >
      {/* Video Background */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0">
        {/* Video element - will use gradient fallback if no video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover opacity-60"
          poster="/videos/hero-poster.jpg"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
          <source src="/videos/hero-background.webm" type="video/webm" />
        </video>

        {/* Fallback gradient background if video doesn't load - Xapo dark brown */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg via-bg-dark to-accent/10" />

        {/* Overlay gradient - Xapo style video overlay */}
        <div className="absolute inset-0 video-overlay" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        {/* Partnership Badge - Xapo style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-5 py-2 backdrop-blur-sm"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-primary/60">
            Powered by
          </span>
          <span className="font-serif text-sm font-medium text-primary">Rowship</span>
        </motion.div>

        {/* Main Headline - Serif */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl font-serif text-5xl font-normal leading-[1.1] text-primary md:text-7xl lg:text-8xl"
        >
          We <em className="italic">design</em>, <em className="italic">build</em>,{' '}
          and support <span className="text-accent">intelligent</span> systems.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl text-lg font-light text-primary/80 md:text-xl"
        >
          Web2 & Web3 products built for Latin America and beyond
        </motion.p>

        {/* Delivery Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 inline-flex items-center gap-3 rounded-full border border-primary/20 bg-primary/10 px-6 py-3 backdrop-blur-sm"
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span className="text-sm font-medium text-primary">
            Typical delivery: 5-7 days for MVP systems
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-accent"
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
          </motion.a>
          <a href="#cases" className="btn-secondary">
            See Our Work
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Xapo style */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
      >
        <a
          href="#build"
          className="group flex flex-col items-center gap-3 text-primary/60 transition-colors hover:text-accent"
          aria-label="Scroll to content"
        >
          <span className="text-xs font-medium uppercase tracking-widest">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-12 w-px bg-gradient-to-b from-primary/60 to-transparent group-hover:from-accent"
          />
        </a>
      </motion.div>
    </section>
  );
}
