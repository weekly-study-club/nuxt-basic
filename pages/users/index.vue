<template>
  <div class="users">
    <v-data-table
      :items="users"
      :headers="headers"
      @click:row="onClickUser"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  name: 'UsersPage',
  data() {
    return {
      users: [],
    };
  },
  computed: {
    headers() {
      return [
        { text: '이름', value: 'name', width: '200px' },
        { text: '아이디', value: 'username', width: '200px' },
      ];
    },
  },
  mounted() {
    this.getUsers().then((response) => {
      const { data } = response;
      this.users = data;
    });
  },
  methods: {
    getUsers() {
      return this.$axios.get('/api/users');
    },
    onClickUser(user) {
      const { _id } = user;
      this.$router.push(`/users/${_id}`);
    },
  },
};
</script>
