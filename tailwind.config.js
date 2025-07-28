/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: "#070212",
        secondary: "#0f0424",
        lightColour:"#231144",
        darkColour:"#0f081c",
        cardColour: "#0f0424",
        accent: "#F59E0B",
        danger: "#EF4444",
        success: "#10B981",
      },
    },
  },
  plugins: [],
}

