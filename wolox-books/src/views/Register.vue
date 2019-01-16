<template lang='pug'>
.home
  form.register-form(@submit.prevent='onSubmit')
    img.title-image(src='../assets/wolox_logo.svg' alt ='logo')
    span.title
      | {{$t('title')}}
    label.label(for='firstName')
      | {{$t('register.firstName')}}
    input.input#firstName(type='text' name='firstName' v-model='firstName')
    label.label(for='lastName')
      | {{$t('register.lastName')}}
    input.input#lastName(type='text' name='lastName' v-model='lastName')
    label.label(for='email')
      | {{$t('register.email.name')}}
    input.input#email(type='text' v-model.trim='email')
    .error(v-if='!$v.email.required && submitted')
      | {{$t('register.email.required')}}
    .error(v-if='!$v.email.email')
      | {{$t('register.email.valid')}}
    label.label(for='password')
      | {{$t('register.password.name')}}
    input.input#password(type='password' name='password' v-model='password' v-model.trim='$v.password.$model')
    .error(v-if='!$v.password.required && submitted')
      | {{$t('register.password.required')}}
    .error(v-if='!$v.password.validatePassword')
      | {{$t('register.password.valid')}}
    button.button-main
      | {{$t('register.signUp')}}
    router-link.button-secondary(to='/login')
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
@import '../scss/variables/sizes';
@import '../scss/variables/color';

.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: $content-height;
}

.title {
  text-align: center;
  margin: 10px 0 30px;
}

.register-form {
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 40px 20px 0;
  width: 300px;
  background-color: #F4F4F4;
  border-top: 5px solid $cerulean;
}

.label {
  text-align: left;
  padding-left: 10px;
  margin: 10px 0 5px;
}

.input {
  height: 30px;
  border-radius: 5px;
}
</style>
