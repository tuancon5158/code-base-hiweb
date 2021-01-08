<template>
  <div class="form-component">
    <label for="">
      Pricing
    </label>
    <v-row gutters>
      <v-col cols="6">
        <label class="d-flex fz-13">Price</label>
        <v-text-field hide-details="" type="number" suffix="USD" aria-autocomplete="off"></v-text-field>
      </v-col>
      <v-col cols="6">
        <label class="d-flex fz-13">Compare at price </label>
        <v-text-field hide-details="" type="number" suffix="USD" aria-autocomplete="off"></v-text-field>
      </v-col>
      <v-col cols="6">
        <label class="d-flex fz-13">Cost per item </label>
        <v-text-field hide-details="" type="number" suffix="USD" aria-autocomplete="off"></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
