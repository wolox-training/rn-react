<template lang='pug'>
.home
  form.login-form(@submit.prevent='onSubmit')
    label.label(for='email')
      |{{$t('register.email')}}
    input#email(type='text' v-model='email')
    .error(v-if='!$v.email.required && submitStatus')
      |Email is required
    .error(v-if='!$v.email.email')
      |Pleas enter a valid email
    label.label(for='password')
      |{{$t('register.password')}}
    input#password(type='password' name='password' v-model='password')
    .error(v-if='!$v.password.required && submitStatus')
      |Password is required
    button
      |{{$t('register.logIn')}}
  router-link.button-login(to='/sign-up')
    |{{$t('register.signUp')}}
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { authService } from '../services/AuthService'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      submitStatus: false
    }
  },
  methods: {
    onSubmit () {
      authService.logIn({
        session: {
          email: this.email,
          password: this.password
        }
      })
      this.$v.$touch()
      this.submitStatus = this.$v.$invalid
    }
  },
  validations: {
    password: {
      required
    },
    email: {
      required,
      email
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

.login-form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  align-self: center;
}

.label {
  text-align: left;
}

.button-login {
  max-width: 300px;
  text-align: center;
  align-self: center;
}
</style>
