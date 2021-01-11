<template>
  <div class="form-component">
    <label for="">
      Inventory
    </label>
    <v-row gutters>
      <v-col cols="6">
        <label class="d-flex fz-13">SKU (stock keeping unit) </label>
        <v-text-field hide-details="" aria-autocomplete="off"></v-text-field>
      </v-col>
      <v-col cols="6">
        <label class="d-flex fz-13">Barcode (ISBN, UPC, GTIN, etc.) </label>
        <v-text-field hide-details="" aria-autocomplete="off"></v-text-field>
      </v-col>
      <v-col cols="6">
        <label class="d-flex fz-13">Inventory policy </label>
        <v-text-field hide-details="" aria-autocomplete="off"></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
