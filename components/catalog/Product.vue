<template>
  <div class="product__wrapper">
    <div class="product__item">
      <div class="product__rating">
        <svg class="star">
          <use xlink:href="#star" />
        </svg>
        <span class="product__rating-value">{{ product.rating }}</span>
      </div>
      <div class="product__basket" @click="addToCart(product)">
        <svg class="icon" :class="checkCart(product.id) ? 'in-cart' : ''">
          <use xlink:href="#cart" />
        </svg>
      </div>
      <img :src="imgSrc(product.photo)" alt="" class="product__image">
      <div class="product__name">
        {{ product.name }}
      </div>
      <div class="product__price">
        {{ product.price }} ₽
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import imgSrc from '@/mixins/imgSrc'
export default {
  name: 'Product',
  mixins: [imgSrc],
  props: {
    product: {
      type: Object
    }
  },
  computed: {
    ...mapGetters({
      getCart: 'cart/getCart'
    })
  },
  methods: {
    ...mapActions({
      addProductToCart: 'cart/addProductToCart'
    }),
    async addToCart (product) {
      try {
        const data = await this.addProductToCart(product)
        if (data === 'added') {
          this.$toast.success('Товар добавлен')
        }
      } catch (error) {
        if (error.message === 'not_added') {
          this.$toast.error('Товар уже есть в корзине')
        }
      }
    },
    checkCart (id) {
      const res = this.getCart.find(product => product.id === id)
      if (res !== undefined) {
        return true
      }
      return false
    }
  }
}
</script>

<style>

</style>
