// const plugin = require('tailwindcss/plugin')


module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      "3xl": "200px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide"),
    // plugin(function({ addBase, theme }) {
    //       addBase({
    //         'body': { bg-[#06202A] text-gray-300; },
    //       })
    //     }),
    ],
}