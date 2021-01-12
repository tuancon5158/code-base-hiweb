<template>
  <div class="page-products__products">
    <v-row no-gutters class="elevation-2 mt-2 page__table-container">
      <HeaderTableTabs :currentTab.sync="currentTab" :tabs="tabs" />

      <v-col cols="12">
        <Resource
          :document="document"
          :filter-fields="filter"
          :filter-data="filterData"
          :filter-callback="setFilterData"
          :searchable="searchableField"
          :columns="columns"
        />
        <pagination :page.sync="page"></pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Resource from '@/components/Resources';
import resourceListMixin from '@/mixins/resource-list';

export default {
  components: { Resource },
  mixins: [resourceListMixin],
  data() {
    return {
      resourceType: 'products',
      // page: 1,
      tabs: [
        { name: 'All', key: '' },
        { name: 'Manual collections', key: 'published' },
        { name: 'Automated collections', key: 'unpublished' },
      ],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      testVuex: null,
      columns: {
        Selectable: {
          blankLabel: true,
          kind: 'selectable',
          width: 1,
        },
        Collections: {
          // blankLabel: true,
          kind: 'image-title',
        },
        Type: {
          field: 'group',
          kind: 'text',
        },
        Vendor: {
          field: 'vendor',
          kind: 'text',
        },
        Actions: {
          kind: 'actions',
          // blankLabel: true,
        },
      },
      searchableField: 'title_search',
      sortable: [],
    };
  },
  created() {},
  methods: {
    test() {
      console.log('tuanson');
    },
  },
};
</script>
<style lang="scss">
.page-products__products {
  background: white;
}
</style>
