<template>
  <v-row>
    <v-col cols="12">
      <ResourceTable :selectable="selectable" :columns="columns" />
    </v-col>
  </v-row>
</template>

<script>
/* eslint-disable prettier/prettier */

import ResourceTable from './ResourceTable';
import TestVuex from '@/helpers/testVuex';
export default {
  props: {
    columns: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      selectable: null,
    };
  },
  components: {
    ResourceTable,
  },
  created() {
    this.selectable = new TestVuex((data) => {
      this.$forceUpdate();
    });
  },
};
</script>
