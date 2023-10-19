/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      before: {
        content: "''",
      },
      after: {
        content: "''",
      },
      boxShadow: {
        'xl': '10px 10px 30px #bebebe90, -10px -10px 30px #ffffff90',
      }
    },
  },
  plugins: [],
}
