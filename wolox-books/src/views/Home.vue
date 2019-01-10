<template lang='pug'>
#register-form.home
  form.register-form(@submit.prevent="onSubmit")
    label.label(for="firstName") First Name
    input#firstName(type="text",name="firstName",v-model="firstName")
    label.label(for="lastName") Last Name
    input#lastName(type="text",name="lastName",v-model="lastName")
    label.label(for="email") Email
    input#email(type="text",name="email",v-model="email")
    label.label(for="password") Password
    input#password(type="password",name="password",v-model="password")
    button Sign Up
  a(href="/") Log In
</template>

<script>
module.exports = {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password
      };
      console.log(data);
    }
  }
};
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
