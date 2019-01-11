<template lang='pug'>
.home
  form.register-form(@submit.prevent='onSubmit')
    label.label(for='firstName')
      |{{$t('register.firstName')}}
    input#firstName(type='text' name='firstName' v-model='firstName')
    label.label(for='lastName')
      |{{$t('register.lastName')}}
    input#lastName(type='text' name='lastName' v-model='lastName')
    label.label(for='email')
      |{{$t('register.email')}}
    input#email(type='text' name='email' v-model='email')
    label.label(for='password')
      |{{$t('register.password')}}
    input#password(type='password' name='password' v-model='password')
    button
      |{{$t('register.signUp')}}
  a(href='/')
    |{{$t('register.logIn')}}
</template>

<script>
import { required } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      submitted: null
    }
  },
  methods: {
    onSubmit () {
      const data = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password
      }
      console.log(data)
      this.$v.$touch()
      this.submitted = this.$v.$invalid
    }
  },
  validations: {
    password: {
      required
    }
  }
}
</script>

<style lang='scss' scoped>
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
