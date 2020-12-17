<template>
  <div class="home-page" :style="'background-image: url(' + require('@/assets/images/illustrations/sticky.svg') + ');'">
    <div class="container">
      <v-row style="height: 100%" class="login"> </v-row>
    </div>
    <!-- <v-row justify="center" no-gutters class="container"> Tao web o day </v-row> -->
  </div>
</template>

<script>
import STORAGE_NAME from '@/const/storage';
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
      this.$router.push('/auth/login');
      localStorage.removeItem(STORAGE_NAME.TOKEN);
    },
  },
};
</script>

<style lang="scss" scoped>
.class {
  background: $color-checkbox;
}
.home-page {
  @include flex(center, flex-start);
  height: 100%;
  & .container {
    margin: 2rem 0;
    max-width: 1284px;
    width: 100%;
    height: auto;
  }
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 100% auto;
  background-attachment: fixed;
  background-color: #f9fbfd;
}
</style>
