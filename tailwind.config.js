module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif']
      },
      fontSize: {
        heading1: ['48px', { lineHeight: '1.1' }],
        heading2: '22px'
      },
      backgroundImage: {
        'navbar-gradient': 'linear-gradient(90deg, #F98D11 0%, #0448AD 50%, #12145E 100%)',
        'two-stop-reverse': 'linear-gradient(90deg, #12145E 0%, #0448AD 100%)'
      }
    },
  },
  plugins: []
}
