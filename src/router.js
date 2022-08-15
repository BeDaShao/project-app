import { createRouter, createWebHistory } from 'vue-router'
import Main from './components/Main.vue'
import Event from './components/Event.vue'
import FirstPart from './components/FirstPart.vue'
const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/events',
        component: Event
    },
    {
        path: '/firstpart',
        component: FirstPart
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/',
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router