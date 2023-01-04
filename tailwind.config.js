/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/client/**/*.{html,js}", 
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}
