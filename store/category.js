export default {
  state: {
    category: [],
    activeCategory: 1
  },
  getters: {
    getCategory (state) {
      return state.category
    },
    getActiveCategory (state) {
      return state.activeCategory
    }
  },
  mutations: {
    SET_CATEGORY (state, payload) {
      state.category = payload
    },
    SET_ACTIVE_CATEGORY (state, payload) {
      state.activeCategory = payload
    }
  },
  actions: {
    async loadCategory ({ commit }) {
      try {
        const { data } = await this.$axios.get('/product-category')
        commit('SET_CATEGORY', data)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
