'use client';

import { motion } from 'framer-motion';

interface TrustBadge {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TrustBadgesProps {
  badges: TrustBadge[];
  className?: string;
}

const defaultBadges: TrustBadge[] = [
  {
    title: '100% Code Ownership',
    description: 'Full source code and IP rights',
  },
  {
    title: 'Enterprise Security',
    description: 'SOC 2 compliant practices',
  },
  {
    title: '24/7 Support',
    description: '30-60 day post-launch included',
  },
  {
    title: 'Zero Lock-in',
    description: 'No dependencies on our systems',
  },
];

export function TrustBadges({
  badges = defaultBadges,
  className = '',
}: TrustBadgesProps) {
  return (
    <div
      className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="group rounded-2xl border border-line/30 bg-bg-card p-6 text-center transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
        >
          {badge.icon ? (
            <div className="mb-4 flex justify-center text-accent">
              {badge.icon}
            </div>
          ) : (
            <div className="mb-4 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <svg
                  className="h-6 w-6 text-accent"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          )}
          <h3 className="mb-2 font-serif text-lg font-medium text-accent">
            {badge.title}
          </h3>
          <p className="text-sm text-secondary">{badge.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
