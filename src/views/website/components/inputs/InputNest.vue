<template>
  <div>
    <!-- test:{{ $parent['title'] }} -->
    <label class="d-flex">{{ label }}</label>
    <!-- <v-text-field v-model="$parent['title']" id="id"></v-text-field> -->
    <v-text-field
      :type="type"
      v-if="model.length === 2"
      :error-messages="errors"
      @blur="$parent.$parent.$v[model[0]][model[1]].$touch()"
      @input="$parent.$parent.$v[model[0]][model[1]].$touch()"
      v-model="$parent.$parent[model[0]][model[1]]"
      autocomplete="off"
    ></v-text-field>
    <v-text-field
      :type="type"
      v-if="model.length === 1"
      :error-messages="errors"
      @blur="$parent.$parent.$v[model[0]].$touch()"
      v-model="$parent.$parent[model[0]]"
      @input="$parent.$parent.$v[model[0]].$touch()"
      autocomplete="off"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  // With type Parent - Child - InputNest
  props: {
    label: {
      type: String,
      default: 'Label',
    },
    type: {
      type: String,
      default: 'text',
    },
    // nest object v-model="a.b" in Parent ['a','b']
    model: {
      type: Array,
      default: () => [''],
    },
    // list validate [
    //   { type: 'phone' },
    //   { type: 'email' },
    //   { type: 'required' },
    //   { type: 'minValue', min: 3 },
    //   { type: 'maxValue', type: 10 },
    // ]
    validate: {
      type: Array,
      default: () => [],
    },
  },
  created() {
    console.log(this.$parent);
  },
  methods: {
    test() {
      console.log(this.$parent['searchString']);
    },
  },
  computed: {
    errors() {
      const errors = [];
      console.log(this.$parent.$parent.$v);
      if (this.model.length === 1) {
        if (this.validate.length > 0) {
          console.log(this.validate.length);
          if (!this.$parent.$parent.$v[this.model[0]].$dirty) return errors;
          for (let i = 0; i < this.validate.length; i++) {
            !this.$parent.$parent.$v[this.model[0]][this.validate[i].type] &&
              errors.push(this.$t(`${this.validate[i].type}`));
          }
          return errors;
        }
      }
      if (this.model.length === 2) {
        if (this.validate.length > 0) {
          console.log(this.$parent.$parent.$v[this.model[0][1]]);
          if (
            this.$parent.$parent.$v[this.model[0]][this.model[1]] !== undefined &&
            !this.$parent.$parent.$v[this.model[0]][this.model[1]].$dirty
          )
            return errors;
          for (let i = 0; i < this.validate.length; i++) {
            !this.$parent.$parent.$v[this.model[0]][this.model[1]][this.validate[i].type] &&
              errors.push(this.$t(`${this.validate[i].type}`));
          }
          return errors;
        }
      }
      return errors;
    },
  },
};
</script>
