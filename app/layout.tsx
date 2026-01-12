import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

export const metadata: Metadata = {
  title: 'Vertek.lab — Estudio de Producto AI-First',
  description:
    'Diseño y desarrollo de productos digitales con IA. MVPs en días, plataformas en semanas. Apps, SaaS, marketplaces.',
  keywords: [
    'desarrollo de productos',
    'MVP',
    'aplicaciones web',
    'aplicaciones móviles',
    'SaaS',
    'marketplaces',
    'diseño de producto',
    'desarrollo AI-First',
  ],
  authors: [{ name: 'Vertek.lab' }],
  creator: 'Vertek.lab',
  publisher: 'Vertek.lab',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_PE',
    url: 'https://vertek.lab',
    title: 'Vertek.lab — Estudio de Producto AI-First',
    description:
      'Diseño y desarrollo de productos digitales con IA. MVPs en días, plataformas en semanas. Apps, SaaS, marketplaces.',
    siteName: 'Vertek.lab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vertek.lab - Estudio de Producto AI-First',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertek.lab — Estudio de Producto AI-First',
    description:
      'Diseño y desarrollo de productos digitales con IA. MVPs en días, plataformas en semanas. Apps, SaaS, marketplaces.',
    images: ['/og-image.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Loading Screen */}
        <LoadingScreen />

        {/* Skip to main content for accessibility */}
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido principal
        </a>

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
