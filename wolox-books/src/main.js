import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import { Register as messages } from './config/i18n'
import Vuelidate from 'vuelidate'
import { changeHeaders } from './config/api'

Vue.use(Vuelidate)

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

Vue.config.productionTip = true

changeHeaders()

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
