const state = {
  navbar: {
    slotHidden: false
  } 
}

const getters = {
  isNavBarSlotHidden: (state, getters) => state.navbar.slotHidden
}

const actions = { }

const mutations = {
  setNavBarSlotHidden (state, payload) {
    state.navbar.slotHidden = payload.slotHidden
  } 
}

export default {
  state,
  getters,
  actions,
  mutations
}
