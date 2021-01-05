<template>
  <v-row>
    <v-col cols="12" class="d-flex">
      <div v-if="searchable" class="input-group input-group-flush input-group-merge" style="width:80%">
        <v-text-field v-model="$parent.searchString" placeholder="Search" autocomplete="off" />
      </div>
      <template v-if="filterFields && filterFields.length">
        <!-- Filter Button -->
        <v-btn
          height="34px"
          small
          outlined
          color="primary"
          @click="drawer = !drawer"
          class="btn btn-sm btn-secondary mt-1 ml-4"
        >
          <h4>More Filter</h4>
          <template v-if="filterData.length">({{ filterData.length }})</template>
        </v-btn>
      </template>
      <!-- Filter Modal -->
      <FilterMoreDrawer :drawer="drawer" />
    </v-col>
    <v-col cols="12" v-if="!$parent.isLoading">
      <!-- {{ selectable.getIds() }} -->
      <div v-if="selectable.getIds().length > 0" class="mb-2 header-sticky">
        <div class="custom-control custom-checkbox table-checkbox pointer">
          <input
            @change="selectable.isSelectAll() ? selectable.unselectAll() : selectable.selectAll()"
            :checked="selectable.isSelectAll()"
            type="checkbox"
            class="custom-control-input pointer"
            name="ordersSelect"
            :id="selectableId"
          />

          <label class="custom-control-label" :for="selectableId">&nbsp;</label>
        </div>
      </div>
      <ResourceTable :document="document" :selectable="selectable" :columns="columns" />
    </v-col>
    <v-col v-if="$parent.isLoading" cols="12" class="d-flex justify-center mt-8">
      <!-- <page-loader /> -->
      <v-skeleton-loader width="100%" type="card"></v-skeleton-loader>
    </v-col>
  </v-row>
</template>

<script>
import ResourceTable from './ResourceTable';
import TestVuex from '@/helpers/testVuex';
import $ from 'jquery';
export default {
  props: {
    document: {
      default: null,
    },
    columns: {
      type: Object,
      default() {
        return {};
      },
    },
    callback: {
      type: Function,
      default(id) {},
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
      selectableId: 'abcsse',
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
<style lang="scss">
.header-sticky {
  width: 350px;
  height: 40px;
  position: sticky;
  top: 63px;
  z-index: 4;
  background: hsla(0, 0%, 100%, 0.96);
  border-radius: 12px 12px 12px 12px;
  box-shadow: 0 8px 24px 0 rgba(54, 62, 67, 0.1), 0 16px 40px 0 rgba(54, 62, 67, 0.1);
  .v-card {
    height: 100%;
  }
}
</style>
