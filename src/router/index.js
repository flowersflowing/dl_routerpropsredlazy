import Vue from 'vue';
import Router from 'vue-router';
import Inicio from '../components/Inicio';
import SobreMi from '../components/SobreMi';
import Contacto from '../components/Contacto';
import Articulo from '../components/Articulo';
import NotFound from '../components/NotFound';
import Administrador from '../components/Administrador';

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
            path: '/home',
            redirect: '/'
        },
        {
            path: '/inicio',
            redirect: '/'
        },
        {
            path: '/portada',
            redirect: '/'
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
        },
        {
            path: '/administrador/:admin',
            name: 'Administrador',
            component: () => import('../components/Administrador.vue')
            // component: Administrador,
            // props: (route) => ({
            //     cliente: `Bienvenido a la página de ${route.params.administrador}`
            // })
        }
    ]
})