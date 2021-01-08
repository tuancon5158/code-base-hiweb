<template>
  <div class="form-component">
    <label for="">
      Product availability
    </label>
    <div>
      Manage the availability of the product in these channels
    </div>
    <div>
      <v-checkbox hide-details="" value="John">
        <template v-slot:label>
          <div class="label-checkbox">
            Online store listing pages
          </div>
        </template>
      </v-checkbox>
      <v-checkbox hide-details="" value="Jacob">
        <template v-slot:label>
          <span>
            Search Engine Bot Crawlers
          </span>
        </template>
      </v-checkbox>
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
