<template>
  <div class="resource-table">
    <table id="customers">
      <thead v-if="selectable.getIds().length === 0">
        <tr>
          <th v-for="(columnData, columnName) in columns" :key="columnName">
            <!-- <div>{{ selectable.getIds().length }}</div> -->
            <template v-if="!columnData.blankLabel">{{ columnName }}</template>

            <!-- Selectable -->
            <template v-if="columnData.kind === 'selectable'">
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
            </template>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(resource, k) in document" :key="k">
          <td v-for="(column, kc) in columns" :key="kc">
            <template v-if="column.kind === 'selectable'">
              <div class="custom-control custom-checkbox table-checkbox pointer">
                <input
                  @change="
                    selectable.isSelected(makeSelectId(resource))
                      ? selectable.unselect(makeSelectId(resource))
                      : selectable.select(makeSelectId(resource))
                  "
                  :checked="selectable.isSelected(makeSelectId(resource))"
                  type="checkbox"
                  class="custom-control-input pointer"
                  name="ordersSelect"
                  :id="makeSelectId(resource)"
                />
                <label :for="makeSelectId(resource)" class="custom-control-label">&nbsp;</label>
              </div>
            </template>
            <template v-if="column.kind === 'image-title'">
              <v-avatar size="40" color="red" class="text-center pointer">
                <img
                  src="
                    https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F096170e2-b2ab-43bb-8e30-a408161539c9_220x239.jpeg"
                  alt=""
                  srcset=""
                />
              </v-avatar>
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
    document: {
      default: null,
    },
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
      resources: [],
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
