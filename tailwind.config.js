/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    font: {
      rail: "Raleway, sans-serif ",
    },
    animation: {
      goyang: "goyang 4s ease-in-out infinite",
    },
    keyframes: {
      goyang: {
        "0%,100%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
      },
    },

    extend: {},
  },
  plugins: [],
};
