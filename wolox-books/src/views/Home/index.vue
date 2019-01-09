<template>
  <div id="register-form" class="home">
    <form class="register-form" @submit.prevent="onSubmit">
      <label for="firstName" class="label">{{ $t("register.firstName") }}</label>
      <input type="text" name="firstName" id="firstName" v-model="firstName">
      <label for="lastName" class="label">{{ $t("register.lastName") }}</label>
      <input type="text" name="lastName" id="lastName" v-model="lastName">
      <label for="email" class="label">{{ $t("register.email") }}</label>
      <input type="text" name="email" id="email" v-model="email">
      <label for="password" class="label">{{ $t("register.password") }}</label>
      <input type="password" name="password" id="password" v-model="password">
      <button>{{ $t("register.signUp") }}</button>
    </form>
    <a href="/">{{ $t("register.logIn") }}</a>
  </div>
</template>

<script>

module.exports = {
  data () {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null
    }
  },
  methods: {
    onSubmit () {
      const data = {
        'first_name': this.firstName,
        'last_name': this.lastName,
        'email': this.email,
        'password': this.password
      }
      console.log(data)
    }
  }
}
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.register-form {
  display: flex;
  flex-direction: column;
  width: 300px;
  align-self: center;
}
.label {
  text-align: left;
}
</style>
