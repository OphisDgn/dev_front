import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Geographic from '../views/Geographic.vue'
import Animal from '../views/AnimalGraph.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'Update',
    component: About
  },
  {
    path: '/geographic',
    name: 'Geographic',
    component: Geographic
  },
  {
    path: '/animal',
    name: 'Animal',
    component: Animal
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
