<template>
  <div class="text-center modal">
    <v-dialog v-model="$parent[model]" :transition="transition" :width="width" :max-width="maxWidth">
      <v-card relative>
        <!-- Title -->
        <v-card-title class="headline ">
          {{ title }}
        </v-card-title>

        <!-- Close icon -->
        <div class="close-icon" @click="$parent[model] = false">
          <v-icon>fas fa-times</v-icon>
        </div>
        <v-divider class="mb-3"></v-divider>
        <!-- Content -->
        <v-card-text>
          <slot name="content"></slot>
        </v-card-text>

        <v-divider></v-divider>

        <!-- Footer -->
        <v-card-actions v-if="showFooter">
          <v-spacer></v-spacer>
          <v-btn color="" text @click="$parent[model] = false">
            Close
          </v-btn>
          <v-btn color="primary" text @click="submit">
            {{ titleButton }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    /*
     String props model
    */
    model: {
      type: String,
      default: '',
    },
    /*
     Width dialog
    */
    width: {
      type: String,
      default: '500',
    },
    /*
     Max width dialog
    */
    maxWidth: {
      type: String,
      default: '',
    },
    /*
     transition:
      fab-transition,
      fade-transition,
      expand-transition,
      scale-transition,
      scroll-x-transition,
      scroll-x-reverse-transition,
      scroll-y-transition,
      scroll-y-reverse-transition,
      slide-x-transition,
      slide-x-reverse-transition,
      slide-y-transition,
      slide-y-reverse-transition,
    */
    transition: {
      type: String,
      default: 'scale-transition',
    },
    /*
     Show Footer
    */
    showFooter: {
      type: Boolean,
      default: true,
    },
    /*
     Title dialog
    */
    title: {
      type: String,
      default: '',
    },
    /*
     Title submit button
    */
    titleButton: {
      type: String,
      default: 'OK',
    },
    /**
     * Callback
     */
    callback: {
      type: Function,
      default(element) {},
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    /*
     fnc submit and close
    */
    submit() {
      this.callback(this.$el);
    },
  },
};
</script>

<style lang="scss">
.close-icon {
  position: absolute;
  top: 16px;
  right: 10px;
  cursor: pointer;
}
</style>
