<template>
  <v-card class="form">
    <v-form
      @submit.prevent="onSubmit"
    >
      <v-card-title>
        <slot name="title">회원가입 폼</slot>
      </v-card-title>
      <v-card-text>
        <v-text-field
          :value="name"
          :label="nameLabel"
          @input="onChangeValue('name', $event)"
        ></v-text-field>
        <v-text-field
          :value="username"
          :label="usernameLabel"
          @input="onChangeValue('username', $event)"
        ></v-text-field>
        <v-text-field
          :value="password"
          :label="passwordLabel"
          type="password"
          @input="onChangeValue('password', $event)"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          type="submit"
          color="primary"
        >
          <v-icon>mdi-content-save</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: null,
    },
    nameLabel: {
      type: String,
      required: false,
      default: '이름',
    },
    username: {
      type: String,
      required: false,
      default: null,
    },
    usernameLabel: {
      type: String,
      required: false,
      default: '아이디',
    },
    password: {
      type: String,
      required: false,
      default: null,
    },
    passwordLabel: {
      type: String,
      required: false,
      default: '비밀번호',
    },
  },
  methods: {
    onChangeValue(name, value) {
      this.$emit(`update:${name}`, value);
    },
    onSubmit() {
      this.$emit('submit');
    },
  },
}
</script>
