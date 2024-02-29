import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        p1: {
          1: "#FFE4E9",
        },
        p2: {
          1: "#D4F1EF",
        },
        p3: {
          1: "#cdf3d8",
        },
        p4: {
          1: "#b8c3ef",
        },
        all: {
          1: "#f2f8bb",
        },
        about: {
          1: "#FFE7D5",
        },
        setting: {
          1: "#FFFFF4",
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text|border)-(p1|p2|p3|p4|all|about|setting)-(1)/,
    },
  ],
};
export default config;
