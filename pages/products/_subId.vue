<template>
  <div class="product-sub-page">
    프로덕트 서브 페이지입니다. {{ subId }}
  </div>
</template>

<script>
export default {
  name: 'ProductsSubDetailPage',
  computed: {
    subId() {
      return this.$route.params.subId;
    },
  },
}
</script>