<template lang='pug'>
.home
  form.login-form(@submit.prevent='onSubmit')
    label.label(for='email')
      | {{$t('register.email.name')}}
    input#email(type='text' v-model='email')
    .error(v-if='!$v.email.required && submitted')
      | {{$t('register.email.required')}}
    .error(v-if='!$v.email.email')
      | {{$t('register.email.valid')}}
    label.label(for='password')
      | {{$t('register.password.name')}}
    input#password(type='password' name='password' v-model='password')
    .error(v-if='!$v.password.required && submitted')
      | {{$t('register.password.required')}}
    button
      | {{$t('register.logIn')}}
  router-link.button-login(to='/sign-up')
    | {{$t('register.signUp')}}
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
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
          if (response.ok) console.log(response.data.acces_token)
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
