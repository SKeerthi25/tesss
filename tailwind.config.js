/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#C59B27',
          'gold-hover': '#B8860B',
          'gold-light': '#FDFBF7',
          charcoal: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px 0 rgba(0, 0, 0, 0.02)',
        'enterprise': '0 4px 20px -2px rgba(197, 155, 39, 0.15), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(197, 155, 39, 0.2), 0 4px 12px -2px rgba(0, 0, 0, 0.04)',
        'floating': '0 20px 40px -10px rgba(17, 19, 24, 0.16)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [],
}
