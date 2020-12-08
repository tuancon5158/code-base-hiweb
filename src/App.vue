<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const DefaultLayout = () =>
  import(/* webpackChunkName: "vsf-layout-default" */ "./layouts/default");
const AuthLayout = () =>
  import(/* webpackChunkName: "vsf-layout-default" */ "./layouts/Auth");

export default {
  components: {
    DefaultLayout,
    AuthLayout,
  },
  data() {
    return {
      layout: "default-layout",
    };
  },
  name: "App",
  created() {
    if (localStorage.getItem("token")) {
      this.layout = "default-layout";
    } else {
      this.layout = "auth-layout";
      this.$router.push("login");
    }
  },
};
</script>

<style>
</style>
