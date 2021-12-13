module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors:{
      'bb-indigo-50': '#EEF2FF'
      },
      width:{
        '400':'400px',
        '720':'720px',
        '384':'384px',
        '200':'200px',
        '640' :'640px',
        '276':'276px',
        '300':'300px'
      },
      height:{
        '56':'56px'
      }
    },
  },
  variants: {backgroundColor: ["even"]},
  plugins: [],
}
