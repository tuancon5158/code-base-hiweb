<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const DefaultLayout = () => import('./layouts/Default');
const AuthLayout = () => import('./layouts/Auth');
import STORAGE_NAME from '@/const/storage';
export default {
  props: ['authPage'],

  components: {
    DefaultLayout,
    AuthLayout,
  },
  data() {
    return {
      layout: 'default-layout',
    };
  },
  name: 'App',
  watch: {
    // eslint-disable-next-line prettier/prettier
    $route: function (to, form) {
      if (to.name === 'home' && form.path === '/auth/shop') {
        this.layout = 'auth-layout';
      }
    },
  },
  methods: {
    getLayout() {
      if (localStorage.getItem(STORAGE_NAME.TOKEN)) {
        this.layout = 'default-layout';
        // this.$router.push('/home');
      } else {
        this.layout = 'auth-layout';
        console.log(this.$router);
        if (this.$router.currentRoute.name !== 'auth') {
          this.$router.push(`auth/login`);
        }
      }
    },
  },
  created() {
    //TODO middleware check auth .....
    this.getLayout();
  },
};
</script>
