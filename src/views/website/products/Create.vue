<template>
  <div class="product-page--create">
    <v-row no-gutters>
      <v-col cols="12 d-flex align-center">
        <i class="fas fa-caret-left mr-2"></i>
        <h4>Product</h4>
      </v-col>
      <v-col cols="12"> <h1>Add product</h1></v-col>
    </v-row>
    <v-form autocomplete="off">
      <v-row>
        <v-col cols="8" class="d-flex flex-column">
          <div class="elevation-form pa-3">
            <InputTitle />
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
        </v-col>
        <v-col cols="4" class="d-flex flex-column">
          <div class="elevation-form pa-3">
            <ProductAvailability />
          </div>
          <div class="elevation-form pa-3 mt-4">
            <Organization />
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import InputTitle from '@/views/website/components/InputTitle';
import ContentInput from '@/views/website/components/Content';
import Images from '@/views/website/products/components/Images';
import ProductAvailability from '@/views/website/products/components/ProductAvailability';
import Organization from '@/views/website/products/components/Organization';
import Pricing from '@/views/website/products/components/Pricing';
import Inventory from '@/views/website/products/components/Inventory';

export default {
  components: {
    InputTitle,
    ContentInput,
    Images,
    ProductAvailability,
    Organization,
    Pricing,
    Inventory,
  },
  data() {
    return {};
  },
};
</script>
