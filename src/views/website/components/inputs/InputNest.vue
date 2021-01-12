<template>
  <div>
    <label class="d-flex">{{ label }}</label>
    <template v-if="typeComponent === 'input'">
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
    </template>
    <template v-if="typeComponent === 'area'">
      <v-textarea
        :type="type"
        v-if="model.length === 2"
        :error-messages="errors"
        @blur="$parent.$parent.$v[model[0]][model[1]].$touch()"
        @input="$parent.$parent.$v[model[0]][model[1]].$touch()"
        v-model="$parent.$parent[model[0]][model[1]]"
        autocomplete="off"
      ></v-textarea>
      <v-textarea
        :type="type"
        v-if="model.length === 1"
        :error-messages="errors"
        @blur="$parent.$parent.$v[model[0]].$touch()"
        v-model="$parent.$parent[model[0]]"
        @input="$parent.$parent.$v[model[0]].$touch()"
        autocomplete="off"
      ></v-textarea>
    </template>
    <template v-if="typeComponent === 'select'">
      <v-select
        :item-text="itemText"
        :item-value="itemValue"
        v-if="model.length === 1"
        :error-messages="errors"
        @blur="$parent.$parent.$v[model[0]].$touch()"
        v-model="$parent.$parent[model[0]]"
        @input="$parent.$parent.$v[model[0]].$touch()"
        autocomplete="off"
        clearable
        :items="itemsSelect"
      ></v-select>
      <v-select
        :item-text="itemText"
        :item-value="itemValue"
        v-if="model.length === 2"
        :error-messages="errors"
        @blur="$parent.$parent.$v[model[0]][model[1]].$touch()"
        @input="$parent.$parent.$v[model[0]][model[1]].$touch()"
        v-model="$parent.$parent[model[0]][model[1]]"
        clearable
        :items="itemsSelect"
      ></v-select>
    </template>
  </div>
</template>

<script>
export default {
  // With type Parent - Child - InputNest

  props: {
    // with v-select
    itemText: {
      type: String,
      default: 'name',
    },
    itemValue: {
      type: String,
      default: 'id',
    },
    itemsSelect: {
      type: Array,
      default: () => [{ name: 1, id: 1 }],
    },

    // type : input , area, select
    typeComponent: {
      type: String,
      default: 'input',
    },
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
    //   { type: 'maxValue', max: 10 },
    // ]
    validate: {
      type: Array,
      default: () => [
        { type: 'phone' },
        { type: 'email' },
        { type: 'required' },
        { type: 'minLength', min: 0 },
        { type: 'maxLength', max: 255 },
      ],
    },
  },
  created() {
    console.log(this.$parent);
  },
  methods: {},
  computed: {
    errors() {
      const errors = [];
      if (this.model.length === 1) {
        if (this.validate.length > 0) {
          if (!this.$parent.$parent.$v[this.model[0]].$dirty) return errors;
          for (let i = 0; i < this.validate.length; i++) {
            this.$parent.$parent.$v[this.model[0]][this.validate[i].type] !== undefined &&
              !this.$parent.$parent.$v[this.model[0]][this.validate[i].type] &&
              errors.push(this.$t(`${this.validate[i].type}`));
          }
          return errors;
        }
      }
      if (this.model.length === 2) {
        if (this.validate.length > 0) {
          if (
            this.$parent.$parent.$v[this.model[0]][this.model[1]] !== undefined &&
            !this.$parent.$parent.$v[this.model[0]][this.model[1]].$dirty
          )
            return errors;
          for (let i = 0; i < this.validate.length; i++) {
            this.$parent.$parent.$v[this.model[0]][this.model[1]][this.validate[i].type] !== undefined &&
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
