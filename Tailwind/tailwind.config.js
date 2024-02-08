/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        kucing: 'url("../public/image/kucing.jpeg")',
        hutan: 'url("../public/image/forest.png")',
        pantai: 'url("../public/image/pantai.jpeg")',
      },
    },
  },
  plugins: [],
};
