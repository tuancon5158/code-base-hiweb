<template>
  <div>
    <Login v-if="!authPage || authPage === 'login'" />
    <Register v-if="authPage === 'register'" />
    <Forgot v-if="authPage === 'forgot'" />
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

<style lang="scss" scoped></style>
