import { createRouter, createWebHistory } from 'vue-router'
import CanbanPage from '@/pages/CanbanPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: CanbanPage
    }
  ]
})

export default router
