import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme-aware colors using CSS variables
        bg: 'var(--bg)',
        'bg-dark': 'var(--bg-dark)',
        'bg-card': 'var(--bg-card)',
        'bg-elevated': 'var(--bg-elevated)',
        'bg-cream': 'var(--bg-card)',

        // Text colors
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',

        // Accent - Lime Green (Geospace style)
        accent: '#c5e063',
        'accent-light': '#d4e88a',
        'accent-dark': '#a8c94d',

        // Borders
        line: 'var(--line)',
        'line-dark': 'var(--line-dark)',
        'line-light': 'var(--line-light)',

        // Hover states
        hover: 'var(--hover)',
      },
      borderColor: {
        DEFAULT: '#e5e5e5',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(180deg, #0f1110 0%, #0a0b0a 100%)',
        'gradient-card': 'linear-gradient(135deg, #1a1c1d 0%, #252827 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(15,17,16,0.7) 0%, rgba(10,11,10,0.95) 100%)',
        'gradient-accent': 'linear-gradient(135deg, #c5e063 0%, #d4e88a 100%)',
        'gradient-border': 'linear-gradient(135deg, #c5e063 0%, transparent 50%, #c5e063 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
      },
      maxWidth: {
        container: '1280px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
        'section': '8rem',
        'section-lg': '12rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'canvas-reveal': 'canvasReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'blur-in': 'blurIn 1s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        canvasReveal: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0% 0 0 0)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        blurIn: {
          '0%': { filter: 'blur(10px)', opacity: '0' },
          '100%': { filter: 'blur(0px)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(197, 224, 99, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(197, 224, 99, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
export default config
