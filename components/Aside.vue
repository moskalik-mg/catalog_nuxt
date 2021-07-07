<template>
  <div class="aside">
    <h2 class="title">
      Каталог
    </h2>
    <nav class="nav">
      <div v-for="item in category" :key="item.id" class="nav__item" :class="{nav__item_active: item.id === activeCategory}" @click="openCategory(item.id)">
        {{ item.name }}
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      category: 'category/getCategory',
      activeCategory: 'category/getActiveCategory'
    })
  },
  methods: {
    ...mapMutations({
      setActiveCategory: 'category/SET_ACTIVE_CATEGORY'
    }),
    openCategory (id) {
      this.setActiveCategory(id)
    }
  }
}
</script>

<style>

</style>
