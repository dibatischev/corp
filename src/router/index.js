import { createRouter, createWebHistory } from 'vue-router'
import CanbanPage from '@/pages/CanbanPage.vue'
import OrderDetails from '@/components/order/OrderDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: OrderDetails
    }
  ]
})

export default router
