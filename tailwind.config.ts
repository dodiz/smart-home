import type { Config } from "tailwindcss";

const baseFontSize = 10;

export const colors = {
  primary: {
    DEFAULT: "hsla(180,100%,50%,1)",
    opacity: "hsla(180,100%,50%,0.05)",
    hover: "hsla(180,100%,60%,1)",
    bg: "hsla(180,100%,10%,1)",
    "bg-hover": "hsla(180,100%,20%,1)",
  },
  secondary: {
    DEFAULT: "hsla(60,100%,50%,1)",
    opacity: "hsla(60,100%,50%,0.05)",
    hover: "hsla(60,100%,60%,1)",
    bg: "hsla(60,100%,10%,1)",
    "bg-hover": "hsla(60,100%,20%,1)",
  },
  destructive: {
    DEFAULT: "hsla(0,100%,50%,1)",
    opacity: "hsla(0,100%,50%,0.05)",
    hover: "hsla(0,100%,60%,1)",
    bg: "hsla(0,100%,10%,1)",
    "bg-hover": "hsla(0,100%,20%,1)",
  },
  background: "#141515",
};

const theme: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors,
      spacing: () => ({
        ...Array.from({ length: 96 }, (_, index) => index * 0.5)
          .filter((i) => i)
          .reduce(
            (acc, i) => ({ ...acc, [i]: `${i / (baseFontSize / 4)}rem` }),
            {}
          ),
      }),
    },
  },
  plugins: [],
};

export default theme;
