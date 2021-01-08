<template>
  <div class="date-picker">
    <v-menu
      v-model="menu2"
      :close-on-content-click="false"
      :nudge-right="40"
      transition="scale-transition"
      offset-y
      min-width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field hide-details v-model="dateText" readonly v-bind="attrs" v-on="on">
          <template v-if="showIcon" slot="prepend">
            <v-icon>mdi-calendar</v-icon>
          </template>
        </v-text-field>
      </template>
      <v-date-picker v-model="date" :range="range" @input="pickedDate()"></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    // Title input
    title: {
      type: String,
      default: 'Date Picker',
    },
    // Format date
    format: {
      type: String,
      default: 'MM/DD/YYYY',
    },
    // Date range
    range: {
      type: Boolean,
      default: false,
    },
    dates: {
      type: [String, Array],
      default: null,
    },
    // Show icon text field
    showIcon: {
      type: Boolean,
      default: false,
    },
    /**
     * Callback
     */
    callback: {
      type: Function,
      default(dates) {},
    },
  },
  data() {
    return {
      date: null,
      menu: false,
      modal: false,
      menu2: false,
    };
  },
  created() {
    this.date = this.dates;
  },
  methods: {
    /**
    func picked date
     */
    pickedDate() {
      this.menu2 = false;
      this.callback(this.date);
    },
  },
  computed: {
    dateText: function() {
      return this.range && this.date && Array.isArray(this.date) ? this.date.join(' ~ ') : this.date;
    },
  },
};
</script>
