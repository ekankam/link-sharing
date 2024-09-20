/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cc-purple": {
          100: "#EFEBFF",
          400: "#BEADFF",
          700: "#633CFF",
        },
        "cc-gray": {
          100: "#FAFAFA",
          200: "#D9D9D9",
          300: "#737373",
          400: "#333333",
        },
        "cc-white": "#FFFFFF",
        "cc-red": "#FF3939",
        socials: {
          gitHub: "#1A1A1A",
          frontendMentor: "#FFFFFF",
          twitter: "#43B7E9",
          linkedIn: "#2D68FF",
          youTube: "#EE3939",
          facebook: "#2442AC",
          twitch: "#EE3FC8",
          devTo: "#333333",
          codeWars: "#8A1A50",
          freeCodecamp: "#302267",
          gitLab: "#EB4925",
          hashNode: "#0330D1",
          stackOverflow: "#EC7100",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
