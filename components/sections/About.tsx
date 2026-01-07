'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  {
    id: 'expertise',
    label: 'Expertise',
    content: {
      title: 'Core-Level Control',
      description: 'We specialize in building complex systems that require deep technical expertise. Our team has experience across the full stack, from frontend interfaces to blockchain infrastructure.',
      items: [
        'React / Next.js / TypeScript',
        'Node.js / Python / Go',
        'AWS / GCP / Vercel',
        'Solidity / Web3',
        'PostgreSQL / MongoDB',
        'AI/ML Integration',
      ],
    },
  },
  {
    id: 'values',
    label: 'Values',
    content: {
      title: 'How We Think',
      description: 'We believe that great software comes from clear thinking, honest communication, and relentless focus on quality. Our values shape everything we build.',
      items: [
        'Simplicity over complexity',
        'Speed without shortcuts',
        'Transparency in all things',
        'Ownership of outcomes',
        'Continuous improvement',
        'Client success first',
      ],
    },
  },
  {
    id: 'methodology',
    label: 'Methodology',
    content: {
      title: 'Our Approach',
      description: 'We follow a structured yet flexible methodology that allows us to deliver high-quality software rapidly while maintaining full transparency throughout the process.',
      items: [
        'Discovery & Planning',
        'Rapid Prototyping',
        'Iterative Development',
        'Continuous Deployment',
        'Quality Assurance',
        'Launch & Support',
      ],
    },
  },
];

export function About() {
  const [activeTab, setActiveTab] = useState('expertise');
  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <section id="about" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-16 border-b border-dashed border-line-dark pb-8">
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-secondary">03</span>
            <span className="text-xs font-medium uppercase tracking-wider text-secondary">
              About
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-4 text-4xl font-medium tracking-tight text-black md:text-5xl"
          >
            Who We Are
          </motion.h2>
        </div>

        {/* Introduction */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-secondary lg:text-2xl">
              VERTEK.lab is an engineering studio born from Rowship — designed to build
              systems with precision and speed.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-secondary">
              We combine design thinking, engineering logic, and modern automation to turn
              concepts into modular, scalable systems. Based in Latin America, serving clients
              globally.
            </p>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="border-b border-dashed border-line-dark">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative pb-4 text-sm font-medium uppercase tracking-wider transition-colors ${
                  activeTab === tab.id ? 'text-black' : 'text-secondary hover:text-black'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-px left-0 right-0 h-0.5 bg-accent"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="py-12"
          >
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-medium text-black md:text-3xl">
                  {activeContent?.title}
                </h3>
                <p className="text-secondary">
                  {activeContent?.description}
                </p>
              </div>
              <div>
                <ul className="grid grid-cols-2 gap-4">
                  {activeContent?.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-black"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-2 gap-8 border-t border-dashed border-line-dark pt-12 lg:grid-cols-4">
          <div>
            <p className="text-3xl font-medium text-black">50+</p>
            <p className="mt-1 text-sm text-secondary">Projects Delivered</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-black">5-7</p>
            <p className="mt-1 text-sm text-secondary">Days MVP Delivery</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-black">100%</p>
            <p className="mt-1 text-sm text-secondary">Client Satisfaction</p>
          </div>
          <div>
            <p className="text-3xl font-medium text-black">LATAM</p>
            <p className="mt-1 text-sm text-secondary">Based, Global Reach</p>
          </div>
        </div>
      </div>
    </section>
  );
}
