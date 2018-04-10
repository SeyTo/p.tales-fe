
/**
 * Basic data like `isCompactView` is passed as props whenever a TalesNavDrawer's dynamic component is initialized.
 */
const state = {
  // set drawer if open
  isOpen: false,
  // enable/disable drawer
  enable: true,
  // collection of data for navdrawer's dynamic components to exploit
  data: { isCompactView: true }
}

const getters = {
  getDrawerData: (state, getters) => {
    return state.data
  },
  isDrawerOpen: (state, getters) => {
    return state.isOpen
  },
  isDrawerEnabled: (state, getters) => {
    return state.enable
  }
}

const actions = {}

const mutations = {
  setDrawerOpen (state, payload) {
    state.isOpen = payload.open
  },
  setDrawerEnabled (state, payload) {
    state.enable = payload.enable
  },
  setDrawerComponentData (state, payload) {
    state.data = payload.data
  }
}

/**
 * Store for the primary NavDrawer.
 */
export default {
  state,
  getters,
  actions,
  mutations
}
