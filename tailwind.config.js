export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",   // small phones
      sm: "640px",   // default
      md: "768px",   // tablets
      lg: "1024px",  // laptops
      xl: "1280px",  // desktops
      xxl: "1536px", // large screens
    },
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
        affogato: ["SweetAffogato", "cursive"],
        heading: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#ec4899",
      },
    },
  },
  plugins: [],
};