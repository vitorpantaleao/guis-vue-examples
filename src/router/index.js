// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/layouts/Default.vue'),
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import(/* webpackChunkName: "Home" */ '@/views/Home.vue'),
                meta: {
                    title: 'Home',
                }
            },
            {
                path: '/counter',
                name: 'Counter',
                component: () => import(/* webpackChunkName: "Counter" */ '@/views/Counter.vue'),
                meta: {
                    title: 'Counter',
                }
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from) => {
    document.title = to.meta?.title
})

export default router
