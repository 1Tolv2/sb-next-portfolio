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
      secondary: { main: "#5DD39E", dark: "#56C090" },
      accent: { main: "#FF686B", dark: "#FF5C5F" },
      neutral: "#F7F7FF",
      black: "#000000",
      white: "#FFFFFF",
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
      maxWidth: {
        150: "50vw",
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(top|bottom|left|right)-(?:\b|-)([1-9]{1,2}[0]?|100)\b/,
      variants: ["md", "lg"],
    },
    {
      pattern:
        /(bg|text|fill)-(primary-main|primary-light|secondary-main|secondary-dark|accent-dark|accent-main|black|white|neutral)/,
    },
    { pattern: /w-\d/ },
    "text-center",
    "md:flex-row-reverse",
    "md:flex-row",
  ],
};
