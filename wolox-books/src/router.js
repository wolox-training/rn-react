import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/sign-up',
      component: () => import('./views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('./views/Auth.vue')
    },
    { path: '/books/:id',
      component: () => import('./views/Book.vue')
    },
    {
      path: '/',
      redirect: { name: 'login' }
    }
  ]
})
