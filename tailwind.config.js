/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#02020a',
          900: '#05050f',
          800: '#0a0a1a',
          700: '#0f0f28',
          600: '#16163a',
        },
        gold: {
          200: '#FBE99A',
          300: '#F5D46B',
          400: '#E8B84B',
          500: '#C9A227',
          600: '#A07D1A',
          700: '#7A5E12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'fade-in-slow': 'fadeIn 1.6s ease forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,162,39,0.25), 0 0 60px rgba(201,162,39,0.08)' },
          '50%': { boxShadow: '0 0 40px rgba(201,162,39,0.5), 0 0 100px rgba(201,162,39,0.2)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A227 0%, #F5D46B 50%, #C9A227 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #C9A227 0%, #F5D46B 25%, #FBE99A 50%, #F5D46B 75%, #C9A227 100%)',
        'space-gradient': 'radial-gradient(ellipse at center, #0f0f28 0%, #05050f 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(201,162,39,0.06) 0%, rgba(201,162,39,0.02) 100%)',
      },
    },
  },
  plugins: [],
}
