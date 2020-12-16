<template>
  <div>
    <code class="rounded-xl">Tuan con test</code>
    <span class="white--text red pa-4 d-sm-none">tuan con</span>
    <v-card class="pa-2 d-flex flex-row justify-center" outlined tile>
      <div>I'm a flexbox container!</div>
      <div>I'm a flexbox container!</div>
      <div>I'm a flexbox container!</div>
    </v-card>
    <div>
      <v-card class="mx-auto" height="100" max-width="200" color="secondary">
        <v-card-text>This card has negative top margin applied</v-card-text>
      </v-card>
      <v-card class="mt-n3 mx-auto" elevation="12" height="200" max-width="300" color="secondary">
        <v-card-text>This card has negative top margin applied</v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {};
</script>
