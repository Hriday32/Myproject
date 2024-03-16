/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./assets/Hero section.jpeg')",
        'ad-pattern': "url('../Ads Banner Section/Ad Banner.jpeg')",
      }
    },
  },
  plugins: [],
}

