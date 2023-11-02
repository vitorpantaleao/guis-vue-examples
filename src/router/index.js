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
            {
                path: '/temperature-converter',
                name: 'TemperatureConverter',
                component: () => import(/* webpackChunkName: "TemperatureConverter" */ '@/views/TemperatureConverter.vue'),
                meta: {
                    title: 'Temperature Converter',
                }
            },
            {
                path: '/flight-booker',
                name: 'FlightBooker',
                component: () => import(/* webpackChunkName: "FlightBooker" */ '@/views/FlightBooker'),
                meta: {
                    title: 'Flight Booker',
                }
            },
            {
                path: '/timer',
                name: 'Timer',
                component: () => import(/* webpackChunkName: "Timer" */ '@/views/Timer'),
                meta: {
                    title: 'Timer',
                }
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'NotFound',
                component: () => import('@/views/NotFound.vue'),
                meta: {
                    title: 'Not Found',
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
