'use client';

import { motion } from 'framer-motion';

// Vertek Isotipo SVG Component
function VertekIsotipo({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M39 16L20 16.0001V28.0001L27.3418 28C30.221 28 32.8781 29.5472 34.2993 32.0512L53 65C53 65 64.3295 44.8695 71.7007 32.0002C73.1213 29.5201 75.7607 28 78.6188 28H86V16H67L53 40.2487L39 16Z" fill="currentColor"/>
      <path d="M20 27.9999L8 28V40L13 39.9999L34.8667 78.2667C38.6594 84.9038 45.7176 88.9999 53.362 88.9999C61.1824 88.9999 68.4091 84.8309 72.299 78.0465C82.3805 60.4629 94 39.9999 94 39.9999L98 40V28L86 27.9999L60.4807 72.6587C58.9467 75.3432 56.0919 76.9999 53 76.9999C49.9081 76.9999 47.0533 75.3432 45.5193 72.6587L20 27.9999Z" fill="currentColor"/>
    </svg>
  );
}

const footerLinks = {
  services: {
    title: 'Servicios',
    links: [
      { label: 'Nuestros Servicios', href: '#capabilities' },
      { label: 'Nuestro Proceso', href: '#how-we-work' },
      { label: 'Clientes', href: '#client-types' },
    ],
  },
  company: {
    title: 'Empresa',
    links: [
      { label: 'Proyectos', href: '/proyectos' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
};

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/verteklab',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/verteklab',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/verteklab',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className="bg-white text-black" role="contentinfo">
      {/* CTA Section - Purple background */}
      <div className="bg-purple">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-white/60">
                Contactanos
              </p>
              <h2 className="mt-2 text-3xl font-medium text-white md:text-4xl lg:text-5xl">
                ¿Listo para comenzar?
              </h2>
              <p className="mt-4 max-w-md text-white/70">
                Conversemos sobre tu próximo proyecto.
              </p>
            </div>
            {/* CTA Button - Chamfered corners */}
            <a
              href="/contacto"
              className="group relative h-16 w-16 transition-all lg:h-20 lg:w-20"
            >
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 80 80"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.5 0.5H71.5L79.5 8.5V79.5H8.5L0.5 71.5V0.5Z"
                  className="fill-transparent stroke-white/40 transition-all group-hover:fill-white group-hover:stroke-white"
                  strokeWidth="1"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white transition-colors group-hover:text-purple">→</span>
              </div>
            </a>
          </motion.div>

          {/* Reference number */}
          <div className="mt-8 flex items-center gap-2 border-t border-dashed border-white/20 pt-6">
            <span className="text-sm text-white/60">/</span>
            <span className="text-sm font-medium text-white">V034671</span>
          </div>
        </div>
      </div>

      {/* Footer Content - Multi-column */}
      <div className="border-t border-dashed border-line-dark">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12 lg:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Logo & Description Column */}
            <div className="lg:col-span-2">
              <a href="/" className="inline-flex items-center gap-3">
                <VertekIsotipo className="h-10 w-10 text-black" />
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-black">VERTEK</span>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-secondary">
                    Development Labs
                  </span>
                </div>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-secondary">
                Estudio de producto AI-First. Diseño y desarrollo de productos digitales con IA.
              </p>

              {/* Social Links */}
              <div className="mt-6 flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary transition-colors hover:text-accent active:text-accent"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-black">
                {footerLinks.services.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.services.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-base sm:text-sm text-secondary transition-colors hover:text-black active:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-black">
                {footerLinks.company.title}
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-base sm:text-sm text-secondary transition-colors hover:text-black active:text-black"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-black">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:contact@vertek.lab"
                    className="text-base sm:text-sm text-secondary transition-colors hover:text-black active:text-black"
                  >
                    contact@vertek.lab
                  </a>
                </li>
                <li className="text-sm text-secondary">Latinoamerica y Global</li>
                <li className="text-sm text-secondary">Respuesta en menos de 24h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dashed border-line-dark">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-12">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-secondary">
              © {new Date().getFullYear()} Vertek.lab. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-xs text-secondary">
              <a href="/privacy" className="transition-colors hover:text-black active:text-black">
                Politica de Privacidad
              </a>
              <a href="/terms" className="transition-colors hover:text-black active:text-black">
                Terminos de Servicio
              </a>
            </div>
            <p className="text-xs text-secondary">
              Disenado por <span className="font-medium text-black">ROWSHIP</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
