'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

const capabilities = [
  {
    title: 'Web2 Products',
    subtitle: 'Enterprise-grade applications',
    description:
      'Enterprise platforms, SaaS applications, and traditional web systems built with modern architecture. From internal tools to customer-facing platforms.',
    features: ['SaaS Platforms', 'Admin Dashboards', 'API Development', 'Database Design'],
    visual: {
      gradient: 'from-blue-500/20 to-cyan-500/10',
      icon: (
        <svg
          className="h-24 w-24 text-accent/40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  },
  {
    title: 'Web3 Products',
    subtitle: 'Blockchain & DeFi solutions',
    description:
      'DeFi platforms, NFT marketplaces, DAOs, and blockchain integration. Full-stack Web3 development with smart contract expertise.',
    features: ['DeFi Protocols', 'NFT Platforms', 'Smart Contracts', 'Wallet Integration'],
    visual: {
      gradient: 'from-purple-500/20 to-pink-500/10',
      icon: (
        <svg
          className="h-24 w-24 text-accent/40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  },
  {
    title: 'Enterprise Integration',
    subtitle: 'Legacy system modernization',
    description:
      'Seamless connections with SAP, CRMs, ERPs, or proprietary systems. We build the connective tissue for complex ecosystems.',
    features: ['SAP Integration', 'CRM/ERP Sync', 'API Gateway', 'Data Migration'],
    visual: {
      gradient: 'from-amber-500/20 to-orange-500/10',
      icon: (
        <svg
          className="h-24 w-24 text-accent/40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  },
];

export function Capabilities() {
  return (
    <Section id="build">
      {/* Section Header */}
      <div className="mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 inline-block rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent"
        >
          Our Services
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 font-serif text-4xl font-normal text-primary md:text-5xl lg:text-6xl"
        >
          What We <em className="italic">Build</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-2xl text-lg text-secondary"
        >
          Digital infrastructure engineered for precision, speed, and scale.
        </motion.p>
      </div>

      {/* Alternating Feature Sections */}
      <div className="space-y-24 lg:space-y-32">
        {capabilities.map((capability, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
              index % 2 === 1 ? 'lg:direction-rtl' : ''
            }`}
          >
            {/* Content */}
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <span className="mb-3 inline-block text-sm font-medium uppercase tracking-wider text-accent">
                {capability.subtitle}
              </span>
              <h3 className="mb-4 font-serif text-3xl font-normal text-primary md:text-4xl">
                {capability.title}
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-secondary">
                {capability.description}
              </p>

              {/* Feature Tags */}
              <div className="mb-8 flex flex-wrap gap-3">
                {capability.features.map((feature, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-line/30 bg-bg-card px-4 py-2 text-sm text-secondary"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <a href="#contact" className="btn-link">
                Learn more
              </a>
            </div>

            {/* Visual Element */}
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br ${capability.visual.gradient}`}
              >
                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,107,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,0,0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Floating Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {capability.visual.icon}
                </div>

                {/* Decorative circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-accent/20"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full border border-accent/10"
                />

                {/* Corner accent */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2 rounded-full bg-bg-card/80 px-4 py-2 backdrop-blur-sm border border-line/30">
                  <div className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-xs font-medium text-primary">
                    {index === 0 ? 'Full Stack' : index === 1 ? 'Blockchain' : 'Integration'}
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
