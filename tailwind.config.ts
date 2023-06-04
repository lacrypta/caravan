import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bitcoin: "url('/images/background.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
