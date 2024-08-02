import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    cursor: {
      trash: 'url("/trash.svg"), auto',
      pointer: "pointer",
      auto: "auto",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        first_header: "#3D3D3D",
        purple_sensedia: "#8556AA",
      },
    },
  },
  plugins: [],
};
export default config;
