import { createRouter, createWebHashHistory } from '@ionic/vue-router'
import Tabs from '../views/Tabs.vue'
// import Favourites from '../views/Favourites'
// import Presentations from '../views/Presentations'
// import RoundTables from '../views/RoundTables'
// import Travellers from '../views/Travellers'

const routes = [
    {
        path: '/',
        redirect: '/tabs/presentations',
    },
    {
        path: '/tabs/',
        component: Tabs,
        children: [
            {
                path: '',
                redirect: '/tabs/presentations',
            },
            {
                path: 'presentations',
                component: () => import('../views/Presentations'),
            },
            {
                path: 'roundtables',
                component: () => import('../views/RoundTables'),
            },
            {
                path: 'travellers',
                component: () => import('../views/Travellers'),
            },
            {
                path: 'favorites',
                component: () => import('../views/Favorites'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
