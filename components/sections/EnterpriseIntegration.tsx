'use client';

import { motion } from 'framer-motion';
import { Section } from '@/components/ui/Section';

export function EnterpriseIntegration() {
  return (
    <Section id="enterprise">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 font-serif text-4xl font-normal text-primary md:text-5xl lg:text-6xl">
            Enterprise <em className="italic">Integration</em>
          </h2>
          <p className="mb-6 text-xl text-accent">
            We connect intelligence with infrastructure.
          </p>
          <p className="mb-8 text-lg text-secondary">
            SAP. Oracle. Salesforce. Custom systems. Vertek.lab brings modern
            engineering to legacy environments.
          </p>
          <p className="mb-8 text-secondary">
            We design connective tissue for complex ecosystems — stable,
            documented and secure.
          </p>

          <ul className="space-y-4 text-secondary">
            {[
              'Non-disruptive integration with existing systems',
              'Real-time data synchronization and processing',
              'Secure, enterprise-grade API architecture',
              'Scalable infrastructure built for growth',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="mt-1 h-5 w-5 flex-shrink-0 text-accent"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Visual Network Graph */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <div className="relative h-96 w-full">
            {/* Central AI Layer */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/30 bg-bg-card shadow-lg shadow-accent/10"
            >
              <span className="text-center font-serif text-lg font-medium text-primary">
                AI Layer
              </span>
            </motion.div>

            {/* Surrounding System Nodes */}
            {[
              { label: 'SAP', angle: 0 },
              { label: 'Oracle', angle: 72 },
              { label: 'Salesforce', angle: 144 },
              { label: 'APIs', angle: 216 },
              { label: 'Custom', angle: 288 },
            ].map((node, i) => {
              const radius = 140;
              const x = Math.cos((node.angle * Math.PI) / 180) * radius;
              const y = Math.sin((node.angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line/30 bg-bg-card text-xs font-medium text-secondary shadow-sm transition-all hover:border-accent/30 hover:text-primary"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  }}
                >
                  {node.label}
                </motion.div>
              );
            })}

            {/* Connection Lines */}
            <svg className="absolute inset-0 h-full w-full">
              {[0, 72, 144, 216, 288].map((angle, i) => {
                const radius = 140;
                const x1 = 50;
                const y1 = 50;
                const x2 =
                  50 + (Math.cos((angle * Math.PI) / 180) * radius * 100) / 384;
                const y2 =
                  50 + (Math.sin((angle * Math.PI) / 180) * radius * 100) / 384;

                return (
                  <motion.line
                    key={i}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 0.2 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    className="text-accent"
                  />
                );
              })}
            </svg>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
