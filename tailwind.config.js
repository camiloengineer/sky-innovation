module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: '#247BA0',
      black: '#02111B',
      purple: '#C69DD2',
      orange: {
        default: '#E76F51',
        dark: '#CD5335'
      },
      white: {
        default: '#F4F4F9',
        dark: '#dcdfe7'
      }
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