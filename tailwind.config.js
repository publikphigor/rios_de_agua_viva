/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#45296a",
        secondary: "#130724",
      },
      width: {
        "fit-content": "fit-content",
      },
      height: {
        "fit-content": "fit-content",
      },
    },
  },
  plugins: [],
};
