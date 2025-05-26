/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f7ff',
          100: '#e0eefe',
          200: '#b9ddfd',
          300: '#7cc5fb',
          400: '#48a9f9',
          500: '#2491f7',
          600: '#106EFD',
          700: '#0055d4',
          800: '#0046b0',
          900: '#00377e',
        },
        cyan: {
          50: '#edfcff',
          100: '#d6f7fc',
          200: '#b0effb',
          300: '#79e5f9',
          400: '#41E2F8',
          500: '#19c7df',
          600: '#0ea4bc',
          700: '#0d8399',
          800: '#116a7c',
          900: '#125769',
        },
        indigo: {
          50: '#f0f5ff',
          100: '#e5eeff',
          200: '#cddeff',
          300: '#a6c4ff',
          400: '#719eff',
          500: '#3a70ff',
          600: '#1e4eff',
          700: '#0037f5',
          800: '#002ed1',
          900: '#0026a6',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #106EFD, #48a9f9)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
      },
      transitionDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
      },
    },
  },
  plugins: [],
};
