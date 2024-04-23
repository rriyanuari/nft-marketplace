/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#2B2B2B",
        backgroundSecondary: "#3B3B3B",
        captionText: "#858584",
        text: "#FFFFFF",
        textSecondary: "#CCCCCC",
        callToAction: "#A259FF",
        blueAccent: "#377DF7",
        redAccent: "#FF7262",
      },
      fontFamily: {
        spaceMono: ['"Space Mono"', "monospace"],
        workSans: ['"Work Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
