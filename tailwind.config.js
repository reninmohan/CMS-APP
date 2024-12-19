/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-none": {
          "scrollbar-width": "none", // Hides scrollbar in Firefox
          "-ms-overflow-style": "none", // Hides scrollbar in IE/Edge
        },
        ".scrollbar-hidden::-webkit-scrollbar": {
          display: "none", // Hides scrollbar in Chrome, Safari
        },
      });
    },
  ],
}

