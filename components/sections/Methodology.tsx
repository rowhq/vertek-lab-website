'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const helvetica = { fontFamily: 'Helvetica Neue, sans-serif' };

// Tab content data
const tabsData = {
  valores: {
    title: 'Valores',
    items: [
      {
        number: '01',
        title: 'VELOCIDAD',
        description: 'Días, no meses. Calidad incluida.',
      },
      {
        number: '02',
        title: 'TRANSPARENCIA',
        description: 'Sin sorpresas. Sin letra pequeña. Sin excusas.',
      },
      {
        number: '03',
        title: 'CRAFT',
        description: 'Código que otros desarrolladores querrán mantener.',
      },
    ],
  },
  metodologia: {
    title: 'Metodología',
    items: [
      {
        number: '01',
        title: 'PRODUCTO PRIMERO',
        description: 'Cada decisión técnica sirve al usuario final.',
      },
      {
        number: '02',
        title: 'PARTNERSHIP',
        description: 'Tu equipo extendido. Mismos objetivos, misma urgencia.',
      },
      {
        number: '03',
        title: 'DISEÑO EVOLUTIVO',
        description: 'Construido para lo que necesitas hoy, listo para lo que viene.',
      },
    ],
  },
};

type TabKey = keyof typeof tabsData;

export function Methodology() {
  const [activeTab, setActiveTab] = useState<TabKey>('metodologia');
  const currentData = tabsData[activeTab];

  return (
    <section id="methodology" className="px-4 py-14 lg:px-16" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="mx-auto w-full">
        {/* Tabs Navigation */}
        <div className="mb-12 flex gap-3">
          {(Object.keys(tabsData) as TabKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-none border px-5 py-2.5 text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === tab
                  ? 'border-black bg-black text-white'
                  : 'border-black/20 bg-white text-black hover:border-black'
              }`}
              style={helvetica}
            >
              {tab === 'valores' ? 'Valores' : 'Metodología'}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative">
          {/* Header with "/" and Title */}
          <div className="mb-12 flex items-start gap-6">
            <span
              className="text-2xl leading-none text-black/30"
              style={{ ...helvetica, fontWeight: 200 }}
            >
              /
            </span>
            <AnimatePresence mode="wait">
              <motion.h2
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-6xl text-black lg:text-7xl"
                style={{ ...helvetica, fontWeight: 400 }}
              >
                {currentData.title}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Items List */}
          <div className="w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentData.items.map((item, index) => (
                    <motion.div
                      key={item.number}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      {/* Dotted Separator */}
                      <div
                        className="h-px w-full"
                        style={{
                          backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.2) 50%, transparent 50%)',
                          backgroundSize: '8px 1px',
                        }}
                      />

                      {/* Item Row */}
                      <div className="grid grid-cols-1 gap-8 py-10 lg:grid-cols-[60px_1fr_2fr] lg:gap-16 lg:py-16">
                        {/* Number */}
                        <span
                          className="text-base text-black/50"
                          style={helvetica}
                        >
                          {item.number}
                        </span>

                        {/* Title */}
                        <h3
                          className="text-base font-medium uppercase tracking-wide text-black"
                          style={helvetica}
                        >
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p
                          className="text-base leading-relaxed text-black/70"
                          style={helvetica}
                        >
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {/* Final Separator */}
                  <div
                    className="h-px w-full"
                    style={{
                      backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.2) 50%, transparent 50%)',
                      backgroundSize: '8px 1px',
                    }}
                  />
                </motion.div>
              </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
