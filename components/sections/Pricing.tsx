'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

const packages = [
  {
    name: 'MVP Systems',
    price: '$15,000',
    priceLabel: 'From',
    timeline: '5-7 days',
    description: 'Perfect for startups and small teams needing rapid validation.',
    features: [
      'Single module, core functionality',
      'Basic integrations (APIs, databases)',
      'Responsive UI design',
      'Full code ownership',
      '30-day support included',
    ],
    highlighted: false,
  },
  {
    name: 'Full Systems',
    price: '$35,000',
    priceLabel: 'From',
    timeline: '2-4 weeks',
    description: 'Comprehensive solutions for growing businesses.',
    features: [
      'Multi-module architecture',
      'Enterprise integrations (SAP, Oracle, Salesforce)',
      'Advanced features & automation',
      'Complete documentation',
      '60-day support + maintenance',
      'Training session included',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceLabel: '',
    timeline: '4+ weeks',
    description: 'Tailored solutions for complex organizational needs.',
    features: [
      'Complex legacy system integration',
      'Multi-team coordination',
      'Custom security requirements',
      'Scalable cloud infrastructure',
      'Ongoing partnership model',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-medium text-black md:text-5xl lg:text-6xl"
        >
          Investment <em className="italic">Ranges</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-secondary"
        >
          Transparent pricing for predictable budgets. No hidden costs, no
          surprises.
        </motion.p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group relative flex flex-col border p-10 transition-all duration-300 ${
              pkg.highlighted
                ? 'border-accent bg-white shadow-lg'
                : 'border-line-dark bg-white hover:border-black hover:shadow-lg'
            }`}
          >
            {/* Recommended Badge */}
            {pkg.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-accent px-4 py-1.5 text-xs font-medium text-white">
                  Recommended
                </span>
              </div>
            )}

            {/* Package Name */}
            <h3 className="mb-2 text-2xl font-medium text-black">
              {pkg.name}
            </h3>

            {/* Timeline */}
            <div className="mb-6 flex items-center gap-2 text-sm text-secondary">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{pkg.timeline}</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              {pkg.priceLabel && (
                <span className="text-sm text-secondary">{pkg.priceLabel}</span>
              )}
              <div className="text-5xl font-medium text-black">
                {pkg.price}
              </div>
            </div>

            {/* Description */}
            <p className="mb-8 text-secondary">{pkg.description}</p>

            {/* Features */}
            <ul className="mb-10 flex-1 space-y-4">
              {pkg.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-secondary"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={pkg.highlighted ? 'btn-accent' : 'btn-primary'}
            >
              Get Started
              <svg
                className="h-4 w-4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center"
      >
        <p className="text-secondary">
          All packages include full code ownership, detailed documentation, and
          post-launch support.
        </p>
        <p className="mt-3 text-secondary">
          Need something custom?{' '}
          <a
            href="#contact"
            className="font-medium text-accent transition-colors hover:underline"
          >
            Let&apos;s talk
          </a>
          .
        </p>
      </motion.div>
    </Section>
  );
}
