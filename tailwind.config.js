/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "bg-color": "#282C33",
      "primary": "#C778DD",
      "white": "#FFFFFF",
      "gray": "#ABB2BF",
    },
    // screens: {
    //   'sm': '640px',

    //   'md': '768px',

    //   'lg': '1024px',

    //   'xl': '1280px',

    //   '2xl': '1536px',
    // },
    fontFamily: {
      WorkSans: ["Work Sans"]
    },
    extend: {

    },
  },
  plugins: [],
};
