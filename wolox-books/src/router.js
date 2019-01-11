import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign-up',
      name: 'sign-up',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
