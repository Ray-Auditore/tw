/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        hutan: 'url("/public/image/forest.png")',
        kucing: 'url("/public/image/kucing.jpeg")',
      },
    },
  },
  plugins: [],
};
