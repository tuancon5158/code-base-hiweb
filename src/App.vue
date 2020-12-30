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
    $route: function(to, from) {
      console.log(to, from);
      if (to.name && from.name === 'auth' && to.name.indexOf('website') > -1) {
        this.layout = 'default-layout';
        // this.getLayout();
      }
      console.log('tthis.layout', this.layout);
    },
  },
  methods: {
    getLayout() {
      console.log('this.$router', this.$router);
      if (this.$router.currentRoute.name === 'auth') {
        this.layout = 'auth-layout';
      }
      if (this.$router.currentRoute.name === 'website') {
        this.layout = 'default-layout';
      }
    },
  },
  created() {
    //TODO middleware check auth .....
    // this.getLayout();
  },
};
</script>
