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
        texto: '#d1d1d1',
        aprovado: '##90ee90',
        reprovado: '#ff073d'
      }
    },
  },
  plugins: [],
}