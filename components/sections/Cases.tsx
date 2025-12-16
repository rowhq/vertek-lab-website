'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

const cases = [
  {
    title: 'RAVA',
    category: 'Land Data Platform',
    description: 'Real-time architecture for asset tokenization.',
    timeline: '12 days',
    investment: '$28k',
    tech: ['Blockchain', 'Smart Contracts', 'Next.js'],
  },
  {
    title: 'Arena.trade',
    category: 'Trading Analytics',
    description: 'Rapid reskin and integration under 10 days.',
    timeline: '8 days',
    investment: '$18k',
    tech: ['Analytics', 'Real-time Data', 'React'],
  },
  {
    title: 'Wantan Clan',
    category: 'Service Design / UX Ops',
    description: 'Full digital operation system for a dark kitchen.',
    timeline: '14 days',
    investment: '$32k',
    tech: ['Automation', 'CRM Integration', 'Cloud'],
  },
];

export function Cases() {
  return (
    <Section id="cases">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-serif text-4xl font-normal text-primary md:text-5xl lg:text-6xl"
        >
          Case <em className="italic">Snapshots</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-secondary"
        >
          Selected projects demonstrating rapid, structured engineering.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((item, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl border border-line/30 bg-bg-card transition-all duration-500 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
          >
            {/* Image/Gradient Placeholder */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="h-full w-full bg-gradient-to-br from-accent/10 to-accent/5 transition-transform duration-700 group-hover:scale-110" />

              {/* Overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                <span className="translate-y-4 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Case
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Category */}
              <span className="text-xs font-medium uppercase tracking-wider text-accent">
                {item.category}
              </span>

              {/* Title */}
              <h3 className="mt-3 font-serif text-2xl font-medium text-primary transition-colors group-hover:text-accent">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-secondary">{item.description}</p>

              {/* Metrics */}
              <div className="mt-6 flex items-center gap-6 border-t border-line/30 pt-6">
                <div>
                  <span className="font-serif text-2xl font-medium text-accent">
                    {item.timeline}
                  </span>
                  <span className="ml-2 text-sm text-secondary">delivery</span>
                </div>
                <div className="h-8 w-px bg-line/30" />
                <div>
                  <span className="font-serif text-2xl font-medium text-primary">
                    {item.investment}
                  </span>
                  <span className="ml-2 text-sm text-secondary">investment</span>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-line/30 bg-bg-elevated px-3 py-1 text-xs text-secondary transition-colors group-hover:border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
