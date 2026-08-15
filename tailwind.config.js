/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#f8dfe9",
        lavender: "#e8def9",
        cream: "#fffaf4",
        peach: "#f9e3d0",
        plum: "#3d2a36",
        plumSoft: "#624c59",
        rose: "#d989a6",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(122, 82, 97, 0.12)",
        card: "0 14px 32px rgba(103, 72, 81, 0.10)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
