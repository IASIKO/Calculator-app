/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'mobile': '485px'
    },
    extend: {
      gridTemplateColumns: {
        8: "repeat(4,minmax(70px,75px))",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      colors: {
        primary: {
          "main-bg": "var(--main-bg)",
          "keypad-toggle-bg": "var(--keypad-toggle-bg)",
          "screen-bg": "var(--screen-bg)",
          "key-bg-main": "var(--key-bg-main)",
          "key-shadow-main": "var(--key-shadow-main)",
          "key-bg2": "var(--key-bg2)",
          "key-shadow2": "var(--key-shadow2)",
          "key-bg3-toggle": "var(--key-bg3-toggle)",
          "key-shadow3": "var(--key-shadow3)",
          "main-text": "var(--main-text)",
          screen: "var(--screen)",
          output: "var(--output)",
          "white-color": "var(--white-color)",
          "equal-sign": "var(--equal-sign)",
          attribution: "var(--attribution)",
          hover1: "var(--hover1)",
          "hover-bg1": "var(--hover-bg1)",
          hover2: "var(--hover2)",
          "hover-bg2": "var(--hover-bg2)",
          hover3: "var(--hover3)",
          "hover-bg3": "var(--hover-bg3)",
        },
      },
    },
  },
  plugins: [],
};