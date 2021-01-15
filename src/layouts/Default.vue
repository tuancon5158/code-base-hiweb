<template>
  <v-app>
    <slot></slot>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex';
import { authService } from '@/apis/auth.s';
import { userService } from '@/apis/user.s';

export default {
  created() {
    this.getUserInfo();
  },
  methods: {
    ...mapMutations(['setUser']),
    async getUserInfo() {
      try {
        let data = await userService.getUserInfo();
        if (data) {
          this.setUser(data.data);
        }
      } catch (error) {
        console.log(error.response);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
