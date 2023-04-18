/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkAccent: "#596673",
      },
      screens: {
        desktop: "1200px",
        tablet: "768px",
      },
      keyframes: {
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-right": "slideRight 0.2s ease-in-out forwards",
        "slide-left": "slideLeft 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
