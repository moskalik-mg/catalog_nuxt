<template>
  <div class="catalog">
    <div class="catalog__top">
      <div class="catalog__filter">
        <span v-on-clickaway="closeOrder" @click="show = !show">Сортировать по: {{ getSelectedItem }}</span>
        <div v-show="show" class="select">
          <button v-for="item in orderItems" :key="item.id" class="select__item" @click="changeOrderList(item.id)">
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
    <div class="product__list">
      <Product v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import Product from './Product.vue'
export default {
  components: {
    Product
  },
  mixins: [clickaway],
  data () {
    return {
      show: false
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/getProducts',
      orderItems: 'products/getOrderItems'
    }),
    getSelectedItem () {
      return this.orderItems.find(item => item.selected).name
    }
  },
  methods: {
    ...mapActions({
      changeOrderList: 'products/changeOrderList'
    }),
    closeOrder () {
      this.show = false
    }
  }
}
</script>

<style>

</style>
