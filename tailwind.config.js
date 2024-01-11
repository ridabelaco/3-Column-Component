/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightOrange: 'hsl(31, 77%, 52%)',
        darkCyan: 'hsl(184, 100%, 22%)',
        veryDarkCyan: 'hsl(179, 100%, 13%)',
        veryLightGray: 'hsl(0, 0%, 95%)',
        transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
      },
      fontFamily: {
        lexend: ['Lexend Deca', 'sans-serif'],
        bigShoulders: ['Big Shoulders Display', 'cursive'],
      },
    },
  },
  plugins: [],
}

