import Vue from 'vue'
import Vuex from 'vuex'
import talesnavbar from './modules/talesnavbar'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    talesnavbar
  },
  strict: debug
  // plugins: debug ? [ createLogger() ] : []
})
