import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1280px',
    },
    extend: {
      // fontFamily: {
      //   bangers: [`var(--font-bangers)`, 'sans-serif'],
      //   quicksand: [`var(--font-quicksand)`, 'sans-serif'],
      //   robotoCondensed: [`var(--font-robotoCondensed)`, 'sans-serif'],
      // },
      colors: {
        primary: '#ff0000', 
        primaryLight:"#ef1012",
        secondary: '#ffa323',
        tertiary: '#331812',
        black: '#231714',
        orange: '#FF7A30',
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
    },
  },
  darkMode: "class",
  
  plugins: [nextui()],
};
export default config;
