import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["var(--font-sans)", ...fontFamily.sans],
        franklin: ["var(--font-franklin)"],
        raleway: ["var(--font-raleway)"],
        poppins: ["var(--font-poppins)"],
        mate: ["var(--font-mate)"],
      },
      colors: {
        primary: "#A87133",
        light: "#c29c70",
        lighter: "#dcc6ad",
        darker: "#54391a",
        dark: "#764f24",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
