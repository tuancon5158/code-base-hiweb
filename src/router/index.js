import Vue from 'vue';
import VueRouter from 'vue-router';
import productRoutes from '@/router/website/products';
import menuRoutes from '@/router/website/menus';
import redirectsRoutes from '@/router/website/redirects';
const Home = () => import(/* webpackChunkName: "" */ '@/views/home');
const Website = () => import(/* webpackChunkName: "" */ '@/views/website');
const Page404 = () => import(/* webpackChunkName: "" */ '@/views/404');
const PageAuth = () => import(/* webpackChunkName: "" */ '@/views/auth');
const Survey = () => import(/* webpackChunkName: "" */ '@/views/auth/components/Survey');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/w/:domain',
      name: 'website',
      component: Website,
      children: [...productRoutes, ...menuRoutes, ...redirectsRoutes],
    },

    {
      path: '/auth/:authPage?',
      name: 'auth',
      props: true,
      component: PageAuth,
    },

    {
      path: '/shop/add/survey',
      name: 'auth/survey',
      props: true,
      component: Survey,
    },

    { path: '/404', component: Page404 },
    // { path: '*', redirect: '/404' },
  ],
});
