<template>
  <div class="product-page--create">
    <v-row no-gutters>
      <v-col cols="12 d-flex align-center">
        <i class="fas fa-caret-left mr-2"></i>
        <h4>Product</h4>
      </v-col>
      <v-col cols="12"> <h1>Add product</h1></v-col>
    </v-row>
    <GroupSubmit v-if="showHeader" :callbackCancel="onCancel" :callbackSubmit="onSubmit" />
    <v-row>
      <v-col cols="12" sm="8" class="d-flex flex-column">
        <div class="elevation-form pa-3">
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
      <v-col cols="12">
        <v-divider></v-divider>
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-spacer></v-spacer>
        <v-btn color="error" class="mr-3" @click="onCancel">Discard</v-btn>
        <v-btn color="success" @click="onSubmit">Create</v-btn>
      </v-col>
    </v-row>
    <BeforeLeavePage />
  </div>
</template>

<script>
import utilities from '@/helpers/utilities';
import { required, minLength, maxLength, between, email } from 'vuelidate/lib/validators';
import resourceBeforeLeavePage from '@/mixins/before-change-router';

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

export default {
  mixins: [resourceBeforeLeavePage],
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
    let defaultForm = {
      title: 'test',
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
    };
    return {
      showHeader: false,
      searchString: 'null hihi',
      title: '',
      attributes: Object.assign({}, defaultForm),
      // attributes: Object.assign({}, defaultForm),
      defaultForm,
    };
  },
  methods: {
    onCancel() {
      this.$v.$reset();
      this.attributes = Object.assign({}, this.defaultForm);
    },
    onSubmit() {
      this.$v.$touch();
      utilities.scrollToTop();
    },
    test() {
      this.nextPage = true;
      this.$router.push({ name: 'home' });
    },
  },
  watch: {
    attributes: {
      handler: function(val, oldVal) {
        this.showHeader = !utilities.comparisonTwoObject(this.defaultForm, this.attributes);
        // if (this.showHeader) {
        //   this.$v.$reset();
        // }
      },
      deep: true,
    },
  },

  validations: {
    attributes: {
      title: {
        required,
      },
    },
  },
};
</script>
<style lang="scss"></style>
