<template>
  <div id="register-form" class="home">
    <form class="register-form">
      <label for="firstname" class="label">First Name</label>
      <input type="text" name="firstname" id="firstname">
      <label for="lastname" class="label">Last Name</label>
      <input type="text" name="firstname" id="lastname">
      <label for="email" class="label">Email</label>
      <input type="text" name="firstname" id="email">
      <label for="password" class="label">Password</label>
      <input type="password" name="firstname" id="password">
      <button>Sign Up</button>
    </form>
    <a href="/">Login</a>
  </div>
</template>

<script>

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
