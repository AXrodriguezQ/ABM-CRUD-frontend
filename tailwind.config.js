/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#3d63fc',
        customColorHover: '#1e6ce3',
      },
    },
  },
  plugins: [],
}
