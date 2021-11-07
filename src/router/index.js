import { createRouter, createWebHashHistory } from '@ionic/vue-router';
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
  history: createWebHashHistory(),
  routes
})

export default router
