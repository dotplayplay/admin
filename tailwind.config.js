/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "300px",
        // => @media (min-width: 400px) { ... }
        xs: "460px",
        // => @media (min-width: 400px) { ... }
        sm: "641px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        xd: "960px",
        // => @media (min-width: 960px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        slg: "1023px",
        // => @media (min-width: 1280px) { ... }
        xlg: "1110px",
        // => @media (min-width: 1280px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
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
