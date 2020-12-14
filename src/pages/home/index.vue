<template>
  <div>
    <v-row align="center" justify="space-around">
      <v-btn @click="onLogout" color="error">Click to Logout </v-btn>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
    };
  },
  methods: {
    onLogout() {
      this.$store.commit('setAuthCheck', false);
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.class {
  background: $color-checkbox;
}
</style>
