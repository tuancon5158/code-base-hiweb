<template>
  <div class="product-page">
    <v-row no-gutters>
      <v-col cols="12" class="page-header">
        <span class="page-title">{{ $t('Orders') }}</span>
        <!-- <v-btn color="primary" @click.stop="drawer = !drawer">More filters </v-btn> -->
      </v-col>
      <v-col cols="12" class="d-flex">
        <v-btn outlined color="primary"><i class="fas fa-file-export"></i>{{ $t('Export') }} </v-btn>
        <!-- <v-btn outlined color="primary"><i class="fas fa-file-export"></i>{{ $t('Fulfill with CrossPanda') }} </v-btn>
        <v-btn outlined color="primary"><i class="fas fa-file-export"></i>{{ $t('More services') }} </v-btn> -->
        <v-spacer></v-spacer>
        <v-btn outlined class="ml-2" color="primary"
          ><i class="fas fa-download"></i>{{ $t('Import tracking number') }}
        </v-btn>
      </v-col>
    </v-row>
    <Orders />
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
import Orders from './components/Orders';

export default {
  components: { Orders },
};
</script>
