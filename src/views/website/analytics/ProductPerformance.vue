<template>
  <div class="product-performance">
    <v-hover v-slot="{ hover }">
      <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 16 : 2">
        <v-card-text>
          <div class="d-flex header align-baseline">
            <h2>Product performance</h2>
            <div class="select-filter ml-auto">
              <v-select
                class=""
                v-model="select"
                :items="items"
                item-text="state"
                item-value="abbr"
                return-object
                single-line
              ></v-select>
            </div>
          </div>
          <template>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      PRODUCT NAME
                    </th>
                    <th class="text-left">
                      VIEWS
                    </th>
                    <th class="text-left">
                      ORDERS
                    </th>
                    <th class="text-left">UNIT SALES</th>
                    <th class="text-left">SALE/ORDER</th>
                    <th class="text-left">CONVERSION RATE</th>
                    <th class="text-left">REVENUE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, key) in products" :key="key">
                    <td>{{ item.title }}</td>
                    <td>{{ item.views }}</td>
                    <td>{{ item.orders }}</td>
                    <td>{{ item.unit }}</td>
                    <td>{{ item.sale }}</td>
                    <td>{{ item.rate }}</td>
                    <td>{{ item.revenue }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: { state: 'Top products by views', abbr: 'FL' },
      items: [
        { state: 'Top products by views', abbr: 'FL' },
        { state: 'Top products by unit sold', abbr: 'GA' },
        { state: 'Top products without order', abbr: 'NE' },
      ],
      products: [
        { title: 'Product sample 1', views: 965, orders: 50, unit: 62, sale: 23, rate: 7.46, revenue: 453528 },
        { title: 'Product sample 2', views: 856, orders: 80, unit: 12, sale: 23, rate: 27.46, revenue: 453528 },
        { title: 'Product sample 3', views: 623, orders: 26, unit: 62, sale: 22, rate: 37.46, revenue: 453528 },
        { title: 'Product sample 4', views: 548, orders: 38, unit: 34, sale: 43, rate: 47.46, revenue: 453528 },
        { title: 'Product sample 5', views: 214, orders: 10, unit: 62, sale: 45, rate: 7.46, revenue: 453528 },
        { title: 'Product sample 1', views: 852, orders: 17, unit: 23, sale: 76, rate: 7.46, revenue: 453528 },
        { title: 'Product sample 1', views: 327, orders: 29, unit: 62, sale: 54, rate: 7.46, revenue: 453528 },
        { title: 'Product sample 1', views: 648, orders: 36, unit: 23, sale: 87, rate: 7.46, revenue: 453528 },
        { title: 'Product sample 1', views: 187, orders: 48, unit: 6, sale: 76, rate: 7.46, revenue: 453528 },
        { title: 'Product sample 1', views: 657, orders: 78, unit: 54, sale: 54, rate: 7.46, revenue: 453528 },
        { title: 'Product sample 1', views: 364, orders: 30, unit: 67, sale: 9, rate: 7.46, revenue: 453528 },
        { title: 'Product sample 1', views: 566, orders: 71, unit: 22, sale: 34, rate: 7.46, revenue: 453528 },
      ],
    };
  },
};
</script>
<style lang="scss">
.product-performance {
  .select-filter {
    width: 300px;
  }
}
</style>
