<template>
  <div id="app">
    <component :is="layout">
      <v-app>
      <router-view />
        <div>
          <v-alert border="top" color="red lighten-2" dark>
            I'm an alert with a top border and red color
          </v-alert>
          <v-alert border="right" color="blue-grey" dark>
            I'm an alert with a right border and blue-grey color
          </v-alert>
          <v-alert border="bottom" color="pink darken-1" dark>
            I'm an alert with a bottom border and pink color
          </v-alert>
          <v-alert border="left" color="indigo" dark>
            I'm an alert with a border left type info
          </v-alert>
        </div>
        <v-app-bar app color="primary" dark> aasdasds </v-app-bar>
      </v-app>
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
  created() {},
};
</script>

<style>
</style>
