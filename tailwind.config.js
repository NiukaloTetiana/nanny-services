/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm-max": { max: "374.99px" },
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        accentColor: "#f03f3b",
        whiteColor: "#fff",
        lightColor: "#fbfbfb",
        darkColor: "#11101c",
      },
      boxShadow: {
        "custom-shadow": "0px 0px 0px 2px #eca29b",
        "success-shadow": "0px 0px 0px 2px #86efac",
        "list-shadow": "0 20px 69px 0 #00000011",
      },

      fontFamily: {
        helvetica: ["Helvetica Neue", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          minWidth: "320px",
          maxWidth: "375px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          "@screen md": {
            paddingLeft: "36px",
            paddingRight: "36px",
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: "128px",
            paddingRight: "128px",
            maxWidth: "1440px",
          },
        },
      });
    },
  ],
};
