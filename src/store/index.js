import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      tours: {},
      breakdown: [],
      socials: {}
    }
  },
  getters: {
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
