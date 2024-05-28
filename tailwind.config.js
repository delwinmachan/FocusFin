const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  // Ensure these match with .storybook/preview.js
  theme: {
    colors: {
      // Theme colors
      red: "#F87070",
      teal: "#70F3F8",
      magenta: "#D881F8",
      // Base colors
      grey1: "#D7E0FF",
      grey2: "#EFF1FA",
      white: "#FFFFFF",
      indigo1: "#1E213F",
      indigo2: "#161932",
      purple:"#9b59b6"
    },
    fontSize: {
      h1: [
        "100px",
        {
          lineHeight: "120px",
          letterSpacing: "-5px",
          fontWeight: "700",
        },
      ],
      h2: [
        "28px",
        {
          lineHeight: "34px",
          fontWeight: "700",
        },
      ],
      h3: [
        "16px",
        {
          lineHeight: "19px",
          letterSpacing: "15px",
          fontWeight: "700",
        },
      ],
      h4: [
        "13px",
        {
          lineHeight: "16px",
          letterSpacing: "5px",
          fontWeight: "700",
        },
      ],
      body1: [
        "14px",
        {
          lineHeight: "18px",
          fontWeight: "700",
        },
      ],
      body2: [
        "12px",
        {
          lineHeight: "14px",
          fontWeight: "700",
        },
      ],
    },
    screens: {
      xs: "375px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
    },
    fontFamily: {
      sans: ["var(--font-kumbh-sans)", ...fontFamily.sans],
      serif: ["var(--font-roboto-slab)", ...fontFamily.serif],
      mono: ["var(--font-space-mono)", ...fontFamily.mono],
    },
  },
  plugins: [],
};
