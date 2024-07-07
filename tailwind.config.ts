import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        grey: "#545353",
        orange: "#FF8933",
        grey50: "#F5F5F5",
        black90: "#181717",
        "dark-brown": "#5B3702",
        red:"#DB4444",
        grey10: "#F5F5F5",
      },
      colors: {
        grey: "#545353",
        grey10: "#F5F5F5",
         red:"#DB4444",
        orange: "#FF8933",
        grey50: "#F5F5F5",
        black90: "#181717",
        black10: "#282727",
        "dark-brown": "#5B3702",
      },
      boxShadow:{
        "shadow": "12px 9px 23px -10px rgba(0,0,0,0.1)"
      },
      screens:{
        m:"918px",
        
      }
    },
  },
  plugins: [],
};
export default config;
