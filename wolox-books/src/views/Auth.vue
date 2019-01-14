<template lang='pug'>
.home
  .register-form
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
