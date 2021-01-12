<template>
  <div class="form-component">
    <label for="">
      Inventory
    </label>
    <v-row gutters>
      <v-col cols="6">
        <InputNest label="SKU (stock keeping unit)" :model="['attributes', 'price1']" />
      </v-col>
      <v-col cols="6">
        <InputNest label="Barcode (ISBN, UPC, GTIN, etc.)" :model="['attributes', 'price1']" />
      </v-col>
      <v-col cols="6">
        <InputNest label="Inventory policy " :model="['attributes', 'price1']" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
