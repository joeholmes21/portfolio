/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
      extend: {
          fontFamily: {
              display: ["Pixelify Sans", "sans-serif"],
              body: ["Roboto", "sans-serif"]
          },
      },
  },
  plugins: [],
}