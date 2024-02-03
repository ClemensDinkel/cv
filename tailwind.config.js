/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**.html',],
  theme: {
    extend: {
      colors: {
        "oxford-blue": "#10253F",
        "non-photo-blue": "#93CDDD",
      },
      fontSize: {
        sm: ["16px", "30px"]
      }
    },
  },
  plugins: [],
}