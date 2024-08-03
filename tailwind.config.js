/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      'max-2xl': { 'max': '1535px' }, // Custom max-width breakpoint for 2x extra-large screens
      'max-xl': { 'max': '1279px' },  // Custom max-width breakpoint for extra-large screens
      'max-lg': { 'max': '1023px' },  // Custom max-width breakpoint for large screens
      'max-md': { 'max': '767px' },   // Custom max-width breakpoint for medium screens
      'max-sm': { 'max': '639px' },   // Custom max-width breakpoint for small screens
      'max-xsm': { 'max': '460px' },
    },
  },
  plugins: [],
};
