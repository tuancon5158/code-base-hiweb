<template>
  <v-row>
    <v-col cols="12" class="d-flex">
      <div v-if="searchable" class="input-group input-group-flush input-group-merge" style="width:80%">
        <v-text-field v-model="$parent.searchString" placeholder="Search" autocomplete="off" />
      </div>
      <template v-if="filterFields && filterFields.length">
        <!-- Filter Button -->
        <v-btn small outlined color="primary" @click="drawer = !drawer" class="btn btn-sm btn-secondary mt-2 ml-4">
          Filter
          <template v-if="filterData.length">({{ filterData.length }})</template>
        </v-btn>
      </template>
      <!-- Filter Modal -->
      <FilterMoreDrawer :drawer="drawer" />
    </v-col>
    <v-col cols="12">
      <!-- <div
        v-if="displayHeaderTable"
        id="tuancon"
        style="position: sticky; top: 63px; z-index: 5; height: 60px; background-color: red"
      ></div> -->
      <ResourceTable :selectable="selectable" :columns="columns" />
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable prettier/prettier */

import ResourceTable from './ResourceTable';
import TestVuex from '@/helpers/testVuex';
import $ from 'jquery';
export default {
  props: {
    columns: {
      type: Object,
      default() {
        return {};
      },
    },
    callback: {
      type: Function,
      default(id) {
        console.log('1212');
      },
    },
    searchable: {
      default: false,
    },
    /**
     * Filter fields
     */
    filterFields: {
      type: Array,
      default() {
        return [];
      },
    },
    /**
     * Filter data
     */
    filterData: {
      type: Array,
      default() {
        return [];
      },
    },
  },

  methods: {
    test() {
      console.log(this.$el.querySelector('#tuancon'), 'this.$el');
    },
    handleScroll(event) {
      console.log('event', window.scrollY, window.scrollX);
      this.displayHeaderTable = window.scrollY > 220 ? true : false;
      // Any code to be executed when the window is scrolled
    },
  },
  data() {
    return {
      drawer: null,
      selectable: null,
      displayHeaderTable: false,
    };
  },
  components: {
    ResourceTable,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);

    this.selectable = new TestVuex(data => {
      this.$forceUpdate();
    });
  },
};
</script>
