module.exports = {
  important: true,
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      width:{
        '400':'400px',
        '720':'720px',
        '384':'384px',
        '200':'200px',
        '640' :'640px',
        '276':'276px'
      }
    },
  },
  variants: {backgroundColor: ["even"]},
  plugins: [],
}
