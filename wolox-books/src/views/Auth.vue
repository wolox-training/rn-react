<template lang='pug'>
.home
  router-link.button-logout(to='/login')
  | Logout
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

.button-logout {
  max-width: 300px;
  text-align: center;
  align-self: center;
}
</style>
