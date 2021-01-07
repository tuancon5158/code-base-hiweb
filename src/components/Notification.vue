<template>
  <v-alert v-show="show" text transition="slide-x-transition" border="left" dense :type="type">
    <ul>
      <li v-for="(message, key) in messages" :key="key">{{ message }}</li>
    </ul>
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
    messages: {
      type: Array,
      default: null,
    },
    // times
    times: {
      type: Number,
      default: 10000000,
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
