import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/',
    name: 'Index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    redirect: '/home/review',
    children: [
      {
        path: '/home/review',
        name: 'Review',
        component: () => import('@/views/main/Review.vue')
      },
      {
        path: '/home/choose',
        name: 'Review',
        component: () => import('@/views/main/Choose.vue')
      },
      {
        path: '/home/bookwords',
        name: 'BookWords',
        component: () => import('@/views/main/choose/BookWords.vue')
      },
      {
        path: '/home/statistics/forgetcurve',
        name: 'ForgetCurve',
        component: () => import('../views/main/statistics/ForgetCurve.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
