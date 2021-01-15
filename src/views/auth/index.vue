<template>
  <div class="d-flex justify-center auth-pages">
    <v-row no-gutters class="">
      <v-col no-gutters cols="12" md="4" sm="12" class="login-form">
        <div class="auth-container">
          <!-- Login page -->
          <Login v-if="!authPage || authPage === 'login'" />
          <!-- Register page -->
          <Register v-if="authPage === 'register'" />
          <!-- Forgot password page -->
          <Forgot v-if="authPage === 'forgot'" />
          <!-- //shop && token -->
          <Shop v-if="authPage === 'shop'" />
        </div>
      </v-col>
      <v-col class="right-content d-none d-sm-flex" cols="12" md="8" sm="12">
        <v-parallax style="height: 100%;width: 100%;" :src="require('@/assets/images/material.jpg')"></v-parallax>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';
import Shop from './components/Shop';

export default {
  props: ['authPage'],
  components: {
    Login,
    Register,
    Forgot,
    Shop,
  },
};
</script>

<style lang="scss">
.auth-pages {
  width: 100%;
  height: 100%;
  .auth-container {
    @include flex();
    padding: 10px;
  }
  .right-content {
    height: 100%;
    @include flex();
    background: #131f37;
    color: white;
  }
  .v-parallax__image {
    transform: translate(-50%) !important;
  }
}
.login-form {
  padding: 10rem 2rem;
  @include flex();
}
.login-form h1 {
  font-size: 3.2rem;
}
@media only screen and (min-width: 601px) {
  .auth-container {
    @include flex();
    width: 100%;
  }
}
@media only screen and (max-width: 600px) {
  .login-form {
    width: 100% !important;
  }
  .auth-container {
    @include flex();
    width: 100%;
  }
}
</style>
