'use client';

import { motion } from 'framer-motion';

const services = [
  {
    number: 'S/001',
    title: 'Advisory',
    description: 'Strategic consulting for digital transformation and technology roadmaps.',
    link: '#contact',
  },
  {
    number: 'S/002',
    title: 'AI Development',
    description: 'Custom AI solutions, machine learning models, and intelligent automation systems.',
    link: '#contact',
  },
  {
    number: 'S/003',
    title: 'Product Development',
    description: 'Full-stack web and mobile applications from concept to launch in weeks, not months.',
    link: '#contact',
  },
  {
    number: 'S/004',
    title: 'Enterprise Software',
    description: 'Scalable enterprise solutions with seamless integration to existing systems.',
    link: '#contact',
  },
  {
    number: 'S/005',
    title: 'Blockchain & Web3',
    description: 'DeFi platforms, smart contracts, and decentralized applications.',
    link: '#contact',
  },
];

export function Capabilities() {
  return (
    <section id="services" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 border-b border-dashed border-line-dark pb-8">
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-secondary">01</span>
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              Services
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl font-medium tracking-tight text-black md:text-5xl"
          >
            What We Build
          </motion.h2>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group border-b border-dashed border-line-dark"
            >
              <a
                href={service.link}
                className="flex flex-col gap-4 py-8 transition-colors hover:bg-gray-50 lg:flex-row lg:items-center lg:gap-12"
              >
                {/* Number */}
                <span className="text-sm font-medium text-secondary lg:w-20">
                  {service.number}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-medium text-black transition-colors group-hover:text-accent lg:w-64">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-secondary">
                  {service.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center justify-end">
                  <span className="flex h-10 w-10 items-center justify-center border border-line-dark transition-all group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-between"
        >
          <p className="text-sm text-secondary">
            Looking for something specific?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider text-black transition-colors hover:text-accent"
          >
            See our services
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
