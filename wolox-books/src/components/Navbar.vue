<template lang='pug'>
.navbar
  .logo
    img.title-image(src='../assets/wolox_logo.svg' alt='wolox logo')
    span.title
      | {{$t('title')}}
  button.button-logout(@click='logout')
    | Logout
</template>

<script>
import { localStorageService } from '../services/LocalStorage'
import { clearHeaders } from '../config/api'

export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorageService.removeAccessToken()
      clearHeaders()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../scss/variables/color';

.navbar {
  display: flex;
  height: 60px;
  border-radius: 2px;
  box-shadow: 0px 1px 10px $gray-shadow;
  justify-content: space-around;
  background-color: $white;
}

.logo {
  align-self: center;
  display: flex;
  flex-direction: column;
}

.title {
  text-align: center;
  margin-top: 10px;
}

.title-image {
  height: 30px;
}

.button-logout {
  height: 20px;
  width: 20px;
  align-self: center;
  text-align: center;
}
</style>
