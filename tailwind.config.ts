import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-radial": "radial-gradient(circle at center center, #131fa8 0%, #5527f5 50%, #9b60eb 100%)",
      },
      colors: {
        'button-color': '#9b60eb',
        'tag-color': '#cfcfcf',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: ["dracula", "winter"],
  },
};
export default config;
