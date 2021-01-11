<template>
  <div class="date-picker" :class="{ 'pl-3 pr-3': !noPadding }" :style="'width:' + (width ? width : '250px')">
    <date-range-picker
      ref="picker"
      :opens="opens"
      :locale-data="{ firstDay: 1, format: 'DD-MM-YYYY HH:mm:ss' }"
      :minDate="minDate"
      :maxDate="maxDate"
      :singleDatePicker="singleDatePicker"
      :timePicker="timePicker"
      :timePicker24Hour="timePicker24Hour"
      :showWeekNumbers="showWeekNumbers"
      :showDropdowns="showDropdowns"
      :autoApply="autoApply !== undefined ? autoApply : true"
      :ranges="rangers"
      v-model="dateRange"
      @update="updateValue"
      :linkedCalendars="linkedCalendars"
    >
      <template v-slot:input="picker" style="min-width: 320px">
        <span v-if="picker.startDate">
          <span v-if="!timePicker">{{ moment(picker.startDate).format('YYYY/MM/DD') }}</span>
          <span v-else>{{ moment(picker.startDate).format('YYYY/MM/DD h:mm:ss') }}</span>
        </span>
        <span v-if="picker.startDate && picker.endDate && !singleDatePicker"> - </span>
        <span v-if="picker.endDate && !singleDatePicker">
          <span v-if="!timePicker">{{ moment(picker.endDate).format('YYYY/MM/DD') }}</span>
          <span v-else>{{ moment(picker.endDate).format('YYYY/MM/DD h:mm:ss') }}</span>
        </span>

        <span v-if="!picker.startDate && !picker.endDate" class="text-muted">{{
          placeholder ? placeholder : 'Select date range'
        }}</span>
      </template>
    </date-range-picker>
    <!--
      Example
       <DatePicker
      :no-padding="true"
      :single-date-picker="true"
      :rangers="false"
      @updateValue="setDateConditionValue"
      :startDate="'2021-01-09'"
      placeholder="Please select"
    /> -->
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker';

import moment from 'moment';

import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';

export default {
  props: [
    'placeholder',
    'width',
    'opens',
    'minDate',
    'maxDate',
    'singleDatePicker',
    'timePicker',
    'timePicker24Hour',
    'showWeekNumbers',
    'showDropdowns',
    'autoApply',
    'linkedCalendars',
    'noPadding',
    'startDate',
    'endDate',
    'rangers',
  ],

  components: { DateRangePicker },

  data() {
    return {
      moment,

      dateRange: {
        startDate: null,
        endDate: null,
      },
    };
  },

  created() {
    if (this.startDate) {
      this.dateRange.startDate = this.startDate;
    }

    if (this.endDate) {
      this.dateRange.endDate = this.endDate;
    }
  },

  methods: {
    updateValue(value) {
      this.$emit('updateValue', value);
    },
  },

  watch: {
    startDate: function(date) {
      this.dateRange.startDate = date;
    },

    endDate: function(date) {
      this.dateRange.endDate = date;
    },
  },
};
</script>

<style type="text/css">
.date-picker {
  min-width: 200px;
}
.date-picker .form-control {
  line-height: 28px;
}
.date-picker > div {
  width: 100%;
}
.date-picker .daterangepicker {
  top: 50px;
  z-index: 10000;
}
.date-picker .daterangepicker .applyBtn {
  background: #2c7be5;
  border-color: #2c7be5;
}
.date-picker .daterangepicker .applyBtn:hover {
  background: #1a68d1;
  border-color: #1a68d1;
}
</style>
