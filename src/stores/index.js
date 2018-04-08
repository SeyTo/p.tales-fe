import Vue from 'vue'
import Vuex from 'vuex'

import TalesNavbarStore from './modules/TalesNavbarStore'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    TalesNavbarStore
  },

  // debugging with vue debugger
  strict: debug

  // plugins: debug ? [ createLogger() ] : []
})
