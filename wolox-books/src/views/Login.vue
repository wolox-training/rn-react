<template lang='pug'>
.home
  form.login-form(@submit.prevent='onSubmit')
    img.title-image(src='../assets/wolox_logo.svg' alt='logo')
    span.title
      | {{$t('title')}}
    label.label(for='email')
      | {{$t('register.email.name')}}
    input.input#email(type='text' v-model='email')
    .error(v-if='!$v.email.required && submitted')
      | {{$t('register.email.required')}}
    .error(v-if='!$v.email.email')
      | {{$t('register.email.valid')}}
    label.label(for='password')
      | {{$t('register.password.name')}}
    input.input#password(type='password' name='password' v-model='password')
    .error(v-if='!$v.password.required && submitted')
      | {{$t('register.password.required')}}
    button.button-login
      | {{$t('register.logIn')}}
    router-link.button-signup(to='/sign-up')
      | {{$t('register.signUp')}}
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import { changeHeaders } from '../config/api'
import { localStorageService } from '../services/LocalStorage'
import { logIn } from '../services/AuthService'

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      password: null,
      submitted: false
    }
  },
  methods: {
    onSubmit () {
      this.$v.$touch()
      this.submitted = this.$v.$invalid
      if (!this.$v.$invalid) {
        const { email, password } = this
        logIn(email, password).then(response => {
          if (response.ok) {
            localStorageService.setAccessToken(response.data.access_token)
            changeHeaders()
            this.$router.push('/auth')
          }
        })
      }
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
  margin: 10px 0 30px 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 40px 20px 0 20px ;
  width: 300px;
  background-color: #F4F4F4;
  border-top: 5px solid #00BFFF;
}

.label {
  text-align: left;
  padding-left: 10px;
  margin: 10px 0 5px 0;
}

.input {
  height: 30px;
  border-radius: 5px;
}

.button-signup {
  border: solid 2px $celery;
  border-radius: 10px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;
  background-color: $celery;
  color: $white;
  text-align: center;
}

.button-login {
  border: solid 2px $celery;
  border-radius: 10px;
  box-sizing: border-box;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  padding: 15px;
  width: 100%;
  background-color: $white;
  color: $celery;
  text-align: center;
  margin: 20px 0;
}
</style>
