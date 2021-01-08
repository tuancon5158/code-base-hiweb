<template>
  <v-col cols="12" class="tab">
    <v-tabs @change="changeTab" align-with-title background-color="navi">
      <v-tab class="text-lowercase" v-for="item in tabs" :key="item.key">
        {{ item.name }}
      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
  </v-col>
</template>

<script>
export default {
  props: {
    currentTab: {
      type: Number,
      default: 0,
    },
    //Array tabs
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
    syncQuery: {
      type: String,
      default: 'tab',
    },
  },
  data() {
    return {};
  },
  methods: {
    changeTab(value) {
      this.$emit('update:currentTab', value);
    },
    syncToRouteQuery() {
      let query = JSON.parse(JSON.stringify(this.$route.query));
      query[this.syncQuery] = this.tabs[this.currentTab].key;
      // Sync
      this.$router.replace({
        query,
      });
    },
  },
  watch: {
    currentTab() {
      this.syncToRouteQuery();
    },
  },
};
</script>

<style lang="scss" scoped></style>
