import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout'
import Index from '@/views/Index'
import Login from '@/views/Login'
import PageNotFound from '@/views/PageNotFound'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '',
            component: DefaultLayout,
            children: [{
                path: '/',
                name: 'index',
                component: Index,
            }]
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        { path: "*", component: PageNotFound }
    ]
})