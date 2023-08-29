/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue-intro": "hsl(217, 28%, 15%)",
        "dark-blue-main": "hsl(218, 28%, 13%)",
        "dark-blue-footer": "hsl(216, 53%, 9%)",
        "dark-blue-main2": "hsl(219, 30%, 18%)",
        cyan: "hsl(176, 68%, 64%)",
        blue: "hsl(198, 60%, 50%)",
        "light-red": "hsl(0, 100%, 63%)",
      },
    },
  },
  plugins: [],
};
