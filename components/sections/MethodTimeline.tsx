'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

const steps = [
  {
    number: '01',
    title: 'Capture',
    description: 'Understand the system, users, and flow.',
  },
  {
    number: '02',
    title: 'Architect',
    description: 'Design modular structures & data layers.',
  },
  {
    number: '03',
    title: 'Generate',
    description: 'AI-powered code, documentation & flows.',
  },
  {
    number: '04',
    title: 'Integrate',
    description: 'Connect with APIs, ERP, or Web3.',
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Ship production-ready in days.',
  },
];

export function MethodTimeline() {
  return (
    <Section id="method">
      <div className="mb-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-serif text-4xl font-normal text-primary md:text-5xl lg:text-6xl"
        >
          The <em className="italic">Method</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-secondary"
        >
          A proven framework to build faster, smarter, and more structured
          digital ecosystems.
        </motion.p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="absolute left-8 top-0 h-full w-px origin-top bg-gradient-to-b from-accent via-accent/30 to-transparent md:left-1/2"
        />

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative flex items-start gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Number */}
              <div className="relative z-10 flex h-16 w-16 flex-shrink-0 items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-bg-card">
                  <span className="font-serif text-2xl font-medium text-accent">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className={`flex-1 rounded-2xl border border-line/30 bg-bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 md:w-[calc(50%-4rem)] ${
                  index % 2 === 0
                    ? 'md:mr-auto md:text-right'
                    : 'md:ml-auto md:text-left'
                }`}
              >
                <h3 className="mb-3 font-serif text-2xl font-medium text-primary">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-secondary">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
