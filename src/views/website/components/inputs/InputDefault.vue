<template>
  <div class="form-component">
    <label class="d-flex">{{ label }}</label>
    <template v-if="typeComponent === 'input'">
      <v-text-field
        :suffix="suffix"
        :prefix="prefix"
        :type="type"
        v-if="model.length === 2"
        :error-messages="errors"
        @blur="checkValidateWithBlurInput"
        @input="checkValidateWithBlurInput"
        :hide-details="!isValidate"
        v-model="$parent[model[0]][model[1]]"
        autocomplete="off"
      ></v-text-field>

      <v-text-field
        :prefix="prefix"
        :suffix="suffix"
        :type="type"
        :hide-details="!isValidate"
        v-if="model.length === 1"
        :error-messages="errors"
        @blur="checkValidateWithBlurInput"
        v-model="$parent[model[0]]"
        @input="checkValidateWithBlurInput"
        autocomplete="off"
      ></v-text-field>
    </template>
    <template v-if="typeComponent === 'area'">
      <v-textarea
        :type="type"
        v-if="model.length === 2"
        :hide-details="!isValidate"
        :error-messages="errors"
        @blur="checkValidateWithBlurInput"
        @input="checkValidateWithBlurInput"
        v-model="$parent[model[0]][model[1]]"
        autocomplete="off"
      ></v-textarea>

      <v-textarea
        :type="type"
        v-if="model.length === 1"
        :error-messages="errors"
        :hide-details="!isValidate"
        @blur="checkValidateWithBlurInput"
        v-model="$parent[model[0]]"
        @input="checkValidateWithBlurInput"
        autocomplete="off"
      ></v-textarea>
    </template>
    <template v-if="typeComponent === 'select'">
      <v-select
        :item-text="itemText"
        :hide-details="!isValidate"
        :item-value="itemValue"
        v-if="model.length === 1"
        :error-messages="errors"
        @blur="$parent.checkValidateWithBlurInput"
        v-model="$parent.$parent[model[0]]"
        @input="$parent.checkValidateWithBlurInput"
        autocomplete="off"
        clearable
        :items="itemsSelect"
      ></v-select>
      <v-select
        :item-text="itemText"
        :item-value="itemValue"
        :hide-details="!isValidate"
        v-if="model.length === 2"
        :error-messages="errors"
        @blur="checkValidateWithBlurInput"
        @input="checkValidateWithBlurInput"
        v-model="$parent[model[0]][model[1]]"
        clearable
        :items="itemsSelect"
      ></v-select>
    </template>
  </div>
</template>

<script>
export default {
  // With type Parent - InputDefault
  props: {
    // with v-select
    suffix: {
      type: String,
      default: '',
    },
    prefix: {
      type: String,
      default: '',
    },
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
    type: {
      type: String,
      default: 'text',
    },

    // nest object v-model="a.b" in Parent ['a','b']
    model: {
      type: Array,
      default: () => [''],
    },
    //list default validate
    isValidate: {
      type: Boolean,
      default: false,
    },
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
    min: {
      type: Number,
      default: 0,
    },
    //with validate maxlength
    max: {
      type: Number,
      default: 255,
    },
    label: {
      type: String,
      default: 'label',
    },
  },
  data() {
    return {
      modelValidate: null,
    };
  },
  // created() {

  // },
  methods: {
    checkValidateWithBlurInput() {
      if (this.isValidate) {
        if (this.model.length === 2) {
          this.$parent.$v[this.model[0]][this.model[1]].$touch();
        } else {
          this.$parent.$v[this.model[0]].$touch();
        }
      } else {
        return;
      }
    },
  },
  computed: {
    errors() {
      const errors = [];
      if (this.isValidate) {
        if (this.model.length === 1) {
          console.log(this.validate.length);
          if (!this.$parent.$v[this.model[0]].$dirty) return errors;
          for (let i = 0; i < this.validate.length; i++) {
            !this.$parent.$v[this.model[0]][this.validate[i].type] && errors.push(this.$t(`${this.validate[i].type}`));
          }
          return errors;
        }
        if (this.model.length === 2) {
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
        return errors;
      }
      return errors;
    },
  },
};
</script>
