<template lang='pug'>
.home
  .navbar
    router-link.button-logout(to='/login')
    | Log out
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style lang='scss'>

.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.navbar {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-self: center;
}

.button-logout {
  max-width: 300px;
  text-align: center;
  align-self: center;
}
</style>
