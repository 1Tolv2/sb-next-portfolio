/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./WS/**/*.{js,jsx}",
  ],
  theme: {
    fontFamily: { sans: ["Roboto,Helvetica"], serif: ["Bitter"] },
    colors: {
      primary: { main: "#003153", light: "#348AA7" },
      secondary: { main: "#5DD39E", dark: "" },
      accent: { main: "#FF686B" },
      neutral: "#F7F7FF",
      black: "#000000",
    },
    container: {
      center: true,
    },
    extend: {
      width: {
        100: "50rem",
        128: "66.25rem",
      },
      height: {
        100: "48rem",
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /(top|bottom|left|right)-(?:\b|-)([1-9]{1,2}[0]?|100)\b/ },
  ],
};
