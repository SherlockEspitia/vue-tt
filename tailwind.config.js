/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors:{
        'purple':'#CA38ED',
        'pink':'#E487FB',
        'darkblue':'#3E1149',
        'darkgrey':'#574E5A',
        'gray':'#BCB1BF'
      },
      fontFamily:{
        'roboto':'Roboto',
        'poppins':'Poppins',
      }
    },
    screens:{
      'smartphone': {'max':'720px'},
      'desktop': {'min':'720px'},
  },
  plugins: [],
}
}
