import type { Config } from "tailwindcss";

export const colors = {
  primary: {
    DEFAULT: "hsla(180,100%,50%,1)",
    hover: "hsla(180,100%,60%,1)",
    bg: "hsla(180,100%,10%,1)",
    "bg-hover": "hsla(180,100%,20%,1)",
  },
  secondary: {
    DEFAULT: "hsla(60,100%,50%,1)",
    hover: "hsla(60,100%,60%,1)",
    bg: "hsla(60,100%,10%,1)",
    "bg-hover": "hsla(60,100%,20%,1)",
  },
  background: "#141515",
};

const theme: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
};

export default theme;
