/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Explicitly enable dark mode with "class"
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // ✅ Include other potential directories
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
