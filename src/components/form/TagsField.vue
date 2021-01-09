<template>
  <v-combobox
    v-model.trim="$parent[model]"
    hide-selected
    :hint="hint"
    :error-messages="error"
    multiple
    persistent-hint
    small-chips
    :placeholder="placeholder"
    hide-details
    append-icon=""
  >
    <template v-slot:selection="data">
      <v-chip
        close
        :key="JSON.stringify(data.item)"
        v-bind="data.attrs"
        :input-value="data.selected"
        :disabled="data.disabled"
        @click:close="data.parent.selectItem(data.item)"
      >
        <!-- <v-avatar class="accent white--text" left v-text="data.item.slice(0, 1).toUpperCase()"></v-avatar> -->
        {{ data.item }}
      </v-chip>
    </template>
  </v-combobox>
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
    placeholder: {
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
