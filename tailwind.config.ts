import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blatant: ["Blatant", "Arial"],
        standerd: ["Standerd", "Trebuchet MS"],
      },
      backgroundImage: {
        bitcoin: "url('/images/background.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
