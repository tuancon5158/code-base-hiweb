<template>
  <v-combobox
    v-model.trim="$parent[model]"
    hide-selected
    :hint="hint"
    :error-messages="error"
    multiple
    persistent-hint
    small-chips
    append-icon=""
  ></v-combobox>
</template>

<script>
export default {
  props: {
    model: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputVal: {
      get() {
        return this.$parent[this.model];
      },
      set(val) {
        this.$parent[this.model] = val;
      },
    },
  },
};
</script>
