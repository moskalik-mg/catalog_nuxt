export default {
  state: {
    products: [],
    orderItems: [
      { id: 1, name: 'Цене', selected: true },
      { id: 2, name: 'Популярности', selected: false }
    ]
  },
  getters: {
    getProducts (state, getters, rootState, rootGetters) {
      const products = state.products.filter(product => product.category === rootGetters['category/getActiveCategory'])
      const idSorted = state.orderItems.find(item => item.selected).id
      if (idSorted === 1) {
        products.sort((a, b) => b.price - a.price)
      } else if (idSorted === 2) {
        products.sort((a, b) => b.rating - a.rating)
      }
      return products
    },
    getOrderItems (state) {
      return state.orderItems
    }
  },
  mutations: {
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_ORDER_ITEMS (state, id) {
      const res = state.orderItems.map((item) => {
        if (item.id === id) {
          item.selected = true
        } else {
          item.selected = false
        }
        return item
      })
      state.orderItems = res
    }
  },
  actions: {
    async loadProducts ({ commit }) {
      try {
        const { data } = await this.$axios.get('/product')
        commit('SET_PRODUCTS', data)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error)
      }
    },
    changeOrderList ({ commit }, id) {
      commit('SET_ORDER_ITEMS', id)
    }
  }
}
