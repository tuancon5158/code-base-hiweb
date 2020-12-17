<template>
  <v-col cols="12" sm="9">
    <h1 class="d-none d-sm-flex">Sign up</h1>
    <div>
      <span class="label-form"> Email </span>
      <v-text-field autocomplete="off" name="email" id="email"></v-text-field>
    </div>
    <div>
      <span class="label-form"> Password </span>
      <v-text-field :type="type" autocomplete="off" name="email" id="email">
        <template slot="append">
          <i
            @click="type = type === 'text' ? 'password' : 'text'"
            v-show="type === 'text'"
            class="show-password far fa-eye-slash"
          ></i>
          <i
            v-show="type === 'password'"
            @click="type = type === 'text' ? 'password' : 'text'"
            class="show-password far fa-eye"
          ></i>
        </template>
      </v-text-field>
    </div>
    <div>
      <span class="label-form"> Shope name </span>
      <v-text-field autocomplete="off" name="email" id="email"></v-text-field>
    </div>

    <div class="mt-5">
      <v-btn @click="onLogin" :loading="isLoading" width="100%" color="primary">Sign up</v-btn>
    </div>
    <div class="label-forgot mt-5">
      <span @click="$router.push({ path: '/auth/login' })">Already have an account? Sign in</span>
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
<style lang="scss" scoped>
h1 {
  font-size: 3.2rem;
}
.show-password {
  cursor: pointer !important;
  margin-right: 5px;
  margin-top: 5px;
}
.label-forgot span {
  font-size: 1.3rem;
  color: $main-color;
  cursor: pointer;
}
</style>
