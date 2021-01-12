<template>
  <div class="form-component">
    <label for="">
      Pricing
    </label>
    <v-row gutters>
      <v-col cols="6">
        <InputNest label="Price" :model="['attributes', 'price1']" type="number" suffix="USD" />
      </v-col>
      <v-col cols="6">
        <InputNest label="Compare at price" :model="['attributes', 'price2']" type="number" suffix="USD" />
      </v-col>
      <v-col cols="6">
        <InputNest label="Cost per item" :model="['attributes', 'price3']" type="number" suffix="USD" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
