import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '../components/Inicio';
import SobreMi from '../components/SobreMi';
import Contacto from '../components/Contacto';
import Articulo from '../components/Articulo';
import NotFound from '../components/NotFound';

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Inicio',
            component: Inicio
        },
        {
            path: '/sobremi',
            name: 'SobreMi',
            component: () => import('../components/SobreMi.vue')
        },
        {
            path: '/contacto',
            name: 'Contacto',
            component: () => import('../components/Contacto.vue')
        },
        {
            path: '/post/:id',
            name: 'Post',
            component: () => import('../components/Articulo.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            component: () => import('../components/NotFound.vue')
        }
    ]
})