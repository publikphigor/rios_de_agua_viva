/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4472C4",
        secondary: "#212121",
      },
      width: {
        "fit-content": "fit-content",
      },
      height: {
        "fit-content": "fit-content",
      },
      fontFamily: {
        "dancing-script": [`"Dancing Script"`, "sans-serif"],
      },
    },
  },
  plugins: [],
};
