<template>
  <div class="product-page">
    <v-row no-gutters>
      <v-col cols="12" class="page-header">
        <span class="page-title">{{ $t('Products') }}</span>
        <!-- <v-btn color="primary" @click.stop="drawer = !drawer">More filters </v-btn> -->
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-btn outlined color="primary"><i class="fas fa-file-export"></i>{{ $t('Export') }} </v-btn>
        <v-btn outlined class="ml-2" color="primary"><i class="fas fa-download"></i>{{ $t('Import') }} </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="$router.push({ name: 'website.products.create' })"
          ><i class="fas fa-plus"></i>{{ $t('Add product') }}</v-btn
        >
      </v-col>
    </v-row>
    <Products />
    <!--  <v-row>
      <v-col cols="12">
        <v-btn color="primary" @click.stop="drawer = !drawer">More filters </v-btn>
      </v-col>
      <v-col cols="12">
        <Resource :columns="columns" :callback="test" />
      </v-col>
-->
  </div>
</template>

<script>
import Products from './components/Products';

export default {
  components: { Products },
};
</script>
