<template>
  <v-main>
    <tool-bar />
    <v-container fluid style="padding: 0px; height: 100%"
      ><div class="website-page">
        <template>
          <div class="website-container">
            <!-- <loading-component /> -->
            <HomeIndex v-if="currentRouteName === 'website'" />
            <router-view v-else />
          </div>
        </template>

        <!-- <v-row justify="center" no-gutters class="container"> Tao web o day </v-row> -->
      </div>
      <slot />
    </v-container>
  </v-main>
</template>

<script>
import STORAGE_NAME from '@/const/storage';
import HomeIndex from './home';
import ToolBar from './layouts/ToolBar';

export default {
  components: {
    HomeIndex,
    ToolBar,
  },
  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.website-page {
  background-color: #f9fbfd;
  @include flex(center, flex-start);
  height: 100%;
  & .website-container {
    margin: 0.5rem 1rem;
    width: 100%;
    height: auto;
  }
}
</style>
