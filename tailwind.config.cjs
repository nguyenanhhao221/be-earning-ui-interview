/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-semantic-purple-3": "#CFCCFF",
        "neutral-1": "#04004D",
        "neutral-2": "#3F3D66",
        "neutral-3": "#667386",
      },
    },
  },
  plugins: [require("daisyui")],
};
