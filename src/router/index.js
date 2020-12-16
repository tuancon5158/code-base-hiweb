import Vue from 'vue';
import VueRouter from 'vue-router';
import productRoutes from '@/router/website/products';
const Home = () => import(/* webpackChunkName: "" */ '@/views/home');
const Website = () => import(/* webpackChunkName: "" */ '@/views/website');
const Page404 = () => import(/* webpackChunkName: "" */ '@/views/404');
const PageAuth = () => import(/* webpackChunkName: "" */ '@/views/auth');

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
      children: [...productRoutes],
    },
    {
      path: '/login',
      name: 'pageLogin',
      component: PageAuth,
    },
    { path: '/404', component: Page404 },
    { path: '*', redirect: '/404' },
  ],
});
