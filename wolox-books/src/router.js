import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register'
import Login from './views/Login'
import Auth from './views/Auth'

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
      name: 'login',
      component: Login
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/',
      redirect: { name: 'login' }
    }
  ]
})
