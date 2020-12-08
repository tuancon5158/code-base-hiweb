<template>
  <div>
    <div class="test-scss">tuancon</div>
    <div class="class">tuancon</div>

    <v-row align="center" justify="space-around">
      <v-btn depressed> Normal </v-btn>
      <v-btn depressed color="primary"> Primary </v-btn>
      <v-btn depressed color="error"> Error </v-btn>
      <v-btn depressed disabled> Disabled </v-btn>
    </v-row>
    <div class="text-center">
      <v-btn
        v-if="!chip1 && !chip2 && !chip3 && !chip4"
        close
        color="primary"
        dark
        @click="(chip1 = true), (chip2 = true), (chip3 = true), (chip4 = true)"
      >
        Reset Chips
      </v-btn>

      <v-chip v-if="chip1" class="ma-2" close @click:close="chip1 = false">
        Closable
      </v-chip>

      <v-chip
        v-if="chip2"
        class="ma-2"
        close
        color="red"
        text-color="white"
        @click:close="chip2 = false"
      >
        Remove
      </v-chip>

      <v-chip
        v-if="chip3"
        class="ma-2"
        close
        color="green"
        outlined
        @click:close="chip3 = false"
      >
        Success
      </v-chip>

      <v-chip
        v-if="chip4"
        class="ma-2"
        close
        color="orange"
        label
        outlined
        @click:close="chip4 = false"
      >
        Complete
      </v-chip>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.class{
  background: $color-checkbox;
}

</style>