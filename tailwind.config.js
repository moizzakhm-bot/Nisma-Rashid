/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: '#020804',
          900: '#05140b',
          850: '#081e11',
          800: '#0c2b18',
          700: '#133d24',
          600: '#1e5634',
          border: 'rgba(226, 232, 240, 0.2)',
          'border-light': 'rgba(226, 232, 240, 0.38)',
          glow: 'rgba(226, 232, 240, 0.15)',
        },
        frost: {
          DEFAULT: '#E2E8F0', // Crisp Frost Silver
          bright: '#F8FAFC',  // Luminous Frost Silver
          muted: '#94A3B8',   // Soft Cool Frost Silver
          dim: '#64748B',
          border: 'rgba(226, 232, 240, 0.22)',
          'border-light': 'rgba(226, 232, 240, 0.45)',
        },
        silver: {
          white: '#F8FAFC',
          DEFAULT: '#E2E8F0',
          muted: '#94A3B8',
        },
        sage: {
          light: '#E2E8F0',
          DEFAULT: '#94A3B8',
          dark: '#64748B',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        arabic: ['"Amiri"', '"Noto Naskh Arabic"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-plus': '0.3em',
        'super-wide': '0.45em',
      },
      boxShadow: {
        'emerald-card': '0 10px 35px -5px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(226, 232, 240, 0.05)',
        'frost-glow': '0 0 25px rgba(226, 232, 240, 0.22)',
      }
    },
  },
  plugins: [],
}
