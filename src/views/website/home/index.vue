<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <div class="d-flex align-center">
          <v-select
            class="selected_shop"
            width="400"
            v-model="shop_id"
            :items="store"
            item-text="name"
            item-value="shop_id"
            persistent-hint
            return-object
            single-line
            hide-details
          ></v-select>
          <date-pickers class="mx-4" :callback="pickedDate" :dates="dates" :range="true" />
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-switch
                v-bind="attrs"
                v-on="on"
                hide-details
                class="my-0"
                v-model="refresh"
                label="Auto-refresh"
              ></v-switch>
            </template>
            <span>Tooltip</span>
          </v-tooltip>
        </div>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <total-sales />
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <conversion-rate />
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <total-orders />
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <total-orders />
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <TrafficSources />
      </v-col>
      <v-col cols="12" md="12" sm="12">
        <ProductPerformance />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import TotalSales from '../analytics/TotalSales';
import TotalOrders from '../analytics/TotalOrders';
import ConversionRate from '../analytics/ConversionRate';
import TrafficSources from '../analytics/TrafficSources';
import ProductPerformance from '../analytics/ProductPerformance';
import DatePickers from '@/components/form/DatePickers';

const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea'],
];

export default {
  components: {
    TotalSales,
    TotalOrders,
    ConversionRate,
    TrafficSources,
    ProductPerformance,
    DatePickers,
  },
  data: () => ({
    fill: true,
    selectedGradient: gradients[4],
    gradients,
    padding: 8,
    radius: 10,
    value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
    width: 2,
    shop_id: 1,
    refresh: false,
    dates: ['2021-01-06', '2021-01-09'],
    store: [
      { name: 'Shop 1', shop_id: 1 },
      { name: 'Shop 2', shop_id: 2 },
      { name: 'Shop 3', shop_id: 3 },
      { name: 'Shop 4', shop_id: 4 },
      { name: 'Shop 5', shop_id: 5 },
      { name: 'Shop 6', shop_id: 6 },
    ],
  }),
  methods: {
    pickedDate(dates) {
      console.log(dates);
    },
  },
};
</script>
<style lang="scss">
.selected_shop {
  width: 300px;
  max-width: 300px;
}
</style>
