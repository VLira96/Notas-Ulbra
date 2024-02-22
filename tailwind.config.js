/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaria: '#202020',
        secundaria: '#000080',
        hover: '#0000cd',
        aprovado: '#90ee90',
        reprovado: '#ff073d',
        texto: {
          primario: '#d1d1d1',
          secundario: 'black'
        }
      }
    },
  },
  plugins: [],
}