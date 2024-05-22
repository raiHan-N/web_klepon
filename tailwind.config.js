/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "jumbotron-patern": "url('/jumbotron.jpg')",
      },
      colors: {
        light: "#fffcf4",
        dark: "#03071E",
        primary: "#F48C06",
      },
    },
  },
  plugins: [],
};
