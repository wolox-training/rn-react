<template lang='pug'>
.register-form
  button.button-logout(@click="logout")
    | Logout
</template>

<script>
import { localStorageService } from '../services/LocalStorage'

export default {
  methods: {
    logout () {
      localStorageService.removeAccessToken()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss' scoped>
.register-form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  align-self: center;
}

.label {
  text-align: left;
}

.button-logout {
  max-width: 300px;
  width: 100%;
  text-align: center;
  align-self: center;
}
</style>
