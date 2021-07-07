<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <h2>TestList</h2>
        </div>
        <div class="header__basket" @click="toggleCart()">
          <svg class="icon">
            <use xlink:href="#cart" />
          </svg>
          <span v-if="countProductInCart > 0" class="header__basket-counter">{{ countProductInCart }}</span>
        </div>
      </div>
    </div>
    <svg width="0" height="0" class="hidden">
      <symbol id="cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.84 3.48A1.2 1.2 0 018.8 3h14.4a1.2 1.2 0 01.96.48l3.6 4.8c.156.208.24.46.24.72v16.8a3.6 3.6 0 01-3.6 3.6H7.6A3.6 3.6 0 014 25.8V9c0-.26.084-.512.24-.72l3.6-4.8zM9.4 5.4l-3 4v16.4A1.2 1.2 0 007.6 27h16.8a1.2 1.2 0 001.2-1.2V9.4l-3-4H9.4z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 9a1.2 1.2 0 011.2-1.2h21.6a1.2 1.2 0 010 2.4H5.2A1.2 1.2 0 014 9zm7.2 3.6a1.2 1.2 0 011.2 1.2 3.6 3.6 0 107.2 0 1.2 1.2 0 012.4 0 6 6 0 11-12 0 1.2 1.2 0 011.2-1.2z" />
      </symbol>
      <symbol id="close" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.707 5.293a1 1 0 010 1.414l-12 12a1 1 0 01-1.414-1.414l12-12a1 1 0 011.414 0z" fill="#000" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.293 5.293a1 1 0 011.414 0l12 12a1 1 0 01-1.414 1.414l-12-12a1 1 0 010-1.414z" fill="#000" />
      </symbol>
      <symbol id="trash" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10a1 1 0 011-1h18a1 1 0 110 2H7a1 1 0 01-1-1z" fill="#959DAD" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7a1 1 0 00-1 1v1h6V8a1 1 0 00-1-1h-4zm7 2V8a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H9a1 1 0 00-1 1v14a3 3 0 003 3h10a3 3 0 003-3V10a1 1 0 00-1-1h-2zm-11 2v13a1 1 0 001 1h10a1 1 0 001-1V11H10z" fill="#959DAD" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 14a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm4 0a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1z" fill="#959DAD" />
      </symbol>
      <symbol id="warning" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 24">
        <path d="M1.2.6h4.288v10.528l-.832 5.216H2.032L1.2 11.128V.6zM.752 20.888c0-.747.235-1.333.704-1.76.47-.448 1.088-.672 1.856-.672.81 0 1.45.224 1.92.672.47.427.704 1.013.704 1.76 0 .747-.235 1.344-.704 1.792-.47.448-1.11.672-1.92.672-.768 0-1.387-.224-1.856-.672-.47-.448-.704-1.045-.704-1.792zM10.606.6h4.288v10.528l-.832 5.216h-2.624l-.832-5.216V.6zm-.448 20.288c0-.747.235-1.333.704-1.76.47-.448 1.088-.672 1.856-.672.81 0 1.45.224 1.92.672.47.427.704 1.013.704 1.76 0 .747-.234 1.344-.704 1.792-.47.448-1.11.672-1.92.672-.768 0-1.386-.224-1.856-.672-.47-.448-.704-1.045-.704-1.792z" fill="#EB5757" />
      </symbol>
      <symbol id="star" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path fill="#fff" d="M0 0h20v20H0z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125c.238 0 .455.135.56.348l1.786 3.619 3.994.583a.625.625 0 01.346 1.066l-2.89 2.815.683 3.976a.625.625 0 01-.907.659L10 14.312l-3.572 1.879a.625.625 0 01-.906-.66l.681-3.975-2.89-2.815a.625.625 0 01.347-1.066l3.994-.583L9.44 3.473a.625.625 0 01.56-.348zm0 2.037L8.63 7.939a.625.625 0 01-.47.342l-3.067.448 2.218 2.16a.624.624 0 01.18.554l-.523 3.052 2.741-1.442a.625.625 0 01.582 0l2.741 1.442-.523-3.052a.625.625 0 01.18-.553l2.218-2.16-3.066-.45a.625.625 0 01-.47-.34L10 5.161z" fill="#F2C94C" />
        <path d="M6.5 11L4 8l4.5-.5L10 5l1.5 2.5L16 8l-2.5 3v3.5l-.5 1-3-1.5-1 .5-2.5 1V11z" fill="#F2C94C" />
      </symbol>
    </svg>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      countProductInCart: 'cart/countProductInCart'
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
