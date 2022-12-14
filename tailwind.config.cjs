/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "accent-blue-1": "#004DFF",
        "semantic-orange-3": "#FC9D00",
        "neutral-semantic-purple-3": "#CFCCFF",
        "neutral-1": "#04004D",
        "neutral-2": "#3F3D66",
        "neutral-3": "#667386",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar-hide")],
};
