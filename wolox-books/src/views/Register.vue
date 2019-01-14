<template lang='pug'>
.home
  form.register-form(@submit.prevent='onSubmit')
    label.label(for='firstName')
      | {{$t('register.firstName')}}
    input#firstName(type='text' name='firstName' v-model='firstName')
    label.label(for='lastName')
      | {{$t('register.lastName')}}
    input#lastName(type='text' name='lastName' v-model='lastName')
    label.label(for='email')
      | {{$t('register.email')}}
    input#email(type='text' v-model.trim='email')
    .error(v-if='!$v.email.required && submitStatus')
      | Email is required
    .error(v-if='!$v.email.email')
      | Pleas enter a valid email
    label.label(for='password')
      | {{$t('register.password')}}
    input#password(type='password' name='password' v-model='password' v-model.trim='$v.password.$model')
    .error(v-if='!$v.password.required && submitStatus')
      | Password is required
    .error(v-if='!$v.password.validatePassword')
      | Password must have at least one number and one uppercase character
    button
      | {{$t('register.signUp')}}
  router-link.button-login(to='/')
    | {{$t('register.logIn')}}
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
import { authService } from '../services/AuthService'

const validatePassword = helpers.regex(
  'validatePassword',
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/
)

export default {
  name: 'Register',
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      submitted: false
    }
  },
  methods: {
    onSubmit () {
      authService.logIn({
        user: {
          email: this.email,
          password: this.password,
          password_confirmation: this.password,
          first_name: this.firstName,
          last_name: this.lastName,
          locale: 'en'
        }
      })
      this.$v.$touch()
      this.submitted = this.$v.$invalid
    }
  },
  validations: {
    password: {
      required,
      validatePassword
    },
    email: {
      required,
      email
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

.button-login {
  width: 300px;
  text-align: center;
  align-self: center;
}
</style>
