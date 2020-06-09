import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "../components/Index";
import Login from "../components/Login";
import Watch from "../components/Watch";
import Register from "../components/Register";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        children: [{
            path: '/login',
            name: 'Login',
            component: Login
        },
            {
                path: '/watch/:id/',
                name: 'Watch',
                component: Watch
            },
            {
                path: '/register',
                name: 'Register',
                component: Register
            }]
    }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router
