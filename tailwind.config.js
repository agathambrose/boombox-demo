module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        purply: "#160F29",
        pulp: "#5C246E",
        pulpy: "#301934",
        palegreen: "#1f4026",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
