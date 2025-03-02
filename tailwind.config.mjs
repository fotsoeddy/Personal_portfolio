/** @type {import('tailwindcss').Config} */
const config = {
    content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          lightHover: "red",
          darkHover: "#2a004a",
          darkTheme: "#11001F",
        },
        fontFamily: {
          Outfit: ["Outfit", "sans-serif"],
          Ovo: ["Ovo", "serif"],
        },
      },
    },
    darkMode: 'selector',
    plugins: [],
  };
  
  module.exports = config; // ✅ Use `module.exports`, NOT `export default`
  