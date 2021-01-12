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
    @input="checkDrawer"
    fixed
    app
  >
    <div class="pl-2 label-filter d-flex align-center">
      <h3>
        <span>Filters</span>
      </h3>
    </div>
    <div class="filter-list">
      <v-row justify="center">
        <!-- {{ filterData }} -->
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in 15" :key="i">
            <v-expansion-panel-header>Condition {{ item }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-text-field v-if="item % 2 === 0" placeholder="condition" @change="addCondition(item)"></v-text-field>
              <v-radio-group v-else @change="addCondition(item)">
                <v-radio v-for="n in 3" :key="n" :label="`Select ${n}`" :value="n"></v-radio>
              </v-radio-group>
            </v-expansion-panel-content>
            <!-- <v-btn color="success" @click="addCondition(item)">
              addCondition
            </v-btn> -->
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
    </div>
    <div class="filter-footer">
      <v-card class="pa-5 d-flex" max-width>
        <v-btn color="error" @click="clearFilter">Clear</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="doneSelectFilter">Done</v-btn>
      </v-card>
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
  watch: {
    drawer() {
      console.log('1212');
    },
  },
  methods: {
    checkDrawer(value) {
      this.$emit('update:drawer', value);
    },
    addCondition(i) {
      this.filterData.push({
        field: i,
        value: `Filter${i}`,
      });
      this.callback(this.filterData);
    },
    clearFilter() {
      this.callback([]);
      this.callbackDone();
    },
    doneSelectFilter() {
      this.callbackDone();
      console.log('callbackDone in Filter Component');
    },
  },
};
</script>

<style lang="scss">
.filter-component {
  .v-navigation-drawer__content {
    display: flex;
    flex-direction: column;
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
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
      margin-top: 65px;
      // max-height: calc(100% - 150px);
    }
    .filter-footer {
      width: 100%;
      position: fixed;
      bottom: 0;
      z-index: 10;
    }
  }
}
</style>
