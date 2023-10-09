/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.tsx", "./src/**/*.tsx", "index.html"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#FF4350",
        "dark-background-main" :"#222A31",
        "dark-background-nav": "#1A1C20",

        "dark-text-base": "#E6EBEC",
        "dark-text-secondary": "#5F7482",
      }
    },
  },
  plugins: [],
}

