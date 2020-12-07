<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const DefaultLayout = () =>
  import(/* webpackChunkName: "vsf-layout-default" */ "./layouts/Default");
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
  },
};
</script>

<style>
</style>
