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
      | {{$t('register.email.name')}}
    input#email(type='text' v-model.trim='email')
    .error(v-if='!$v.email.required && submitStatus')
      | {{$t('register.email.required')}}
    .error(v-if='!$v.email.email')
      | {{$t('register.email.valid')}}
    label.label(for='password')
      | {{$t('register.password.name')}}
    input#password(type='password' name='password' v-model='password' v-model.trim='$v.password.$model')
    .error(v-if='!$v.password.required && submitStatus')
      | {{$t('register.password.required')}}
    .error(v-if='!$v.password.validatePassword')
      | {{$t('register.password.valid')}}
    button
      | {{$t('register.signUp')}}
  router-link.button-login(to='/login')
    | {{$t('register.logIn')}}
</template>

<script>
import { required, email, helpers } from 'vuelidate/lib/validators'
import { signUp } from '../services/AuthService'

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
      this.$v.$touch()
      this.submitted = this.$v.$invalid
      if (!this.submitted) {
        signUp({
          user: {
            email: this.email,
            password: this.password,
            password_confirmation: this.password,
            first_name: this.firstName,
            last_name: this.lastName,
            locale: 'en'
          }
        })
      }
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
  max-width: 300px;
  width: 100%;
  align-self: center;
}

.label {
  text-align: left;
}

.button-login {
  max-width: 300px;
  width: 100%;
  text-align: center;
  align-self: center;
}
</style>
