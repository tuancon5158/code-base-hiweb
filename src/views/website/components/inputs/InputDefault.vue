<template>
  <div class="form-component">
    <!-- test:{{ $parent['title'] }} -->
    <label class="d-flex">{{ 'lable' }}</label>
    <!-- <v-text-field v-model="$parent['title']" id="id"></v-text-field> -->
    <v-text-field
      :type="type"
      v-if="model.length === 2"
      :error-messages="errors"
      @blur="$parent.$v[model[0]][model[1]].$touch()"
      @input="$parent.$v[model[0]][model[1]].$touch()"
      v-model="$parent[model[0]][model[1]]"
      autocomplete="off"
    ></v-text-field>
    <v-text-field
      :type="type"
      v-if="model.length === 1"
      :error-messages="errors"
      @blur="$parent.$v[model[0]].$touch()"
      v-model="$parent[model[0]]"
      @input="$parent.$v[model[0]].$touch()"
      autocomplete="off"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  // With type Parent - InputDefault
  props: {
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
  created() {},
  methods: {},
  computed: {
    errors() {
      const errors = [];
      if (this.model.length === 1) {
        if (this.validate.length > 0) {
          console.log(this.validate.length);
          if (!this.$parent.$v[this.model[0]].$dirty) return errors;
          for (let i = 0; i < this.validate.length; i++) {
            !this.$parent.$v[this.model[0]][this.validate[i].type] && errors.push(this.$t(`${this.validate[i].type}`));
          }
          return errors;
        }
      }
      if (this.model.length === 2) {
        if (this.validate.length > 0) {
          console.log(this.$parent.$v[this.model[0][1]]);
          if (
            this.$parent.$v[this.model[0]][this.model[1]] !== undefined &&
            !this.$parent.$v[this.model[0]][this.model[1]].$dirty
          )
            return errors;
          for (let i = 0; i < this.validate.length; i++) {
            !this.$parent.$v[this.model[0]][this.model[1]][this.validate[i].type] &&
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
