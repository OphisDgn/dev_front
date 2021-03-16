import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Geographic from '../views/Geographic.vue'
import Graphic from '../views/Graphic.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/geographic',
    name: 'Geographic',
    component: Geographic
  },
  {
    path: '/graphic',
    name: 'Graphic',
    component: Graphic
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
