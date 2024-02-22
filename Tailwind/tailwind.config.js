/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        kucing: 'url("./public/image/kucing.jpeg")',
        hutan: 'url("../public/image/forest.png")',
        pantai: 'url("../public/image/pantai.jpeg")',
        art: 'url("../public/image/art.jpg")',
        vlue: 'url("../public/image/127.jpg")',
        onit: 'url("../public/image/sepatu.jpeg")',
      },
    },
    // },
    plugins: [],
  },
};
