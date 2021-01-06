<template>
  <v-navigation-drawer
    class="filter-component"
    mobile-breakpoint="25000"
    width="350"
    :hide-overlay="true"
    :disable-resize-watcher="true"
    :disable-route-watcher="true"
    right
    :value="drawer"
    fixed
    app
  >
    <div class="pl-2 label-filter d-flex align-center">
      <span>Filters</span>
    </div>
    <div class="filter-list">
      <v-row justify="center">
        <v-expansion-panels multiple>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header>Item</v-expansion-panel-header>
            <v-btn color="success" @click="addCondition(item)">
              addCondition
            </v-btn>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
    <div>
      <v-btn color="success" @click="doneSelectFilter">Done</v-btn>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },

    /**
     * Fields
     */
    fields: {
      type: Array,
      default() {
        return [
          {
            label: 'Example Text',
            field: 'example-text',
            operators: ['='],
          },
          {
            label: 'Example Select',
            field: 'example-select',
            operators: ['=', '!=', '>', '<', '>=', '<='],
            options: {
              key: 'Value',
            },
          },
        ];
      },
    },

    /**
     * Preset filter data
     */
    filter: {
      default: null,
    },

    /**
     * Callback
     */
    callback: {
      type: Function,
      default(filterData) {
        console.log('Default filter data handler. ' + JSON.stringify(filterData));
      },
    },
    callbackDone: {
      type: Function,
      default(filterData) {
        console.log('Default filter data handler. ' + JSON.stringify(filterData));
      },
    },
  },
  data() {
    return {
      filterData: [],
    };
  },
  methods: {
    addCondition(i) {
      this.filterData.push({
        field: i,
        value: `v${i}`,
      });
      this.callback(this.filterData);
    },
    doneSelectFilter() {
      this.callbackDone();
      console.log('callbackDone in Filter Component');
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-component {
  //   position: relative;
  .label-filter {
    position: fixed;
    top: 0;
    z-index: 2;
    width: 100%;
    overflow: hidden;
    height: $height-header-main + 5;
    border-bottom: 1px solid $border-color;
    background: white;
  }
  .filter-list {
    padding: 15px;
    margin-top: $height-header-main;
    height: calc(100% - $height-header-main);
  }
}
</style>
