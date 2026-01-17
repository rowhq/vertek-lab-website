'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const helvetica = { fontFamily: 'Helvetica Neue, sans-serif' };

const filters = ['Web 3', 'Web 2'];

const cases = [
  {
    number: '01',
    title: 'RAVA',
    category: 'Blockchain',
    filter: 'Web 3',
  },
  {
    number: '02',
    title: 'Arena.trade',
    category: 'DeFi',
    filter: 'Web 3',
  },
  {
    number: '03',
    title: 'Wantan Clan',
    category: 'SaaS',
    filter: 'Web 2',
  },
  {
    number: '04',
    title: 'AI Assistant',
    category: 'LLM',
    filter: 'Web 2',
  },
];

export function Cases() {
  const [activeFilter, setActiveFilter] = useState('Web 3');

  const filteredCases = cases.filter(c => c.filter === activeFilter);

  return (
    <section id="cases" className="min-h-screen bg-black px-4 py-20 lg:px-16 lg:py-32">
      <div className="mx-auto w-full">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-8 lg:mb-16 lg:flex-row lg:items-start">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-none border px-4 py-2 text-sm uppercase tracking-wider transition-all ${
                  activeFilter === filter
                    ? 'border-white bg-white text-black'
                    : 'border-white/30 bg-transparent text-white/60 hover:border-white hover:text-white'
                }`}
                style={helvetica}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Description */}
          <p
            className="max-w-sm text-sm leading-relaxed text-white/60 lg:text-right"
            style={helvetica}
          >
            Vertek.lab es un estudio de producto AI-first especializado en desarrollo de software, diseño de producto y transformación digital.
          </p>
        </div>

        {/* Projects List */}
        <div className="flex flex-col">
          {filteredCases.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Project Row */}
              <div className="group grid cursor-pointer grid-cols-[35px_1fr_auto_24px] sm:grid-cols-[45px_1fr_auto_28px] md:grid-cols-[70px_1fr_auto_40px] lg:grid-cols-[100px_1fr_auto_50px] items-center gap-2 sm:gap-3 md:gap-6 lg:gap-8 py-4 sm:py-5 md:py-6 lg:py-8 transition-all hover:opacity-80">
                {/* Number */}
                <span
                  className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white/40"
                  style={{ ...helvetica, fontWeight: 200 }}
                >
                  {project.number}
                </span>

                {/* Title */}
                <h3
                  className="text-lg sm:text-xl md:text-2xl lg:text-5xl text-white"
                  style={{ ...helvetica, fontWeight: 400 }}
                >
                  {project.title}
                </h3>

                {/* Category */}
                <span
                  className="text-[10px] sm:text-xs md:text-sm text-white/50"
                  style={helvetica}
                >
                  {project.category}
                </span>

                {/* Plus Icon */}
                <span
                  className="text-xl text-white/40 transition-all group-hover:text-white lg:text-2xl"
                  style={{ ...helvetica, fontWeight: 200 }}
                >
                  +
                </span>
              </div>

              {/* Dotted Separator */}
              <div
                className="h-px w-full"
                style={{
                  backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.2) 50%, transparent 50%)',
                  backgroundSize: '8px 1px',
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center pt-12 lg:pt-16"
        >
          <a
            href="/contacto"
            className="group flex items-center gap-3 border border-white/30 px-8 py-4 text-sm uppercase tracking-wider text-white transition-all hover:border-white hover:bg-white hover:text-black"
            style={helvetica}
          >
            Discutir tu proyecto
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
