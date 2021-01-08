<template>
  <div class="form-component">
    <label for="">
      Organization
    </label>
    <div>
      <label class="d-flex fz-13">Lable</label>
      <v-text-field aria-autocomplete="off"></v-text-field>
    </div>
    <div>
      <label class="d-flex fz-13">Vendor</label>
      <v-text-field aria-autocomplete="off"></v-text-field>
    </div>
    <div class="my-5">
      <v-divider></v-divider>
    </div>
    <div>
      <label class="d-flex fz-13">Collections</label>
      <v-text-field aria-autocomplete="off"></v-text-field>
      <span>Add this product to a collection so it’s easy to find in your store.</span>
    </div>
    <div class="my-5">
      <v-divider></v-divider>
    </div>
    <div>
      <label class="d-flex fz-13">Tags</label>
      <v-text-field aria-autocomplete="off"></v-text-field>
      <span>Add this product to a collection so it’s easy to find in your store.</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.label-checkbox {
  font-weight: none !important;
  text-decoration: none;
}
</style>
