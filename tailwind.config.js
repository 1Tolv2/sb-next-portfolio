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
      backgroundImage: { "card-background": "url('/paper-bg.svg')" },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(top|bottom|left|right)-(?:\b|-)([1-9]{1,2}[0]?|100)\b/,
      variants: ["sm", "md", "lg"],
    },
    {
      pattern:
        /(bg|text|fill)-(primary-main|primary-light|secondary-main|secondary-dark|accent-dark|accent-main|black|white|neutral)/,
    },
    { pattern: /w-\d/ },
    { pattern: /text-(center|left|right)/ },
    "md:flex-row-reverse",
    "md:flex-row",
  ],
};
