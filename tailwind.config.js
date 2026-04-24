/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0D0D0D',
        'dark-card': '#111111',
        'dark-border': '#1A1A1A',
        'dark-border2': '#2A2A2A',
        'text-primary': '#F2F2F2',
        'text-secondary': '#888888',
        'accent-gold': '#FFD700',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
