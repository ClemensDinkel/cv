/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**.html',],
  theme: {
    extend: {
      colors: {
        "oxford-blue": "#10253F",
        "non-photo-blue": "#93CDDD",
        "asparagus": "#79A250"
      },
      fontSize: {
        sm: ["16px", "30px"]
      }
    },
  },
  plugins: [],
}