import type { Config } from 'tailwindcss'

const config: Config = {
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

        // Text colors
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',

        // Accent - Salmon/Coral (Webisoft style)
        accent: '#F03671',
        'accent-light': '#F45A8D',
        'accent-dark': '#D42A5F',

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
        'gradient-light': 'linear-gradient(180deg, #ffffff 0%, #f5f5f5 100%)',
        'gradient-accent': 'linear-gradient(135deg, #F03671 0%, #F45A8D 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
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
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'scale-in': 'scaleIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
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
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
