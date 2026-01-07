'use client';

import { motion } from 'framer-motion';

const footerLinks = {
  services: {
    title: 'Services',
    links: [
      { label: 'Advisory', href: '#services' },
      { label: 'AI Development', href: '#services' },
      { label: 'Product Development', href: '#services' },
      { label: 'Enterprise Software', href: '#enterprise' },
    ],
  },
  projects: {
    title: 'Projects',
    links: [
      { label: 'Case Studies', href: '#cases', external: false },
      { label: 'Blog', href: '#', external: true },
      { label: 'Articles', href: '#', external: true },
    ],
  },
  social: {
    title: 'Social Media',
    links: [
      { label: 'LinkedIn', href: 'https://linkedin.com/company/verteklab', external: true },
      { label: 'Twitter', href: 'https://x.com/verteklab', external: true },
      { label: 'GitHub', href: 'https://github.com/verteklab', external: true },
    ],
  },
};

// Arrow icon for external links
function ArrowIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-white text-black" role="contentinfo">
      {/* CTA Section - Salmon background */}
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-black/60">
                Contact Us
              </p>
              <h2 className="mt-2 text-3xl font-medium text-black md:text-4xl lg:text-5xl">
                LET&apos;S TALK
              </h2>
            </div>
            <a
              href="#contact"
              className="flex h-16 w-16 items-center justify-center border-2 border-black/20 text-black transition-all hover:bg-black hover:text-white lg:h-20 lg:w-20"
            >
              <svg className="h-6 w-6 lg:h-8 lg:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>

          {/* Reference number */}
          <div className="mt-8 flex items-center gap-2 border-t border-dashed border-black/20 pt-6">
            <span className="text-sm text-black/60">/</span>
            <span className="text-sm font-medium text-black">V034671</span>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-dashed border-line-dark">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <a href="#hero" className="inline-block">
                <span className="text-2xl font-bold tracking-tight text-black">VERTEK</span>
                <span className="text-2xl font-bold tracking-tight text-accent">.lab</span>
              </a>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.15em] text-secondary">
                Development Labs
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-black">
                {footerLinks.services.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-secondary transition-colors hover:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-black">
                {footerLinks.projects.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.projects.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-sm text-secondary transition-colors hover:text-black"
                    >
                      {link.label}
                      {link.external && <ArrowIcon />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-black">
                {footerLinks.social.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.social.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-secondary transition-colors hover:text-black"
                    >
                      {link.label}
                      <ArrowIcon />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Office Section */}
      <div className="border-t border-dashed border-line-dark">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-black">
                Office
              </h4>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-black">
                Latin America
              </h4>
              <p className="mt-3 text-sm text-secondary">Remote-First</p>
              <p className="text-sm text-secondary">Global Operations</p>
            </div>
            <div>
              <p className="text-sm text-secondary">Contact us</p>
              <a href="mailto:contact@vertek.lab" className="mt-1 block text-sm font-medium text-black hover:text-accent">
                contact@vertek.lab
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dashed border-line-dark">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-secondary">
              © {new Date().getFullYear()} VERTEK.lab
            </p>
            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-xs text-secondary transition-colors hover:text-black">
                Privacy Policy
              </a>
            </div>
            <p className="text-xs text-secondary">
              Designed by <span className="font-medium text-black">ROWSHIP</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
