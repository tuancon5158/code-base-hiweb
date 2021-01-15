<template>
  <div class="product__nike">
    <h2 class="text-center">What store category are you interested in?</h2>
    <p class="text-center">
      Select at least one category so we can generate a targeted store for you. You can always change them later.
    </p>
    <div>
      <v-autocomplete :items="productNikes" v-model="nike"></v-autocomplete>
    </div>
    <div class="d-flex">
      <v-btn @click="back" color="">
        Back
      </v-btn>
      <v-btn class="ml-auto" @click="next" color="primary">
        Next
      </v-btn>
    </div>
  </div>
</template>
<script>
import { required, minLength, maxLength, email, helpers, decimal } from 'vuelidate/lib/validators';

export default {
  props: {
    /**
     * Callback
     */
    callback: {
      type: Function,
      default(data) {},
    },
  },
  data() {
    return {
      productNikes: [
        {
          id: 24,
          name: 'Animals & Pet Supplies',
          text: 'Animals & Pet Supplies',
        },
        {
          id: 2121,
          name: 'Hardware',
          text: 'Hardware',
        },
        {
          id: 2635,
          name: 'Health & Beauty',
          text: 'Health & Beauty',
        },
        {
          id: 24,
          name: 'Baby & Toddler',
          text: 'Baby & Toddler',
        },
        {
          id: 24,
          name: 'Vehicles & Parts',
          text: 'Vehicles & Parts',
        },
        {
          id: 24,
          name: 'Religious & Ceremonial',
          text: 'Religious & Ceremonial',
        },
        {
          id: 24,
          name: 'Arts & Entertainment',
          text: 'Arts & Entertainment',
        },
      ],
      nike: null,
    };
  },
  methods: {
    next() {
      this.callback(this.nike);
    },
    back() {
      this.$parent.$parent.$parent.e1 = 2;
    },
  },
};
</script>
