module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        purply: "#1e001e",
        pulp: "#5C246E",
        pulpy: "#301934",
        palegreen: "#1f4026",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
