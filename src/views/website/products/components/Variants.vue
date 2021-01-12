<template>
  <div class="pa-2   form-component">
    <div class="d-flex justify-space-between  align-center">
      <label>Variants</label>
      <div @click="isShowAddVariants = !isShowAddVariants">
        <a class="link-add"> Add variant</a>
      </div>
    </div>
    <div>
      <span>Add variants if this product comes in multiple versions, like different sizes or colors.</span>
    </div>
    <transition name="fade">
      <v-row no-gutters v-if="isShowAddVariants" class="my-3">
        <v-col cols="12">
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12" class="mt-4">
          <v-row class="d-flex align-center">
            <v-col cols="3"><label for="">Option name </label></v-col>
            <v-col cols="6"> <label for="">Option values </label> </v-col>
          </v-row>
          <v-row v-for="(option, index) in options" :key="index" gutters class="d-flex align-center">
            <v-col cols="3"
              ><v-text-field v-model="options[index].name" hide-details="" aria-autocomplete="off"></v-text-field
            ></v-col>
            <v-col cols="6">
              <v-combobox
                v-model.trim="options[index].values"
                hide-selected
                multiple
                persistent-hint
                small-chips
                placeholder="Separate options with comma"
                hide-details
                append-icon=""
              >
                <template v-slot:selection="data">
                  <v-chip
                    close
                    :key="data.item"
                    :disabled="data.disabled"
                    @click:close="data.parent.selectItem(data.item)"
                  >
                    {{ data.item }}
                  </v-chip>
                </template>
              </v-combobox>
            </v-col>
            <i v-if="options.length > 1" @click="removeOption(index)" class="pointer far fa-trash-alt"></i>
          </v-row>
          <v-data-table
            :headers="[{ text: 'Variant' }, { text: 'Price' }, { text: 'SKU' }, { text: 'Barcode' }]"
            :items="listVariants"
            item-key="name"
            show-select
            hide-default-footer
            single-select
          >
            <template v-slot:body="{ items }">
              <tbody>
                <tr v-for="item in items" :key="item.id">
                  <td><v-checkbox></v-checkbox></td>

                  <td>{{ item.name }}</td>
                  <td><v-text-field name="name" id="id"></v-text-field></td>

                  <td><v-text-field name="name" id="id"></v-text-field></td>

                  <td><v-text-field name="name" id="id"></v-text-field></td>
                </tr>
              </tbody>
            </template>
          </v-data-table>
          <v-row no-gutters class="my-2">
            <v-btn outlined color="primary" v-if="options.length < 3" @click="addOption">Add another option</v-btn>
          </v-row>
          <!-- <v-btn @click="getListVariant" color="success">actions test</v-btn> -->
        </v-col>
      </v-row>
    </transition>
  </div>
</template>

<script>
import slugify from '@/helpers/slugify';

export default {
  data() {
    return {
      isShowAddVariants: false,
      text: '',
      listVariants: [],
      variants: [],
    };
  },
  computed: {
    options: {
      set: function(options) {
        this.$parent.options = options;
      },

      get: function() {
        return this.$parent.options;
      },
    },
  },
  watch: {
    options: {
      handler: function() {
        this.getListVariant();
      },
      deep: true,
    },
  },
  methods: {
    /**
     * Add option
     */
    addOption(name) {
      this.options.push({
        name: typeof name === 'string' ? name : '',
        values: [],
      });
    },
    makeVariantId(variant) {
      let separator = '-variantidseparator-';
      return slugify((variant.option1 || separator) + (variant.option2 || separator) + (variant.option3 || separator));
    },
    getListVariant() {
      // Reset product options
      this.$parent.attributes.option1 = null;
      this.$parent.attributes.option2 = null;
      this.$parent.attributes.option3 = null;

      // Set product options
      this.options.forEach((option, index) => {
        this.$parent.attributes['option' + (index + 1)] = option.name;
      });

      // Variant data
      let variantIds = [];

      let getOptionValues = index => {
        // No option, no name or no values
        if (
          typeof this.options[index] === 'undefined' ||
          !this.options[index].name ||
          !this.options[index].values ||
          !this.options[index].values.length
        ) {
          return [];
        }

        return this.options[index].values;
      };

      // Option values groupped
      console.log(getOptionValues(0), getOptionValues(1), getOptionValues(2));
      let optionValues = [getOptionValues(0), getOptionValues(1), getOptionValues(2)];
      let optionValuesLength = optionValues.filter(item => item.length > 0).length;
      // Variant data generator
      let variant = {
        name: null,
        price: null,
        darcode: null,
        sku: null,
      };
      function getVariantNest(length) {
        for (let i = 0; i < optionValues[length].length; i++) {
          if (length < optionValues) {
            return optionValues[length][i].name;
          }
          getVariantNest(length - 1);
        }
      }
      this.listVariants = [];
      let generate = () => {
        for (let i = 0; i < optionValues[0].length; i++) {
          console.log(optionValuesLength, 'optionValuesLength');
          if (optionValuesLength === 1) {
            this.listVariants.push({
              name: `${optionValues[0][i]}
            `,
            });
          }
          if (optionValuesLength === 2) {
            for (let j = 0; j < optionValues[1].length; j++) {
              this.listVariants.push({ name: `${optionValues[0][i]}/${optionValues[1][j]}` });
            }
          }
          if (optionValuesLength === 3) {
            for (let j = 0; j < optionValues[1].length; j++) {
              for (let k = 0; k < optionValues[2].length; k++) {
                this.listVariants.push({ name: `${optionValues[0][i]}/${optionValues[1][j]}/${optionValues[2][k]}` });
              }
            }
          }
        }
      };
      // Generate
      generate(0);
      console.log(this.listVariants, 'this.variants');

      // Remove invalid variants
      // this.variants = this.variants.filter(variant => {
      //   return variantIds.indexOf(this.makeVariantId(variant)) > -1;
      // });

      // Tooltip
    },
    removeOption(index) {
      this.options.splice(index, 1);
    },
  },
};
</script>
<style lang=""></style>
