import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from '../views/home.vue'
import classify from '../views/classify.vue'
import cart from '../views/cart.vue'
import aboutMe from '../views/aboutMe.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: home
  },
  {
    path: '/classify',
    name: 'Classify',
    component: classify
  },
  {
    path: '/cart',
    name: 'Cart',
    component: cart
  },
  {
    path: '/aboutMe',
    name: 'AboutMe',
    component: aboutMe
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
