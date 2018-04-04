/**
 * Store for the primary nav bar and the Navigation Drawer.
 * This store control the Navbar (Toolbar) & the Navigation Drawer's properties.
 */
const state = {
  drawer: {
    isOpen: false
  }
}
const getters = {
  getDrawer () {
    return state.drawer.isOpen
  }
}
const actions = {}
const mutations = {
  setDrawerOpen (state, payload) {
    state.drawer.isOpen = payload.open
    console.log('drawer open: ' + state.drawer.isOpen)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
