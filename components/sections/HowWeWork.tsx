'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

const process = [
  {
    number: '01',
    title: 'Discovery & Capture',
    timeline: 'Day 1-2',
    description:
      'System requirements mapping, stakeholder interviews, and architecture blueprint.',
    details: ['Requirements analysis', 'Technical feasibility', 'Project scoping'],
  },
  {
    number: '02',
    title: 'Design & Build',
    timeline: 'Day 3-7',
    description: 'Rapid development with oversight and quality control.',
    details: ['Modular system design', 'Production-ready code', 'Quality assurance'],
  },
  {
    number: '03',
    title: 'Deploy & Support',
    timeline: 'Day 7+',
    description:
      'Production deployment, documentation delivery, and ongoing support.',
    details: ['Production deployment', 'Full documentation', '30-day support included'],
  },
];

export function HowWeWork() {
  return (
    <Section id="how-we-work">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-serif text-4xl font-normal text-primary md:text-5xl lg:text-6xl"
        >
          How We <em className="italic">Work</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-secondary"
        >
          Our delivery model combines speed with precision.
        </motion.p>
      </div>

      {/* Timeline - Horizontal on desktop */}
      <div className="relative">
        {/* Connection line - desktop */}
        <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent md:block" />

        <div className="grid gap-8 md:grid-cols-3">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Number circle */}
              <div className="mb-8 flex justify-center">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-accent/30 bg-bg-card">
                  <span className="font-serif text-2xl font-medium text-accent">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Card */}
              <div className="rounded-2xl border border-line/30 bg-bg-card p-8 transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5">
                {/* Timeline badge */}
                <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  {step.timeline}
                </span>

                {/* Title */}
                <h3 className="mb-3 font-serif text-xl font-medium text-primary">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mb-6 text-secondary">{step.description}</p>

                {/* Details */}
                <ul className="space-y-3">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-secondary"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
