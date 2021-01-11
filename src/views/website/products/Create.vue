<template>
  <div class="product-page--create">
    <v-row no-gutters>
      <v-col cols="12 d-flex align-center">
        <i class="fas fa-caret-left mr-2"></i>
        <h4>Product</h4>
      </v-col>
      <v-col cols="12"> <h1>Add product</h1></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="8" class="d-flex flex-column">
        <div class="elevation-form pa-3">
          <!-- <InputTest label="Title" :model="['attributes', 'title']" :validate="[{ type: 'required' }]" /> -->
          <input-title />
          <ContentInput title="Description" subtitle="Maximum 100.000 characters" />
        </div>
        <div class="elevation-form mt-4 pa-3">
          <Images />
        </div>
        <div class="elevation-form mt-4 pa-3">
          <Pricing />
        </div>
        <div class="elevation-form mt-4 pa-3">
          <Inventory />
        </div>
        <div class="elevation-form pa-3 mt-4">
          <Shipping />
        </div>
        <div class="elevation-form pa-3 mt-4">
          <Variants />
        </div>
      </v-col>
      <v-col cols="12" sm="4" class="d-flex flex-column">
        <div class="elevation-form pa-3">
          <ProductAvailability />
        </div>
        <div class="elevation-form pa-3 mt-4">
          <Organization />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import InputTest from '@/views/website/components/inputs/InputDefault';
import InputTitle from '@/views/website/components/InputTitle';

import ContentInput from '@/views/website/components/Content';
import Images from '@/views/website/products/components/Images';
import ProductAvailability from '@/views/website/products/components/ProductAvailability';
import Organization from '@/views/website/products/components/Organization';
import Pricing from '@/views/website/products/components/Pricing';
import Inventory from '@/views/website/products/components/Inventory';
import Shipping from '@/views/website/products/components/Shipping';
import Variants from '@/views/website/products/components/Variants';
import { required, minLength, between, email } from 'vuelidate/lib/validators';

export default {
  components: {
    InputTitle,
    ContentInput,
    Images,
    ProductAvailability,
    Organization,
    Pricing,
    Inventory,
    Shipping,
    Variants,
  },
  data() {
    return {
      searchString: 'null hihi',
      title: '',
      attributes: {
        title: 'oz',
        handle: '',
        description: '',
        content: '',
        visibility: 'public',
        tags: [],
        vendor: null,
        group: null,
        option1: null,
        option2: null,
        option3: null,

        price: 0,
        compare_at_price: 0,
      },
    };
  },

  validations: {
    attributes: {
      title: {
        required,
      },
    },
    title: {
      required,
      email,
    },
  },
};
</script>
