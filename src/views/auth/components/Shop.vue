<template>
  <v-col cols="12" sm="8">
    <h2 class="d-none d-sm-flex mb-3">Select a shop</h2>
    <div class="select-shop-page">
      <v-card @click="$router.push('/w/abc.hiwebio/')" class="mx-auto d-flex align-center" tile>
        <div class="pa-4">
          <v-avatar>
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </div>
        <div>
          <p>Khuat Anh Tuan</p>
          <span> tuancon@gmail.com </span>
        </div>
        <i style="margin-left: auto" class="fas fa-chevron-right pr-4 pointer"></i>
      </v-card>
    </div>
  </v-col>
</template>

<script>
export default {
  data() {
    return {
      type: 'password',
      isLoading: false,
    };
  },
  methods: {
    onLogin() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>
<style lang="scss">
.show-password {
  cursor: pointer !important;
  margin-right: 5px;
  margin-top: 5px;
}
.label-forgot span {
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .login-form {
    width: 100% !important;
  }
}
</style>
