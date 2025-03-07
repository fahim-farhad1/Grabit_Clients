/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5CAF90",
        secondary: "#4B5966",
        background: "#F8F8FB",
        accent: "#FF7070",
        rating: "#F7A465",
        white: "#FFFFFF",
        text: "#777777",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // Disable all default themes, including dark mode
  },
};
