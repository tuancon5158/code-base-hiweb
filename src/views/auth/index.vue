<template>
  <div style="width: 100%" class="d-flex justify-center">
    <v-row no-gutters class="login-form">
      <Login v-if="!authPage || authPage === 'login'" />
      <Register v-if="authPage === 'register'" />
      <Forgot v-if="authPage === 'forgot'" />
    </v-row>
  </div>
</template>
<script>
import Login from './components/Login';
import Register from './components/Register';
import Forgot from './components/Forgot';

export default {
  props: ['authPage'],
  components: {
    Login,
    Register,
    Forgot,
  },
};
</script>

<style lang="scss">
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
