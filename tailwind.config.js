/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains", "monospace"],
        poppins: ["Poppins"]
      }
    },
  },
  plugins: [],
}
