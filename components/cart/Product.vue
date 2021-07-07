<template>
  <div class="product__item">
    <img class="product__image" :src="imgSrc(product.photo)" alt="">
    <div class="product__content">
      <div class="product__name">
        {{ product.name }}
      </div>
      <div class="product__price">
        {{ product.price }} ₽
      </div>
      <div class="product__rating">
        <svg class="star">
          <use xlink:href="#star" />
        </svg>
        <span class="product__rating-value">{{ product.rating }}</span>
      </div>
    </div>
    <div class="trash">
      <svg class="icon" @click="removeProduct(product.id)">
        <use xlink:href="#trash" />
      </svg>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import imgSrc from '@/mixins/imgSrc'
export default {
  name: 'ProductCartItem',
  mixins: [imgSrc],
  props: {
    product: {
      type: Object
    }
  },
  methods: {
    ...mapActions({
      removeProductToCart: 'cart/removeProductToCart'
    }),
    removeProduct (id) {
      this.removeProductToCart(id)
    }
  }
}
</script>

<style>

</style>
