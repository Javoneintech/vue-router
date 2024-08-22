import About from '@/views/About.vue'
import Curriculum from '@/views/Curriculum.vue'
import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/', //Can think of this like the entry point
    name: 'home',
    component: Home
  },
  {
    path: '/about', //Can think of this like the entry point
    name: 'about',
    component: About
  },
   {
      path: "/curriculum", //Can think of this like the entry point
      name: "curriculum",
      component: Curriculum
    },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
