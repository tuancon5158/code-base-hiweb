<template>
  <v-app>
    <v-main>
      <v-container fluid style="padding: 0px; height: 100%">
        <v-row style="height: 100%" class="login">
          <v-col class="login-container" cols="12" sm="6" md="4">
            <slot></slot>
          </v-col>
          <v-col class="introduce-container d-none d-sm-flex" cols="12" sm="6" md="8">
            <img src="@/assets/images/logo.png" alt="" srcset="" />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// .login {
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }
.login-container {
  background: #fff;
  @include flex(center, flex-start);
}
.introduce-container {
  background: #131f37;
  @include flex();
  img {
    width: 18rem;
    height: 10rem;
  }
}
</style>
