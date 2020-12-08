<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const DefaultLayout = () => import("./layouts/default");
const AuthLayout = () => import("./layouts/Auth");

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
    console.log("this.$store", this.$store);
    if (localStorage.getItem("token")) {
      console.log("1");
      this.layout = "default-layout";
       this.$router.push("/");
    } else {
      console.log("2");
      this.layout = "auth-layout";
      this.$router.push("login");
    }
  },
};
</script>

<style>
</style>
