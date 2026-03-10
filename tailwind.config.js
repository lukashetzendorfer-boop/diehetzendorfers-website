/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anton': ['Anton', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#050a1a',
          900: '#0a1628',
          800: '#0f2040',
          700: '#162a55',
        },
        brand: {
          cyan: '#00e5ff',
          orange: '#ff6b2b',
          brown: '#3d1f0a',
          gold: '#c8872a',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #050a1a 0%, #0a1628 40%, #1a2a0a 70%, #3d1f0a 100%)',
        'section-gradient': 'linear-gradient(180deg, #050a1a 0%, #0a1628 100%)',
        'card-gradient': 'linear-gradient(145deg, rgba(10,22,40,0.9) 0%, rgba(61,31,10,0.3) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
        'bolt-flash': 'boltFlash 2s ease-in-out infinite',
        'slide-left': 'slideLeft 0.6s ease forwards',
        'counter': 'counter 2s ease forwards',
        'marquee': 'marquee 30s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        boltFlash: {
          '0%, 100%': { filter: 'drop-shadow(0 0 8px #00e5ff)' },
          '50%': { filter: 'drop-shadow(0 0 24px #ff6b2b) drop-shadow(0 0 48px #ff6b2b)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,229,255,0.2)' },
          '50%': { boxShadow: '0 0 60px rgba(0,229,255,0.5), 0 0 100px rgba(255,107,43,0.2)' },
        },
      },
    },
  },
  plugins: [],
}
