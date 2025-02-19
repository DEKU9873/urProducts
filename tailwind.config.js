/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f42c37",
        secondary: "#f42c37",
        brandYellow: "#fdc62e",
        brandGreen: "#2dcc6f",
        brandBlue: "#1376f4",
        brandWhite: "#eeeeee",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
        },

        fontFamily: {
          sans: ['Cairo', 'sans-serif'], // إضافة Cairo كخط افتراضي
        },
      },
    },
  },
  plugins: [],
};
