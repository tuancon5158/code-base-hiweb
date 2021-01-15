<template>
  <div class="user-information">
    <h3 class="text-center">Let's get to know each other</h3>
    <div class="form-information mt-3">
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <span class=""> Firt Name </span>
          <v-text-field
            autocomplete="off"
            name="first_name"
            id="first_name"
            v-model.trim="$v.info.firstName.$model"
            :error-messages="
              invalid && !$v.info.firstName.required
                ? $t('First name is required')
                : invalid && !$v.info.firstName.minLength
                ? $t('First name must have at least ' + $v.info.firstName.$params.minLength.min + ' letters.')
                : invalid && !$v.info.firstName.maxLength
                ? $t('First name must have at least ' + $v.info.firstName.$params.maxLength.max + ' letters.')
                : ''
            "
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class=""> Last Name </span>
          <v-text-field
            autocomplete="off"
            name="last_name"
            id="last_name"
            v-model.trim="$v.info.lastName.$model"
            :error-messages="
              invalid && !$v.info.lastName.required
                ? $t('Last name is required')
                : invalid && !$v.info.lastName.minLength
                ? $t('Last name must have at least ' + $v.info.lastName.$params.minLength.min + ' letters.')
                : invalid && !$v.info.lastName.maxLength
                ? $t('Last name must have at least ' + $v.info.lastName.$params.maxLength.max + ' letters.')
                : ''
            "
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class=""> Store country </span>
          <v-combobox
            auto-select-first
            :items="countries"
            v-model="info.country"
            :error-messages="invalid && !$v.info.country.required ? $t('Store country is required') : ''"
            item-text="name"
          ></v-combobox>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class=""> Your personal location </span>
          <v-combobox
            auto-select-first
            :items="countries"
            v-model="info.location"
            :error-messages="invalid && !$v.info.location.required ? $t('Location is required') : ''"
            item-text="name"
            @change="selectedCountry"
          ></v-combobox>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class=""> How should we contact you? </span>
          <v-row>
            <v-col class="py-0 m-0" cols="12" md="4" sm="4">
              <v-combobox
                auto-select-first
                :items="countries"
                v-model="info.phoneNumberPrefix"
                :error-messages="
                  invalid && !$v.info.phoneNumberPrefix.required ? $t('Phone number prefix is required') : ''
                "
                item-text="calling_code"
              ></v-combobox>
            </v-col>
            <v-col class="py-0 m-0" cols="12" md="8" sm="8">
              <v-text-field
                type="number"
                v-model="info.number"
                placeholder="98 4533888"
                :error-messages="
                  invalid && !$v.info.number.required
                    ? $t('Phone number is required')
                    : invalid && !$v.info.number.minLength
                    ? $t('Phone number must have at least ' + $v.info.number.$params.minLength.min + ' letters.')
                    : invalid && !$v.info.number.maxLength
                    ? $t('Phone number must have at least ' + $v.info.number.$params.maxLength.max + ' letters.')
                    : ''
                "
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class=""> Your personal social profile (optional) </span>
          <v-text-field v-model="info.profile" placeholder="facebook.com/myusername"></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters align="end" align-content="end" justify="end">
        <v-btn @click="next" color="primary">
          Next
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, email, helpers, decimal } from 'vuelidate/lib/validators';
import { authService } from '@/apis/auth.s';
import { storeService } from '@/apis/store.s';

export default {
  props: {
    /**
     * Callback
     */
    callback: {
      type: Function,
      default(data) {},
    },
    step: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      info: {
        phoneNumberPrefix: '84',
        firstName: '',
        lastName: '',
        number: '',
        country: {
          calling_code: '84',
          code: 'VN',
          id: 237,
          name: 'Vietnam',
          province_required: false,
          provinces: null,
        },
        location: {
          calling_code: '84',
          code: 'VN',
          id: 237,
          name: 'Vietnam',
          province_required: false,
          provinces: null,
        },
        profile: '',
      },
      countries: [],
      invalid: false,
      isLoading: false,
    };
  },
  created() {
    this.getCountries();
  },
  validations: {
    info: {
      firstName: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      lastName: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(50),
      },
      country: {
        required,
      },
      phoneNumberPrefix: {
        required,
      },
      location: {
        required,
      },
      number: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(15),
      },
    },
  },
  methods: {
    next() {
      this.isLoading = true;
      let data = {};
      this.$v.$touch();
      this.invalid = this.$v.$invalid;
      if (!this.invalid) {
        this.callback(this.info);
      }
      this.isLoading = false;
    },
    selectedCountry() {
      this.info.phoneNumberPrefix = this.info.location.calling_code || '';
    },
    async getCountries() {
      try {
        let data = await storeService.getCountries();
        this.countries = data.data;
      } catch (error) {
        console.log(error.response);
      }
    },
  },
  computed: {
    phone: function() {
      return this.info.phoneNumberPrefix + this.info.number;
    },
  },
  watch: {
    location() {
      this.info.phoneNumberPrefix = this.info.location.calling_code || '';
    },
  },
};
</script>
