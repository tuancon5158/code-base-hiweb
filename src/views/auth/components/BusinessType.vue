<template>
  <div class="business__type">
    <h2 class="text-center">What is your business model?</h2>
    <v-row class="mt-3">
      <v-col v-for="(type, index) in types" :key="index" cols="6" md="4">
        <v-hover v-slot="{ hover }" open-delay="200">
          <v-card @click="chooseType(type)" :class="{ 'on-hover': hover }">
            <v-card-text>
              {{ type.title }}
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <div>
      <v-btn @click="$parent.$parent.$parent.e1 = 1">Back</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    step: {
      type: String,
      default: '',
    },
    /**
     * Callback
     */
    callback: {
      type: Function,
      default(data) {},
    },
  },
  data() {
    return {
      types: [
        { title: 'Dropshipping', code: 'drop-shipping' },
        { title: 'White Label', code: 'white-label' },
        { title: 'Others', code: 'others' },
      ],
    };
  },
  created() {},
  methods: {
    chooseType(type) {
      this.callback(type);
    },
  },
};
</script>
<style lang="scss">
.business__type {
  .on-hover {
    background-color: $main-color !important;
    .v-card__text {
      color: white !important;
    }
  }
}
</style>
