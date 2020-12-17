<template>
  <v-col cols="12" sm="9">
    <h1 class="d-none d-sm-flex">Forgot your password?</h1>
    <h4>We'll email your instructions on how to reset it</h4>
    <div class="mt-6">
      <span class="label-form"> Email </span>
      <v-text-field autocomplete="off" name="email" id="email"></v-text-field>
    </div>

    <div class="mb-5">
      <v-btn @click="onForgot" :loading="isLoading" width="100%" color="primary">Sign in</v-btn>
    </div>
    <div class="label-forgot">
      <span @click="$router.push({ path: '/auth/login' })">Return to Sign in?</span>
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
    onforgot() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 2.2rem;
}
h4 {
  font-size: 1rem;
  color: #82869e !important;
}
</style>
