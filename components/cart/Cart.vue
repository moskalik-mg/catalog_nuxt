<template>
  <div class="wrapper">
    <div class="wrapper__background wrapper__background_active" />
    <div class="cart">
      <div class="cart__top">
        <h2 class="title">
          Корзина
        </h2>
        <div class="cross" @click="switchCart()">
          <svg class="icon">
            <use xlink:href="#close" />
          </svg>
        </div>
      </div>

      <div v-if="orderSuccess" class="cart__success">
        <img class="cart__success-logo" src="@/assets/img/ok.png">
        <h2 class="cart__success-title">
          Заявка успешно отправлена
        </h2>
        <p class="cart__success-description">
          Вскоре наш менеджер свяжется с Вами
        </p>
      </div>
      <div v-else>
        <div v-if="countProductInCart > 0">
          <div class="cart__description">
            <p>Товары в корзине</p>
          </div>
          <div class="product__list">
            <ProductItem v-for="product in products" :key="product.id" :product="product" />
          </div>
          <Form />
        </div>
        <div v-else clas="cart__empty">
          <div class="cart__description cart__description-empty">
            <p>
              Пока что вы ничего не добавили
              в корзину.
            </p>
          </div>
          <button class="btn btn-primary cart__btn" @click="switchCart()">
            Перейти к выбору
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/cart/Product.vue'
import Form from '@/components/cart/Form.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    ProductItem,
    Form
  },
  computed: {
    ...mapGetters({
      countProductInCart: 'cart/countProductInCart',
      products: 'cart/getCart',
      orderSuccess: 'cart/getOrderStatus'
    })
  },
  methods: {
    ...mapActions({
      switchCart: 'cart/switchCart'
    }),
    toggleCart () {
      this.switchCart()
    }
  }
}
</script>

<style>

</style>
