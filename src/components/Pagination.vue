<template>
  <v-pagination
    right
    :value="page"
    @input="changePage"
    :length="1"
    prev-icon="mdi-menu-left"
    next-icon="mdi-menu-right"
  ></v-pagination>
</template>

<script>
export default {
  props: {
    page: {
      type: Number,
      default: 1,
    },
    /**
     * Sync to http query
     */
    syncQuery: {
      type: String,
      default: 'page',
    },
  },
  methods: {
    changePage(value) {
      this.$emit('update:page', value);
    },
    syncToRouteQuery() {
      let query = JSON.parse(JSON.stringify(this.$route.query));
      query[this.syncQuery] = this.page;
      // Sync
      this.$router.replace({
        query,
      });
    },
  },
  watch: {
    page() {
      this.syncToRouteQuery();
    },
  },
};
</script>

<style lang="scss" scoped></style>
