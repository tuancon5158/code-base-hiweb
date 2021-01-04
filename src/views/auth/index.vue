<template>
  <div class="d-flex justify-center auth-pages">
    <v-row no-gutters class="login-form">
      <v-col no-gutters cols="12" md="4" sm="12">
        <Login v-if="!authPage || authPage === 'login'" />
        <Register v-if="authPage === 'register'" />
        <Forgot v-if="authPage === 'forgot'" />
        <!-- //shop && token -->
        <Shop v-if="authPage === 'shop'" />
      </v-col>
      <v-col cols="12" md="8" sm="12">
        123
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
  height: 100px;
}
.login-form {
  padding: 10rem 2rem;
  width: 350px;
  @include flex();
}
.login-form h1 {
  font-size: 3.2rem;
}
@media only screen and (max-width: 600px) {
  .login-form {
    width: 100% !important;
  }
}
</style>
