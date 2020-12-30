<template>
  <v-alert v-show="show" text transition="slide-x-transition" border="left" dense :type="type">
    {{ message }}
  </v-alert>
</template>

<script>
export default {
  props: {
    /*
    type of alert: info, success, warning, error
    */
    type: {
      type: String,
      default: 'info',
    },
    // Message
    message: {
      type: String,
      default: 'Message',
    },
    // times
    times: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      show: true,
    };
  },
  created() {
    var vm = this;
    setTimeout(function() {
      vm.hide();
    }, vm.times);
  },
  methods: {
    /*
    Hide alert
    */
    hide() {
      this.show = false;
    },
  },
};
</script>
