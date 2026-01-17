'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  'Diseño de Producto',
  'Desarrollo de Software',
  'Inteligencia Artificial',
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#5D04F6]"
    >
      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col px-4 pt-24 sm:pt-28 md:pt-32 lg:px-6 lg:pt-48">
        {/* Services List - Left aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-1 lg:gap-2"
        >
          {services.map((service, index) => (
            <motion.span
              key={service}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-base font-normal leading-relaxed text-[#E6E6E6] lg:text-lg"
            >
              {service}
            </motion.span>
          ))}
        </motion.div>

        {/* Large "vertek" logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="mt-auto pb-8 lg:pb-12"
        >
          <Image
            src="/images/vertek-logo-large.svg"
            alt="vertek"
            width={706}
            height={164}
            className="w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[45vw] h-auto select-none"
            priority
          />
        </motion.div>
      </div>

      {/* Right side: Vertical line with scroll indicator */}
      <motion.a
        href="#build"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0.7, 1],
        }}
        transition={{
          opacity: { delay: 0.5, duration: 2, repeat: Infinity, repeatDelay: 1 }
        }}
        className="absolute bottom-8 right-12 hidden lg:block group"
        aria-label="Scroll down"
      >
        <svg
          width="31"
          height="345"
          viewBox="0 0 31 347"
          fill="none"
        >
          <path d="M15.3535 0V345.5" stroke="#E6E6E6" />
          <path d="M30.3535 330.5L15.3535 345.5L0.353546 330.5" stroke="#E6E6E6" />
        </svg>
      </motion.a>

      {/* Mobile scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 lg:hidden"
      >
        <motion.a
          href="#build"
          className="flex flex-col items-center"
          aria-label="Scroll down"
        >
          <motion.svg
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            width="24"
            height="12"
            viewBox="0 0 30.7071 16.0607"
            fill="none"
            className="text-[#e6e6e6]"
          >
            <path d="M30.3536 0.353553L15.3536 15.3536L0.353553 0.353553" stroke="currentColor" />
          </motion.svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
