// preventFullImport disabled for testing only, otherwise would
// not have allowed to use any modules
const plugins = [
  "transform-vue-jsx", 
  "transform-runtime",
  [
    "transform-imports", {
      "vuetify": {
        "transform": "vuetify/es5/components/${member}",
        "preventFullImport": !(process.env.BABEL_ENV === 'test')
      }
    }
  ]
]

const presets = [
  [ "env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }
  ],
  "stage-2"
]

const env = {
  "test": {
    "presets": ["env", "stage-2"],
    "plugins": ["transform-vue-jsx", "istanbul"]
  }
}

module.exports = {
  plugins: plugins,
  presets: presets,
  env: env
}
