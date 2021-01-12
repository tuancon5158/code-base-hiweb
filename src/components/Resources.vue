<template>
  <v-row>
    <v-col cols="12" class="d-flex">
      <div
        v-if="searchable"
        class="input-group input-group-flush input-group-merge"
        :style="filter && filter.length ? 'width:80%' : 'width:100%'"
      >
        <v-text-field v-model="$parent.searchString" placeholder="Search" autocomplete="off" />
      </div>

      <template v-if="filterFields && filterFields.length">
        <!-- Filter Button -->
        <v-btn
          height="34px"
          small
          outlined
          color="primary"
          @click.stop="drawer = !drawer"
          class="btn btn-sm btn-secondary mt-1 ml-4"
        >
          <h4>More Filter</h4>
          <template v-if="filterData.length">({{ filterData.length }})</template>
        </v-btn>
      </template>
      <!-- Filter Modal -->
      <FilterMoreDrawer
        v-if="filter && filter.length > 0"
        :drawer.sync="drawer"
        :fields="filterFields"
        :filter="filterData"
        :sync-filter-query="false"
        :callback="setTmpFilterData"
        :callbackDone="commitFilterData"
      />
    </v-col>
    <v-col cols="12">
      <v-chip v-for="(i, k) in filterData" @click:close="removeFilterData(k)" :key="i.field" class="ma-2" close>
        {{ i.value }}
      </v-chip>
    </v-col>
    <v-col cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12" v-if="!$parent.isLoading">
      <!-- {{ selectable.getIds() }} -->
      <div v-if="selectable.getIds().length > 0" class="mb-2 resources-header--sticky elevation-1 d-flex align-center">
        <div class="custom-control custom-checkbox table-checkbox pointer pb-2 ml-2">
          <input
            @change="selectable.isSelectAll() ? selectable.unselectAll() : selectable.selectAll()"
            :checked="selectable.isSelectAll()"
            type="checkbox"
            class="custom-control-input pointer"
            name="ordersSelect"
            :id="selectableId"
          />
          <label
            :class="
              'pointer ' +
                `${selectable.isSelectAll() ? 'custom-control-label' : 'custom-control-label custom-control-label-b'}`
            "
            :for="selectableId"
            >&nbsp;</label
          >
        </div>
        <div>{{ 121 }}Selection</div>
      </div>
      <v-divider v-if="selectable.getIds().length > 0"></v-divider>
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
import Selectable from '@/helpers/selectable';
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

    /**
     * Filter data change callback
     */
    filterCallback: {
      type: Function,
      default(filterData) {
        console.log('Default filter callback handler. Receieved ' + JSON.stringify(filterData));
      },
    },

    /**
     * Sorting callback
     */
  },
  components: {
    ResourceTable,
  },
  data() {
    return {
      listFilter: [],
      selectableId: 'abcsse',
      drawer: null,
      selectable: null,
      displayHeaderTable: false,
      tmpFilterData: [],
    };
  },
  methods: {
    checkDrawer() {
      console.log(this.drawer, 'hihi');
      if (!this.drawer) {
        this.drawer = true;
      } else {
        this.drawer = null;
        this.drawer = true;
      }
    },
    removeFilterData(k) {
      this.tmpFilterData.splice(k, 1);
      // this.setTmpFilterData(this.tmpFilterData);
      // this.tmpFilterData = this.tmpFilterData.map(it => it).splice(k, 1);
      this.commitFilterData();
    },
    // when filter change
    setTmpFilterData(filterData) {
      this.tmpFilterData = filterData;
    },
    handleScroll(event) {
      this.displayHeaderTable = window.scrollY > 220 ? true : false;
      // Any code to be executed when the window is scrolled
    },
    commitFilterData() {
      this.filterCallback([...this.tmpFilterData]);

      let query = JSON.parse(JSON.stringify(this.$route.query));
      let newQuery = JSON.stringify(this.tmpFilterData);
      console.log('query._query ', newQuery);
      if (query._query !== newQuery) {
        query._query = newQuery;
        this.$router.replace({
          query,
        });
      }
      if (this.tmpFilterData.length === 0) {
        this.$router.replace({
          ...query,
          _query: '',
        });
      }
    },
  },

  created() {
    window.addEventListener('scroll', this.handleScroll);

    this.selectable = new Selectable(data => {
      this.$forceUpdate();
    });
  },
};
</script>
<style lang="scss">
.resources-header--sticky {
  // width: 350px;
  height: 50px;
  position: sticky;
  top: 67px;
  z-index: 4;
  background: hsla(0, 0%, 100%, 0.96);
  // border-radius: 12px 12px 12px 12px;
  // box-shadow: 0 8px 24px 0 rgba(54, 62, 67, 0.1), 0 16px 40px 0 rgba(54, 62, 67, 0.1);
  // .v-card {
  //   height: 100%;
  // }
}
</style>
