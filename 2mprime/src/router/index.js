import {createRouter, createWebHistory} from 'vue-router';
import signuppage from '../views/signuppage.vue'
import mainapp from '../views/mainapp.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "signuppage",
            component: signuppage
        },
        {
            path: "/mainapp",
            name: "mainapp",
            component: mainapp
        }
    ]
})
export default router