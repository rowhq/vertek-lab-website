'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-square overflow-hidden rounded-2xl bg-bg-card border border-line/30">
            {/* Architectural Blueprint Visualization */}
            <div className="flex h-full items-center justify-center p-8">
              <div className="relative h-full w-full">
                {/* Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255, 107, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 107, 0, 0.3) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                  }}
                />

                {/* Abstract Architecture Shapes */}
                <svg
                  className="h-full w-full"
                  viewBox="0 0 300 300"
                  fill="none"
                >
                  <motion.rect
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.2 }}
                    x="50"
                    y="50"
                    width="80"
                    height="80"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-accent"
                  />
                  <motion.circle
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.4 }}
                    cx="210"
                    cy="90"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-accent"
                  />
                  <motion.polygon
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 0.6 }}
                    points="150,180 190,240 110,240"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-accent"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    x1="130"
                    y1="90"
                    x2="170"
                    y2="90"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-accent/50"
                  />
                  <motion.line
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 1 }}
                    x1="90"
                    y1="130"
                    x2="150"
                    y2="180"
                    stroke="currentColor"
                    strokeWidth="1"
                    className="text-accent/50"
                  />
                </svg>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 font-serif text-4xl font-normal text-primary md:text-5xl lg:text-6xl">
            <em className="italic">Philosophy</em>
          </h2>

          {/* Featured Quote */}
          <blockquote className="mb-8 border-l-2 border-accent pl-6">
            <p className="font-serif text-2xl font-normal italic text-primary">
              &ldquo;Structure is our language. Speed is our nature.&rdquo;
            </p>
          </blockquote>

          <div className="space-y-6 text-lg text-secondary">
            <p>
              Vertek.lab is an engineering studio born from Rowship — designed
              to build systems with precision and speed.
            </p>
            <p>
              We believe that structure is the foundation of every innovation.
            </p>
            <p>
              Our team combines design thinking, engineering logic, and modern
              automation to turn concepts into modular, scalable systems.
            </p>
          </div>

          <div className="mt-10 flex items-center gap-8 border-t border-line/30 pt-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Location
              </p>
              <p className="mt-1 text-lg font-medium text-primary">
                Latin America
              </p>
            </div>
            <div className="h-12 w-px bg-line/30" />
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-secondary">
                Focus
              </p>
              <p className="mt-1 text-lg font-medium text-primary">
                Web2 & Web3
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
