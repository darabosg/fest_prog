import { createRouter, createWebHistory } from '@ionic/vue-router';
import Tabs from '../views/Tabs.vue'

const routes= [
  {
    path: '/',
    redirect: '/tabs/presentations'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/presentations'
      },
      {
        path: 'presentations',
        component: () => import('@/views/Presentations.vue')
      },
      {
        path: 'roundtables',
        component: () => import('@/views/RoundTables.vue')
      },
      {
        path: 'travellers',
        component: () => import('@/views/Travellers.vue')
      },
      {
        path: 'favourites',
        component: () => import('@/views/Favourites.vue')
      }
    ]
  }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
