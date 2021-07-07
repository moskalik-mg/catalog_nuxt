<template>
  <form class="form-order" @submit.prevent="checkForm()">
    <h2 class="form-order__title">
      Оформить заказ
    </h2>
    <input
      v-model="$v.form.name.$model"
      :class="$v.form.name.$error ? 'is-invalid' : '' "
      type="text"
      class="form-order__input form-order__item"
      placeholder="Ваше имя"
    >
    <p v-if="$v.form.name.$dirty && !$v.form.name.required" class="text-error">
      Обязательное поле!
    </p>
    <input
      v-model="$v.form.phone.$model"
      v-mask="'+375 (##) ###-##-##'"
      :class="$v.form.phone.$error ? 'is-invalid' : '' "
      type="text"
      class="form-order__input form-order__item"
      placeholder="Телефон"
    >
    <p v-if="$v.form.phone.$dirty && !$v.form.phone.required" class="text-error">
      Обязательное поле!
    </p>
    <input
      v-model="$v.form.address.$model"
      :class="$v.form.address.$error ? 'is-invalid' : '' "
      type="text"
      class="form-order__input form-order__item"
      placeholder="Адрес"
    >
    <p v-if="$v.form.address.$dirty && !$v.form.address.required" class="text-error">
      Обязательное поле!
    </p>
    <button class="btn btn-primary cart__btn" type="submit">
      Отправить
    </button>
    <div v-if="isError" class="form-order__message">
      <svg class="icon">
        <use xlink:href="#warning" />
      </svg>
      <p class="form-order__text">
        Все поля обязательные. После удачной отправки формы содержимое корзины
        очищается
      </p>
    </div>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  mixins: [validationMixin],
  data () {
    return {
      form: {
        phone: '',
        name: '',
        address: ''
      },
      isError: false
    }
  },
  validations: {
    form: {
      phone: {
        required,
        minLength: minLength(19)
      },
      name: {
        required
      },
      address: {
        required
      }
    }
  },
  methods: {
    ...mapActions({
      setOrderStatus: 'cart/setOrderStatus',
      setEmptyCart: 'cart/setEmptyCart'
    }),
    checkForm () {
      this.$v.form.$touch()
      if (!this.$v.form.$error) {
        this.setOrderStatus()
        this.setEmptyCart()
      }
    }
  }
}
</script>

<style></style>
