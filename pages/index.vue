<template>
  <div>
    <Header />
    <main class="main">
      <Aside />
      <Catalog />
      <Cart v-if="isOpen" />
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Cart from '@/components/cart/Cart.vue'
export default {
  components: {
    Cart
  },
  computed: {
    ...mapGetters({
      isOpen: 'cart/getIsOpen'
    })
  },
  async created () {
    await this.loadCategory()
    await this.loadProducts()
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (cart !== null) {
      this.loadProductFromLocalStorage(cart)
    }
  },
  methods: {
    ...mapActions({
      loadProducts: 'products/loadProducts',
      loadCategory: 'category/loadCategory',
      loadProductFromLocalStorage: 'cart/loadProductFromLocalStorage'
    })
  }
}
</script>
