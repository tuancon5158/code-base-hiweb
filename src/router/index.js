import Vue from 'vue';
import VueRouter from 'vue-router';
import productRoutes from '@/router/website/products';
import collectionRoutes from '@/router/website/collections';

import menuRoutes from '@/router/website/menus';
import pageRoutes from '@/router/website/pages';
import settingRoutes from '@/router/website/settings';
import redirectsRoutes from '@/router/website/redirects';
const HomeWesite = () => import(/* webpackChunkName: "" */ '@/views//website/home');
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
      name: 'websiteasdas',
      component: HomeWesite,
    },
    {
      path: '/w/:domain',
      name: 'website',
      component: Website,
      children: [
        ...productRoutes,
        ...menuRoutes,
        ...redirectsRoutes,
        ...pageRoutes,
        ...settingRoutes,
        ...collectionRoutes,
      ],
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

    { path: '/*', component: Page404 },
    // { path: '/', redirect: { name: 'website' } },
  ],
});
