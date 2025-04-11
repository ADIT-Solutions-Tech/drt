export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['hover'], // Ensure hover is enabled for background colors
      textColor: ['hover'],       // Ensure hover is enabled for text colors
    },
  },
  plugins: [],
}