'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-32 lg:px-12">
        {/* Technical identifier */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="text-xs font-medium text-secondary">/0026</span>
          <span className="text-xs font-medium uppercase tracking-wider text-secondary">
            Engineering_
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl text-5xl font-medium leading-[1.1] tracking-tight text-black md:text-6xl lg:text-7xl"
        >
          An Elite Team of{' '}
          <span className="text-accent">Software Engineers</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 max-w-xl text-lg text-secondary md:text-xl"
        >
          We design and build intelligent systems — fast, modular, and built to scale.
          AI-First engineering for Web2 & Web3.
        </motion.p>

        {/* Location tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-6 flex items-center gap-2"
        >
          <span className="text-xs font-medium text-secondary">LATAM/GLOBAL</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-col items-start gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-white transition-all hover:bg-gray-800"
          >
            Start a Project
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border-2 border-black px-8 py-4 text-sm font-medium uppercase tracking-wider text-black transition-all hover:bg-black hover:text-white"
          >
            Explore
          </a>
        </motion.div>
      </div>

      {/* Side decoration - vertical text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-24 right-8 hidden -rotate-90 transform lg:block"
      >
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-secondary">
          Scroll to explore
        </span>
      </motion.div>

      {/* Bottom border decoration */}
      <div className="absolute bottom-0 left-0 right-0 border-b border-dashed border-line-dark" />
    </section>
  );
}
