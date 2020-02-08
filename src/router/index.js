/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'

const Code = resolve => require(['@/views/Code'], resolve)
const Custom = resolve => require(['@/views/Custom'], resolve)
const Error404 = resolve => require(['@/views/error/Error404'], resolve)

Vue.use(Router)

let routes = [
    {
        path: '/',
        redirect: '/code',
        // component: About
    },
    { path: '/buy', component: resolve => require(['@/views/Buy'], resolve) },
    {
        path: '/code',
        component: Code
    },
    {
        path: '/custom',
        component: Custom
    },
    {
        path: '*',
        component: Error404
    }
]

let router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior (to, from, savedPosition) {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router
