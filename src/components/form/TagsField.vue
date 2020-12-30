<template>
  <v-container fluid>
    <v-combobox
      v-model="$parent[model]"
      hide-selected
      hint="Maximum of 5 tags"
      multiple
      persistent-hint
      small-chips
      @input="inputChange"
    >
    </v-combobox>
  </v-container>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

export default {
  props: {
    model: {
      type: String,
      default: '',
    },
  },
  methods: {
    inputChange() {
      console.log(this.$v);
    },
  },
  validations: {
    model: {
      required,
    },
  },
};
</script>
