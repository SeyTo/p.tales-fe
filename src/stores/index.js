import Vue from 'vue'
import Vuex from 'vuex'

import BaseNavDrawer from './modules/base-navdrawer.store.js'
import BaseNavBar from './modules/base-navbar.store.js'
import User from './modules/user.store.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    BaseNavDrawer,
    BaseNavBar,
    User
  },

  // debugging with vue debugger
  strict: debug

  // plugins: debug ? [ createLogger() ] : []
})
