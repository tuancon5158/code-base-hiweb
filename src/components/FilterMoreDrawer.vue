<template>
  <v-navigation-drawer
    class="filter-component"
    mobile-breakpoint="25000"
    width="350"
    :hide-overlay="true"
    :disable-resize-watcher="true"
    :disable-route-watcher="true"
    right
    :value="drawer"
    fixed
    app
  >
    <div class="pl-2 label-filter d-flex align-center">
      <span>More filters</span>
    </div>
    <div class="filter-list">
      <v-row justify="center">
        <v-expansion-panels multiple>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['drawer'],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.filter-component {
  //   position: relative;
  .label-filter {
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    overflow: hidden;
    height: $height-header-main;
    border-bottom: 1px solid $border-color;
    background: white;
  }
  .filter-list {
    padding: 15px;
    margin-top: $height-header-main;
    height: calc(100% - $height-header-main);
  }
}
</style>
