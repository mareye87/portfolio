/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('src/assets/images/home-bg.jpg')",
      },
    },
  },
  plugins: [],
};
