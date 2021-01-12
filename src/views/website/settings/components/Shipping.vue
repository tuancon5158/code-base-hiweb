<template>
  <div class="shipping__page">
    <Redirect class="mt-3" title="Settings" route="website.settings" />
    <v-row>
      <v-col class="p-3" cols="12">
        <h2>Shipping</h2>
        <v-divider class="mt-3"></v-divider>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Redirect from '@/components/RedirectTo';

export default {
  components: {
    Redirect,
  },
};
</script>
