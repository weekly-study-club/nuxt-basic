<template>
  <div class="user-detail">
    <h1>유저 상세 페이지</h1>
    <template
      v-if="user"
    >
      <div class="user-name">{{ user.name }}</div>
      <div class="user-account">{{ user.username }}</div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'UserDetailPage',
  data() {
    return {
      user: null,
    }
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
  mounted() {
    this.getUser(this.userId).then((response) => {
      const { data } = response;
      this.user = data;
    });
  },
  methods: {
    getUser(userId) {
      return this.$axios.get(`/api/users/${userId}`);
    },
  },
};
</script>
