const colors = require("tailwindcss/colors");
module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      heading: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
      body: ["Raleway", "ui-sans-serif", "system-ui", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        hero: "url('hero.jpg')",
        portrait: "url('portrait.jpg')",
        contact: "url('contact.svg')"
      }),
    },
    colors: {
      colors,
      white: colors.white,
      gray: colors.coolGray,
      bluegray: colors.blueGray,
      teal: colors.teal,
      cyan: colors.cyan,
      blue: colors.blue,
      customDarkBlue: "#0B4F6C",
      customDarkerBlue: "#073b52",
      transparent: colors.transparent,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
