<template>
  <div class="shipping__page">
    <Redirect class="mt-3" title="Settings" route="website.settings" />
    <v-row>
      <v-col class="p-3" cols="12">
        <h2>Shipping</h2>
        <v-divider class="mt-3"></v-divider>
      </v-col>
      <v-col cols="12" md="4">
        <h3>Shipping rates at checkout</h3>
        <p class="mt-3">
          Use shipping zones to define regions where you'll ship. Use shipping rates to define how much customers pay
          for shipping in those regions.
        </p>
      </v-col>
      <v-col cols="12" md="8">
        <v-row no-gutters>
          <v-col cols="12" class="d-flex align-center">
            <h3>Shipping zones</h3>
            <router-link class="ml-auto" to="">
              Add shipping zone
            </router-link>
          </v-col>
          <v-col cols="12">
            <v-divider class="my-3"></v-divider>
            <v-row no-gutters>
              <v-col cols="2">
                <v-img width="60" :src="require('@/assets/images/usa.svg')"></v-img>
              </v-col>
              <v-col cols="10">
                123
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Redirect from '@/components/RedirectTo';

export default {
  components: {
    Redirect,
  },
  data() {
    return {
      shipping_zones: [
        {
          additional_item_price: 0,
          countries: null,
          created_at: '2019-08-27T11:35:41+00:00',
          first_item_price: 0,
          id: 379364,
          item_based_rule_name: '',
          item_based_shipping_rate: null,
          name: 'REST OF WORLD',
          preferred_rule: '',
          price_based_shipping_rate: null,
          rule_item_based_on: false,
          shop_id: 10129992,
          type: 'rest_of_world',
          updated_at: '2019-10-30T04:36:47+00:00',
          weight_based_shipping_rate: [
            {
              created_at: '2019-08-27T11:35:41+00:00',
              id: 306683,
              name: 'International Shipping',
              price: 6.99,
              price_unit: 'USD',
              shipping_zone_id: 379364,
              shop_id: 10129992,
              updated_at: '2019-10-30T04:36:47+00:00',
              weight_high: 0,
              weight_low: 0,
              weight_unit: 'lb',
            },
            {
              created_at: '2019-08-28T11:55:34+00:00',
              id: 306684,
              name: 'Standard shipping',
              price: 4.99,
              price_unit: 'USD',
              shipping_zone_id: 379365,
              shop_id: 10129992,
              updated_at: '2019-08-28T11:55:48+00:00',
              weight_high: 0.5,
              weight_low: 0,
              weight_unit: 'lb',
            },
          ],
        },
        {
          additional_item_price: 0,
          countries: [
            {
              code: 'US',
              id: 231,
              name: 'United States',
              provinces: [],
              row_id: 4808159,
            },
          ],
          created_at: '2019-08-28T11:55:34+00:00',
          first_item_price: 0,
          id: 379365,
          item_based_rule_name: '',
          item_based_shipping_rate: null,
          name: 'US',
          preferred_rule: '',
          price_based_shipping_rate: null,
          rule_item_based_on: false,
          shop_id: 10129992,
          type: 'specific',
          updated_at: '2019-08-28T11:55:48+00:00',
          weight_based_shipping_rate: [
            {
              created_at: '2019-08-28T11:55:34+00:00',
              id: 306684,
              name: 'Standard shipping',
              price: 4.99,
              price_unit: 'USD',
              shipping_zone_id: 379365,
              shop_id: 10129992,
              updated_at: '2019-08-28T11:55:48+00:00',
              weight_high: 0.5,
              weight_low: 0,
              weight_unit: 'lb',
            },
            {
              created_at: '2019-08-28T11:55:34+00:00',
              id: 306685,
              name: 'Premium shipping',
              price: 6.99,
              price_unit: 'USD',
              shipping_zone_id: 379365,
              shop_id: 10129992,
              updated_at: '2019-08-28T11:55:48+00:00',
              weight_high: 0,
              weight_low: 0.51,
              weight_unit: 'lb',
            },
          ],
        },
      ],
    };
  },
};
</script>
