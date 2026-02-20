export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        secondary: "#0ea5e9",
      },

      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
      },

      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },

  plugins: [],
}