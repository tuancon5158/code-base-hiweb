<template>
  <v-row>
    <v-col cols="12">
      <button @click="test">asdsa</button>
      <div
        v-if="displayHeaderTable"
        id="tuancon"
        style="position: sticky; top: 63px; z-index: 5; height: 60px; background-color: red"
      >
        asdasdsa
      </div>
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
      selectable: null,
      displayHeaderTable: false,
    };
  },
  components: {
    ResourceTable,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);

    this.selectable = new TestVuex((data) => {
      this.$forceUpdate();
    });
  },
};
</script>
