import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import(/* webpackChunkName: "" */ '@/pages/home');
const Profile = () => import(/* webpackChunkName: "" */ '@/pages/profile');
const Page404 = () => import(/* webpackChunkName: "" */ '@/pages/404');
const PageAuth = () => import(/* webpackChunkName: "" */ '@/pages/auth');

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/login',
      name: 'PageAuth',
      component: PageAuth,
    },
    { path: '/404', component: Page404 },
    { path: '*', redirect: '/404' },
  ],
});
