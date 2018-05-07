const state = {
  loggedIn: false
}

const getters = {
  isUserLoggedIn (state, getters) {
    return state.loggedIn
  }
}

const mutations = {
  setUserLoggedIn (state, payload) {
    state.loggedIn = payload.loggedIn
  }
}

const actions = { }

export default {
  state,
  getters,
  actions,
  mutations
}
