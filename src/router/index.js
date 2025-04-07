import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import ListView from '@/views/ListView.vue'


const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/list', name: 'ListView', component: ListView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router