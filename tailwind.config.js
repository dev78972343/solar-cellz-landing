/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";
import tailwindScrollbar from "tailwind-scrollbar";
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xl": "1500px",
        "3xl": "1700px",
      },
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "gray-normal-active": "var(--gray-normal-active)",
        "normal-green-500": "var(--normal-green-500)",
        "dark-blue-500": "var(--dark-blue-500)",
        "dark-blue-400": "var(--dark-blue-400)",
        "normal-blue-500": "var(--normal-blue-500)",
        "light-blue-500": "var(--light-blue-500)",
        "sky-blue-200": "var(--sky-blue-200)",
        "sky-blue-50": "var(--sky-blue-50)",
        "black-600": "var(--black-600)",

        // Scrollbar customization
        "track-color": "rgba(161, 218, 254, 0.627)",
        "thumb-color": "var(--normal-blue-500)",

        // Custom colors
        amazon_blue: "#131921",
        amazon_light: "#232F3E",
        amazon_yellow: "#febd69",
        whiteText: "#ffffff",
        lightText: "#ccc",
        quantity_box: "#F0F2F2",
        footerBottom: "#131A22",
      },
      backgroundImage: {
        "primary-button-gradient":
          "linear-gradient(90deg, #0A0A2D 41%, #1372C4 100%)",
        "secondary-button-gradient": "linear-gradient(90deg, #9fc4ee 41%, #1372C4 100%)",
        "tartiary-gradient": "linear-gradient(90deg, #4C4C71 41%, #4D97D6 100%)",
      },

      fontFamily: {
        dmSans: ["var(--font-dm-sans)"],
      },

      transitionTimingFunction: {
        "in-out-circ": "cubic-bezier(0.85, 0, 0.15, 1)",
        "smooth-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindScrollbar({ nocompatible: true })],
};
