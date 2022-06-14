<template>
  <div class="register">
    <user-form
      :name.sync="user.name"
      :username.sync="user.username"
      :password.sync="user.password"
      @submit="onSubmit"
    ></user-form>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data() {
    return {
      user: {
        name: null,
        username: null,
        password: null,
      },
    };
  },
  methods: {
    onSubmit() {
      this.$axios.post('/api/users', this.user).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
