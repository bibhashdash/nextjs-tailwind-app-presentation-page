import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: '#03A9F4',
      secondary: '#079F47',
      overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

      // light mode
      bg: '#FEF2E8',
      text: '#000',
      border: '#000',
      white: '#fff',

      // dark mode
      darkBg: '#374151',
      darkText: '#eeefe9',
      darkBorder: '#000',
      secondaryBlack: '#212121', // opposite of plain white, not used pitch black because borders and box-shadows are that color
    },
    fontFamily: {
      sans: 'var(--font-poppins)',
    }
  },
  plugins: [],
});

export default config;
