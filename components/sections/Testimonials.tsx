'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '@/components/ui/Section';

const testimonials = [
  {
    quote:
      'Vertek.lab delivered our trading platform reskin in 8 days. Their structured approach was incredible — fast execution without sacrificing quality.',
    author: 'Arena.trade',
    role: 'Founder',
  },
  {
    quote:
      'Their enterprise integration with our SAP infrastructure was seamless. Zero disruption, precise documentation, and a team that understands complex systems.',
    author: 'Enterprise Client',
    role: 'CIO',
  },
  {
    quote:
      "From concept to production in under 2 weeks. Vertek.lab's structured methodology gave us a competitive edge we didn't think was possible.",
    author: 'Wantan Clan',
    role: 'Operations Director',
  },
];

const clients = ['Rowship', 'Arena.trade', 'RAVA', 'Wantan Clan'];

// Tier definitions
type ProjectTier = 'mvp' | 'full' | 'enterprise';

const tiers: { id: ProjectTier; label: string; price: string }[] = [
  { id: 'mvp', label: 'MVP System', price: '$15k' },
  { id: 'full', label: 'Full System', price: '$35k' },
  { id: 'enterprise', label: 'Enterprise', price: 'Custom' },
];

// Competitor definitions
const competitors = [
  { id: 'vertek', name: 'Vertek.lab', highlighted: true },
  { id: 'agency', name: 'Traditional Agency', highlighted: false },
  { id: 'freelancer', name: 'Freelancer', highlighted: false },
  { id: 'inhouse', name: 'In-House Team', highlighted: false },
];

// Comparison data by tier
const comparisonByTier: Record<
  ProjectTier,
  {
    metric: string;
    vertek: string;
    agency: string;
    freelancer: string;
    inhouse: string;
  }[]
> = {
  mvp: [
    {
      metric: 'Time to Deliver',
      vertek: '5-7 days',
      agency: '4-6 months',
      freelancer: '3-4 months',
      inhouse: '6+ months',
    },
    {
      metric: 'Investment',
      vertek: '$15k',
      agency: '$80-150k',
      freelancer: '$25-40k',
      inhouse: '$120k+',
    },
    {
      metric: 'Code Ownership',
      vertek: '100% Yours',
      agency: 'Licensed',
      freelancer: 'Varies',
      inhouse: 'Full',
    },
    {
      metric: 'Post-Launch Support',
      vertek: '30 days included',
      agency: 'Extra cost',
      freelancer: 'Limited',
      inhouse: 'Internal',
    },
  ],
  full: [
    {
      metric: 'Time to Deliver',
      vertek: '2-4 weeks',
      agency: '6-12 months',
      freelancer: '4-6 months',
      inhouse: '12+ months',
    },
    {
      metric: 'Investment',
      vertek: '$35k',
      agency: '$200-500k',
      freelancer: '$60-100k',
      inhouse: '$300k+',
    },
    {
      metric: 'Code Ownership',
      vertek: '100% Yours',
      agency: 'Licensed',
      freelancer: 'Varies',
      inhouse: 'Full',
    },
    {
      metric: 'Post-Launch Support',
      vertek: '60 days included',
      agency: 'Extra cost',
      freelancer: 'Limited',
      inhouse: 'Internal',
    },
  ],
  enterprise: [
    {
      metric: 'Time to Deliver',
      vertek: '4-8 weeks',
      agency: '12-18 months',
      freelancer: 'Not suited',
      inhouse: '18+ months',
    },
    {
      metric: 'Investment',
      vertek: 'Custom quote',
      agency: '$500k-2M',
      freelancer: 'N/A',
      inhouse: '$800k+',
    },
    {
      metric: 'Code Ownership',
      vertek: '100% Yours',
      agency: 'Licensed',
      freelancer: 'N/A',
      inhouse: 'Full',
    },
    {
      metric: 'Post-Launch Support',
      vertek: '90 days + SLA',
      agency: 'Extra cost',
      freelancer: 'N/A',
      inhouse: 'Internal',
    },
  ],
};

// Competitor Icon Component
function CompetitorIcon({ type }: { type: string }) {
  switch (type) {
    case 'vertek':
      return (
        <div className="flex h-10 w-10 items-center justify-center bg-accent/20">
          <span className="text-lg font-bold text-accent">V</span>
        </div>
      );
    case 'agency':
      return (
        <div className="flex h-10 w-10 items-center justify-center bg-gray-100">
          <svg
            className="h-5 w-5 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
            />
          </svg>
        </div>
      );
    case 'freelancer':
      return (
        <div className="flex h-10 w-10 items-center justify-center bg-gray-100">
          <svg
            className="h-5 w-5 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </div>
      );
    case 'inhouse':
      return (
        <div className="flex h-10 w-10 items-center justify-center bg-gray-100">
          <svg
            className="h-5 w-5 text-secondary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
            />
          </svg>
        </div>
      );
    default:
      return null;
  }
}

export function Testimonials() {
  const [activeTier, setActiveTier] = useState<ProjectTier>('mvp');
  const currentData = comparisonByTier[activeTier];

  return (
    <Section id="testimonials">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl font-medium text-black md:text-5xl lg:text-6xl"
        >
          Trusted <em className="italic">By</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto max-w-2xl text-lg text-secondary"
        >
          Building intelligent systems for forward-thinking organizations.
        </motion.p>
      </div>

      {/* Client Logos - Marquee */}
      <div className="relative mb-20 overflow-hidden py-8">
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex animate-marquee">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={i}
              className="mx-12 flex items-center justify-center whitespace-nowrap text-2xl font-medium text-secondary/40 transition-colors hover:text-primary"
            >
              {client}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group border border-line-dark bg-white p-8 transition-all duration-300 hover:border-black hover:shadow-lg"
          >
            {/* Quote */}
            <blockquote className="mb-8 text-xl leading-relaxed text-black">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="border-t border-dashed border-line-dark pt-6">
              <p className="font-medium text-black">{testimonial.author}</p>
              <p className="text-sm text-secondary">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comparison Table - Xapo Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-24"
      >
        {/* Table Header */}
        <div className="mb-8 text-center">
          <span className="mb-4 inline-block border border-accent px-4 py-2 text-xs font-semibold uppercase tracking-wider text-accent">
            Competitive Pricing
          </span>
          <h3 className="text-3xl font-medium text-black md:text-4xl">
            Transparent <em className="italic">Delivery</em>
          </h3>
        </div>

        {/* Tier Tabs */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex border border-line-dark p-1">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => setActiveTier(tier.id)}
                className={`px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  activeTier === tier.id
                    ? 'bg-black text-white'
                    : 'text-secondary hover:text-black'
                }`}
              >
                {tier.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="overflow-hidden border border-line-dark">
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f5f5f5]">
                  <th className="px-6 py-5 text-left text-sm font-semibold text-secondary">
                    Platform
                  </th>
                  {currentData.map((row) => (
                    <th
                      key={row.metric}
                      className="px-6 py-5 text-left text-sm font-semibold text-secondary"
                    >
                      {row.metric}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <AnimatePresence mode="wait">
                  {competitors.map((competitor, index) => (
                    <motion.tr
                      key={`${activeTier}-${competitor.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className={`border-t border-line-dark transition-colors ${
                        competitor.highlighted
                          ? 'bg-accent/5'
                          : index % 2 === 0
                            ? 'bg-white'
                            : 'bg-[#fafafa]'
                      }`}
                    >
                      {/* Platform column with icon */}
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <CompetitorIcon type={competitor.id} />
                          <span
                            className={`font-medium ${
                              competitor.highlighted ? 'text-accent' : 'text-primary'
                            }`}
                          >
                            {competitor.name}
                          </span>
                          {competitor.highlighted && (
                            <span className="bg-accent px-2 py-0.5 text-xs font-medium text-white">
                              Best
                            </span>
                          )}
                        </div>
                      </td>
                      {/* Data columns */}
                      {currentData.map((row) => (
                        <td
                          key={row.metric}
                          className={`px-6 py-5 text-sm ${
                            competitor.highlighted
                              ? 'font-semibold text-accent'
                              : 'text-secondary'
                          }`}
                        >
                          {row[competitor.id as keyof typeof row]}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </div>

          {/* Mobile Cards View */}
          <div className="md:hidden">
            {/* Mobile Tab Selector */}
            <div className="flex overflow-x-auto border-b border-line-dark bg-[#f5f5f5] p-2">
              {tiers.map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setActiveTier(tier.id)}
                  className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-all ${
                    activeTier === tier.id
                      ? 'bg-black text-white'
                      : 'text-secondary'
                  }`}
                >
                  {tier.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTier}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Vertek.lab highlighted card */}
                <div className="border-b border-line-dark bg-accent/5 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <CompetitorIcon type="vertek" />
                    <h4 className="text-xl font-medium text-accent">
                      Vertek.lab
                    </h4>
                    <span className="bg-accent px-3 py-1 text-xs font-medium text-white">
                      Best Value
                    </span>
                  </div>
                  <div className="space-y-3">
                    {currentData.map((row) => (
                      <div key={row.metric} className="flex justify-between">
                        <span className="text-sm text-secondary">{row.metric}</span>
                        <span className="text-sm font-semibold text-accent">
                          {row.vertek}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other options */}
                {competitors
                  .filter((c) => !c.highlighted)
                  .map((competitor) => (
                    <div
                      key={competitor.id}
                      className="border-b border-line-dark bg-white p-6"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <CompetitorIcon type={competitor.id} />
                        <h4 className="font-medium text-black">{competitor.name}</h4>
                      </div>
                      <div className="space-y-3">
                        {currentData.map((row) => (
                          <div key={row.metric} className="flex justify-between">
                            <span className="text-sm text-secondary">
                              {row.metric}
                            </span>
                            <span className="text-sm text-secondary/80">
                              {row[competitor.id as keyof typeof row]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            { value: '10x', label: 'Faster Delivery', sub: 'Optimized workflow' },
            { value: '60%', label: 'Lower Cost', sub: 'Efficient methodology' },
            { value: '100%', label: 'Code Ownership', sub: 'Zero lock-in' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
              className="border border-line-dark bg-white p-6 text-center transition-all hover:border-black hover:shadow-lg"
            >
              <div className="text-4xl font-medium text-accent">
                {stat.value}
              </div>
              <p className="mt-2 font-medium text-black">{stat.label}</p>
              <p className="text-sm text-secondary">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
