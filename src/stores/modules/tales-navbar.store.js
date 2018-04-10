const state = {
  navbar: {
    // set hidden slots (dynamic components)
    slotHidden: false,
    // sets container size
    container: false
  }
}

const getters = {
  isNavBarSlotHidden: (state, getters) => state.navbar.slotHidden,
  isContainerSize: (state, getters) => state.navbar.container
}

const actions = { }

const mutations = {
  // TODO: Remove <10-04-18, rj> //
  setNavBarSlotHidden (state, payload) {
    state.navbar.slotHidden = payload.slotHidden
  },
  setNavBarProps (state, payload) {
    state.navbar.slotHidden = payload.slotHidden
    state.navbar.container = payload.container
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
