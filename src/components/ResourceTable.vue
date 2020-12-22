<template>
  <div class="resource-table">
    <v-text-field></v-text-field>
    <table id="customers">
      <thead>
        <tr>
          <th
            style="position: sticky; top: 63px; z-index: 4"
            v-for="(columnData, columnName) in columns"
            :key="columnName"
          >
            <!-- <div>{{ selectable.getIds().length }}</div> -->
            <template v-if="!columnData.blankLabel">{{ columnName }}</template>

            <!-- Selectable -->
            <template v-if="columnData.kind === 'selectable'">
              <div class="custom-control custom-checkbox table-checkbox">
                <input
                  @change="selectable.isSelectAll() ? selectable.unselectAll() : selectable.selectAll()"
                  :checked="selectable.isSelectAll()"
                  type="checkbox"
                  class="custom-control-input"
                  name="ordersSelect"
                  :id="selectableId"
                />

                <label class="custom-control-label" :for="selectableId">&nbsp;</label>
              </div>
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(resource, k) in resources" :key="k">
          <td v-for="(column, kc) in columns" :key="kc">
            <template v-if="column.kind === 'selectable'">
              <div class="custom-control custom-checkbox table-checkbox">
                <input
                  @change="
                    selectable.isSelected(makeSelectId(resource))
                      ? selectable.unselect(makeSelectId(resource))
                      : selectable.select(makeSelectId(resource))
                  "
                  :checked="selectable.isSelected(makeSelectId(resource))"
                  type="checkbox"
                  class="custom-control-input"
                  name="ordersSelect"
                  :id="makeSelectId(resource)"
                />
                <label :for="makeSelectId(resource)" class="custom-control-label">&nbsp;</label>
              </div>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Object,
      default() {
        return {};
      },
    },
    /**
     * Selectable object
     */
    selectable: {
      default: null,
    },
  },
  data() {
    return {
      selectableId: 'abcs',
      resources: [
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '11' },
        { id: '22' },
        { id: '33' },
        { id: '14' },
        { id: '25' },
        { id: '36' },
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '11' },
        { id: '22' },
        { id: '33' },
        { id: '14' },
        { id: '25' },
        { id: '36' },
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '11' },
        { id: '22' },
        { id: '33' },
        { id: '14' },
        { id: '25' },
        { id: '36' },
        { id: '1' },
        { id: '2' },
        { id: '3' },
        { id: '11' },
        { id: '22' },
        { id: '33' },
        { id: '14' },
        { id: '25' },
        { id: '36' },
      ],
    };
  },
  methods: {
    makeSelectId(resource) {
      return resource.id;
    },
  },
};
</script>
<style type="text/css" lang="scss">
.resource-table {
  .table-checkbox .custom-control-label::before,
  .table-checkbox .custom-control-label::after {
    top: 0.2rem;
    transform: translateY(0%);
  }

  .text-avatar__initial-text {
    top: 12px;
    font-size: 18px;
  }
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: $main-color;
  color: white;
}
</style>
