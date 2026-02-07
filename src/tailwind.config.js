/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#059669', // Vert confiance
          dark: '#1e293b',    // Bleu nuit pro
        }
      }
    },
  },
  plugins: [],
}
