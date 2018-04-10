import Vue from 'vue'
import Vuex from 'vuex'

import TalesNavDrawer from './modules/tales-navdrawer.store.js'
import TalesNavBar from './modules/tales-navbar.store.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    TalesNavDrawer,
    TalesNavBar
  },

  // debugging with vue debugger
  strict: debug

  // plugins: debug ? [ createLogger() ] : []
})
