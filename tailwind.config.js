/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'aqua': '#7AE7C7',
      'slategray': '#6C809A',
      'edit': '#9CBFF3',
      'delete': '#F95B5B',
    }
  },
  plugins: [],
}

