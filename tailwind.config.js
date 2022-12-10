/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        myportfoliotheme:{
          primary: '#78C4EB',
          secondary: '#19D3AE',
          accent: "#64748b",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}
