import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
    colors: {
      body: "#64748B",
      whiten: "#F1F5F9",
      whiter: "#F5F7FD",
      boxdark: "#24303F",
      "boxdark-2": "#1A222C",
      strokedark: "#2E3A47",
      primary: "#0e85ed",
    },
    screens: {
      ...defaultTheme.screens,
    },
    extend: {
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
export default config;
