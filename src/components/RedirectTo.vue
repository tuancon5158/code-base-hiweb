<template>
  <div class="redirect__to d-flex align-center">
    <router-link class="text-decoration-none" :to="{ name: route }">
      <v-icon class="mr-3">fas fa-arrow-left</v-icon>
      {{ title }}
    </router-link>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '',
    },
  },
};
</script>
