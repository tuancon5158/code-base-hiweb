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
  created() {
    //TODO middleware check auth .....
    if (localStorage.getItem(STORAGE_NAME.TOKEN)) {
      this.layout = 'default-layout';
      this.$router.push('/');
    } else {
      this.layout = 'auth-layout';
      this.$router.push('login');
    }
  },
};
</script>
