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
    name: 'Home',
    component: () => import('@/views/Home.vue'),
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
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router