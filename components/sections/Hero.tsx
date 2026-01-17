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
      <div className="relative z-10 flex min-h-screen flex-col px-4 pt-36 sm:pt-40 md:pt-44 lg:px-6 lg:pt-48">
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
            className="w-[70vw] max-w-xs sm:w-[60vw] sm:max-w-md md:w-[50vw] md:max-w-lg lg:w-[45vw] lg:max-w-none h-auto select-none"
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
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-8 lg:bottom-8 lg:right-12 block group"
        aria-label="Scroll down"
      >
        <svg
          className="w-[20px] h-[200px] sm:w-[25px] sm:h-[280px] lg:w-[31px] lg:h-[345px]"
          viewBox="0 0 31 347"
          fill="none"
        >
          <path d="M15.3535 0V345.5" stroke="#E6E6E6" />
          <path d="M30.3535 330.5L15.3535 345.5L0.353546 330.5" stroke="#E6E6E6" />
        </svg>
      </motion.a>
    </section>
  );
}
