<template>
  <div class="form-component">
    <label for="">
      Shipping
    </label>
    <v-row gutters>
      <v-col cols="12">
        <label class="d-flex">WEIGHT </label>
        <span class="d-flex">Used to calculate shipping rates at checkout and label prices during fulfillment. </span>
        <span class="Weight">Weight </span>
        <v-row no-gutters>
          <v-col cols="6">
            <v-text-field hide-details="" aria-autocomplete="off"></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-select :items="['lb', 'oz', 'kg', 'g']"></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
