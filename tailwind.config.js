/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctortheme: {

          primary: "#0FCFEC",

          secondary: "#19D3AE",

          accent: "#37CDBE",

          neutral: "#3A4256",

          "base-100": "#FFFFFF",
        },

      },
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "heroPattern": "url('./public/bg.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}
