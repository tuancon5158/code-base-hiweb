<template>
  <div class="product-performance">
    <v-hover v-slot="{ hover }">
      <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 16 : 2">
        <v-card-text>
          <div class="d-flex header align-baseline">
            <h2>Traffic sources</h2>
          </div>
          <template>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">
                      CHANNELS
                    </th>
                    <th class="text-left">
                      REFERRER NAME
                    </th>
                    <th class="text-left">
                      UNIT VISITORS
                    </th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, key) in items" :key="key">
                    <td>{{ item.channel }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.unit }}</td>
                    <td>
                      <div class="d-flex align-center">
                        <v-progress-linear class="mr-2" :value="item.percent"></v-progress-linear>
                        {{ item.percent }}%
                      </div>
                    </td>
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
      items: [
        { channel: 'Direct', name: 'N/A', unit: 1054, percent: 26.75 },
        { channel: 'Email', name: 'Gmail', unit: 254, percent: 6.45 },
        { channel: 'Social', name: 'Facebook', unit: 1432, percent: 36.35 },
        { channel: 'Referral', name: 'hiweb.com', unit: 1090, percent: 27.66 },
        { channel: 'Search', name: 'Google', unit: 110, percent: 2.79 },
      ],
    };
  },
};
</script>
<style lang="scss">
.product-performance {
  .select-filter {
    width: 400px;
  }
}
</style>
