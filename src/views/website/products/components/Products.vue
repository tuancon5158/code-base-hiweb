<template>
  <div class="page-products__products">
    <v-row no-gutters class="elevation-2 mt-2 page__table-container">
      <v-col cols="12" class="tab">
        <v-tabs v-model="currentTab" align-with-title background-color="navi">
          <v-tab class="text-lowercase" v-for="item in items" :key="item.key">
            {{ item.name }}
          </v-tab>
        </v-tabs>
        <v-divider></v-divider>
      </v-col>
      <!-- <v-col cols="12">
        <page-loader v-if="!isLoading" />
      </v-col> -->
      <v-col cols="12">
        <Resource :filter-fields="filter" :searchable="searchableField" :columns="columns" :callback="test" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Resource from '@/components/Resources';
import filter from '@/const/filters/product-filter';

export default {
  components: { Resource },
  data() {
    return {
      currentTab: '',
      items: [
        { name: 'All', key: '' },
        { name: 'Available products', key: 'published' },
        { name: 'Unavailable products', key: 'unpublished' },
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
        Product: {
          // blankLabel: true,
          kind: 'image-title',
        },
        Group: {
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
      sortable: [
        {
          label: 'Product title (A-Z)',
          sort: 'title',
        },
        {
          label: 'Product title (Z-A)',
          sort: '-title',
        },
        {
          label: 'Created at (newest first)',
          sort: '-created_at',
        },
        {
          label: 'Created at (oldest first)',
          sort: 'created_at',
        },
        {
          label: 'Updated at (newest first)',
          sort: '-updated_at',
        },
        {
          label: 'Updated at (oldest first)',
          sort: 'updated_at',
        },
        {
          label: 'Product price (low-high)',
          sort: 'price',
        },
        {
          label: 'Product price (high-low)',
          sort: '-price',
        },
        {
          label: 'Compare at price (low-high)',
          sort: 'compare_at_price',
        },
        {
          label: 'Compare at price (high-low)',
          sort: '-compare_at_price',
        },
      ],
      filter,
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
