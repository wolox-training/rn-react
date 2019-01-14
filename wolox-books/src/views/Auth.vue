<template lang='pug'>
.home
  .register-form
    button.button-logout(v-on:click="logout")
      | Logout
</template>

<script>
import { localStorageService } from '../services/LocalStorage'

export default {
  name: 'Auth',
  methods: {
    logout () {
      localStorageService.removeAccessToken()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss'>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.register-form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-self: center;
}

.label {
  text-align: left;
}

.button-logout {
  max-width: 300px;
  text-align: center;
  align-self: center;
}
</style>
