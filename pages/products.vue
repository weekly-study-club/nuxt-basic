<template>
  <div class="products">
    상품 페이지입니다.
    <app-example-card></app-example-card>
    <nuxt-child></nuxt-child>
  </div>
</template>

<script>
export default {
  name: 'ProductsPage',
  computed: {
    products() {
      return this.$store.state.products.items;
    },
  },
}
</script>
