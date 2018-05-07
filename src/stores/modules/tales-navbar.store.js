const state = {
  navbar: {
    empty: false
  }
}

const getters = {
  isNavBarEmpty (state, getters) {
    return state.navbar.empty
  }
}

const actions = { }

const mutations = {
  setNavBarEmpty (state, payload) {
    state.navbar.empty = payload.empty
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
