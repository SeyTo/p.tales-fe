/**
 * Store for the primary Navbar and the Navigation Drawer and related components.
 */
const state = {
  drawer: {
    // set drawer if open
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
