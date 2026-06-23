/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-ocean': '#0EA5E9',
        'brand-turquoise': '#14B8A6',
        'brand-sunset': '#F97316',
        'brand-sand': '#F5F5DC', // Or F1E9D2 depending on preference
        'brand-bg': '#F8FAFC',
        'brand-black': '#0f172a',
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
