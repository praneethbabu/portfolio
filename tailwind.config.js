/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#F8F9FA',
        foreground: '#0F172A',
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#0F172A',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        cream: {
          50: '#FAFBFB',
          100: '#F8F9FA',
          200: '#F1F3F5',
          300: '#E9ECEF',
          400: '#DEE2E6',
        },
        brand: {
          DEFAULT: '#0F172A',
          blue: '#2563EB',
          emerald: '#10B981',
        },
        border: 'rgba(15, 23, 42, 0.08)',
      },
      fontFamily: {
        heading: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      boxShadow: {
        'clean-card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 10px 25px -5px rgba(0, 0, 0, 0.03)',
        'clean-hover': '0 20px 35px -5px rgba(15, 23, 42, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.04)',
        'glass-cream': '0 20px 40px -15px rgba(15, 23, 42, 0.05)',
        'glow-sm': '0 0 15px rgba(16, 185, 129, 0.25)',
        'glow-lg': '0 0 35px rgba(15, 23, 42, 0.15)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'gradient-x': 'gradientX 6s ease infinite',
        'glow-line': 'glowLine 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glowLine: {
          '0%': { left: '-10%', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { left: '110%', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
