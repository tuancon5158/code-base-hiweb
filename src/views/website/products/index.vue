<template>
  <div class="product-page">
    <!-- <img :src="ai" alt="" srcset="" /> -->
    <div :key="i.image" v-for="i in array">asdas<img :src="i.image" alt="" srcset="" /></div>
    <v-row>
      <v-col cols="12" class="d-flex justify-space-between">
        <span><h2>Products</h2></span>
        <span><v-btn color="primary">Add product</v-btn></span>
      </v-col>
      <!-- <v-spacer></v-spacer>
      <v-col cols="12" sm="2">
      </v-col> -->
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn color="primary" @click.stop="drawer = !drawer">More filters </v-btn>
      </v-col>
      <v-col cols="12">
        <Resource :columns="columns" :callback="test" />
        <!-- <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table> -->
      </v-col>
      <!-- {{$.}} -->
    </v-row>
    <!-- <button @click="cancel" class="btn btn-lg btn-white" type="reset">Cancel</button> -->

    <!-- <v-btn color="success" @click="test">text</v-btn> -->
    <FilterMoreDrawer :drawer="drawer" />
  </div>
</template>

<script>
import Resource from '@/components/Resources';
// eslint-disable-next-line no-undef
// var ai = require(`@/assets/images/logo.png`);

export default {
  components: { Resource },
  data() {
    return {
      // eslint-disable-next-line no-undef
      array: [{ image: require('@/assets/images/logo.png') }],
      drawer: false,
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
    };
  },
  created() {},
  methods: {
    getImage(item) {
      console.log(item);
      // eslint-disable-next-line no-undef
      return require(item.image);
    },
    test() {
      console.log('tuanson');
    },
  },
};
</script>
