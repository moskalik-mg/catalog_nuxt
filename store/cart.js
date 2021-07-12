export default {
  state: {
    cart: [],
    isOpen: false,
    orderIsSuccess: false
  },
  getters: {
    getCart (state) {
      return state.cart
    },
    countProductInCart (state) {
      return state.cart.length
    },
    getIsOpen (state) {
      return state.isOpen
    },
    getOrderStatus (state) {
      return state.orderIsSuccess
    }
  },
  mutations: {
    ADD_PRODUCT_TO_CART (state, payload) {
      const cart = JSON.parse(localStorage.getItem('cart'))
      if (cart !== null) {
        cart.push(payload)
        localStorage.setItem('cart', JSON.stringify(cart))
      } else {
        localStorage.setItem('cart', JSON.stringify([payload]))
      }
      state.cart.push(payload)
    },
    SWITCH_CART (state, payload) {
      state.isOpen = payload
    },
    REMOVE_PRODUCT (state, payload) {
      const newCartList = state.cart.filter(product => product.id !== payload)
      state.cart = newCartList
      localStorage.setItem('cart', JSON.stringify(newCartList))
    },
    SET_ORDER_STATUS (state) {
      state.orderIsSuccess = true
    },
    EMPTY_CART (state) {
      state.cart = []
    },
    LOAD_PRODUCT (state, payload) {
      state.cart = payload
    }
  },
  actions: {
    addProductToCart ({ commit, state }, payload) {
      return new Promise((resolve, reject) => {
        const item = state.cart.find(item => item.id === payload.id)
        if (item === undefined) {
          commit('ADD_PRODUCT_TO_CART', payload)
          resolve('added')
        } else {
          reject(new Error('not_added'))
        }
      })
    },
    switchCart ({ commit, state }) {
      document.body.classList.toggle('active-cart')
      commit('SWITCH_CART', !state.isOpen)
    },
    removeProductToCart ({ commit }, payload) {
      commit('REMOVE_PRODUCT', payload)
    },
    setOrderStatus ({ commit }) {
      commit('SET_ORDER_STATUS')
    },
    setEmptyCart ({ commit }) {
      commit('EMPTY_CART')
    },
    loadProductFromLocalStorage ({ commit }, payload) {
      commit('LOAD_PRODUCT', payload)
    }
  }
}
