<template>
  <div class="product-page">
    <v-row no-gutters>
      <v-col cols="12" class="page-header d-flex py-3">
        <span class="page-title">{{ $t('Collections') }}</span>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="$router.push({ name: 'website.products.create' })"
          ><i class="fas fa-plus"></i>{{ $t('Add Collections') }}</v-btn
        >
      </v-col>
      <v-col cols="12" class="d-flex"> </v-col>
    </v-row>
    <Collections />
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
import Collections from './components/Collections';

export default {
  components: { Collections },
};
</script>
