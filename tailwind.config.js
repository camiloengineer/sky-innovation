module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: {
        default: '#E76F51',
        dark: '#CD5335'
      },
      blue: '#247BA0',
      black: '#02111B',
      white: '#F4F4F9',
      purple: '#C69DD2',
    },
    extend: {
      backgroundImage: {
       'girl-smiling': "url('/images/girl-smiling.png')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
