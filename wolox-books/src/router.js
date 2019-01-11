import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register'
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sign-up',
      component: Register
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
      redirect: { name: 'login' }
    }
  ]
})
