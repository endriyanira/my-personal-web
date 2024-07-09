/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
    colors: {
      primaryDarkText: "#E9EBEC",
      primaryLightText: "#121419",
      secondaryDarkText: "#979EA5",
      secondaryHeadingText: "#687282",
      experienceCardBg: "#2B3240",
      experienceCardLightBg: "#727173",
      experienceCardLightDetail: "#D9D9D9",
    },
  },
  darkMode: "class",
  plugins: [],
};
