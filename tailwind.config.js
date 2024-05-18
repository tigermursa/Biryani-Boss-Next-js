/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ff0000",
        primaryLight: "#ef1012",
        secondary: "#ffa323",
        tertiary: "#331812",
        // black: "#231714",
        orange: "#FF7A30",
      },
      // backgroundImage: {
      //   pattern: "url('/pattern.png')",
      // },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
    // screens: {
    //   sm: '640px',
    //   md: '768px',
    //   lg: '960px',
    //   xl: '1280px',
    // },
  },
  plugins: [],
};
