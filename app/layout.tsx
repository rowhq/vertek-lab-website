import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Vertek.lab — The Architecture of Intelligent Systems',
  description:
    'We design and engineer intelligent infrastructures — fast, modular, and built to scale. AI-First engineering studio.',
  keywords: [
    'AI-First',
    'Engineering Studio',
    'Intelligent Systems',
    'Enterprise Integration',
    'Systems Architecture',
    'Software Development',
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
    locale: 'en_US',
    url: 'https://vertek.lab',
    title: 'Vertek.lab — The Architecture of Intelligent Systems',
    description:
      'We design and engineer intelligent infrastructures — fast, modular, and built to scale.',
    siteName: 'Vertek.lab',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vertek.lab - AI-First Engineering Studio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vertek.lab — The Architecture of Intelligent Systems',
    description:
      'We design and engineer intelligent infrastructures — fast, modular, and built to scale.',
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
    <html lang="en" className={`scroll-smooth ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
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
          Skip to main content
        </a>

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
