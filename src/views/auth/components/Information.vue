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
            v-model.trim="$v.firstName.$model"
            :error-messages="
              invalid && !$v.firstName.required
                ? $t('First name is required')
                : invalid && !$v.firstName.minLength
                ? $t('First name must have at least ' + $v.firstName.$params.minLength.min + ' letters.')
                : invalid && !$v.firstName.maxLength
                ? $t('First name must have at least ' + $v.firstName.$params.maxLength.max + ' letters.')
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
            v-model.trim="$v.lastName.$model"
            :error-messages="
              invalid && !$v.lastName.required
                ? $t('Last name is required')
                : invalid && !$v.lastName.minLength
                ? $t('Last name must have at least ' + $v.lastName.$params.minLength.min + ' letters.')
                : invalid && !$v.lastName.maxLength
                ? $t('Last name must have at least ' + $v.lastName.$params.maxLength.max + ' letters.')
                : ''
            "
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class=""> Store country </span>
          <v-combobox
            auto-select-first
            :items="countries"
            v-model="country"
            :error-messages="invalid && !$v.country.required ? $t('Store country is required') : ''"
            item-text="name"
          ></v-combobox>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class=""> Your personal location </span>
          <v-combobox
            auto-select-first
            :items="countries"
            v-model="location"
            :error-messages="invalid && !$v.location.required ? $t('Location is required') : ''"
            item-text="name"
          ></v-combobox>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class=""> How should we contact you? </span>
          <v-row>
            <v-col class="py-0 m-0" cols="12" md="4" sm="4">
              <v-combobox
                auto-select-first
                :items="countries"
                v-model="phoneNumberPrefix"
                :error-messages="invalid && !$v.phoneNumberPrefix.required ? $t('Phone number prefix is required') : ''"
                item-text="dial_code"
              ></v-combobox>
            </v-col>
            <v-col class="py-0 m-0" cols="12" md="8" sm="8">
              <v-text-field
                type="number"
                v-model="number"
                placeholder="98 4533888"
                :error-messages="
                  invalid && !$v.number.required
                    ? $t('Phone number is required')
                    : invalid && !$v.number.minLength
                    ? $t('Phone number must have at least ' + $v.number.$params.minLength.min + ' letters.')
                    : invalid && !$v.number.maxLength
                    ? $t('Phone number must have at least ' + $v.number.$params.maxLength.max + ' letters.')
                    : ''
                "
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6" sm="12">
          <span class=""> Your personal social profile (optional) </span>
          <v-text-field
            v-model="profile"
            placeholder="facebook.com/myusername"
            :error-messages="invalid && !$v.profile.required ? $t('Your profile is required') : ''"
          ></v-text-field>
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
import country from '@/mixins/country';

export default {
  mixins: [country],
  props: {
    /**
     * Callback
     */
    callback: {
      type: Function,
      default(data) {},
    },
  },
  data() {
    return {
      phoneNumberPrefix: '',
      firstName: '',
      lastName: '',
      number: '',
      country: '',
      location: '',
      profile: '',
      invalid: false,
      isLoading: false,
    };
  },
  created() {},
  validations: {
    firstName: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(50),
    },
    lastName: {
      required,
      minLength: minLength(3),
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
    profile: {
      required,
    },
    number: {
      required,
      minLength: minLength(9),
      maxLength: maxLength(9),
    },
  },
  methods: {
    next() {
      this.isLoading = true;
      let data = {};
      this.$v.$touch();
      this.invalid = this.$v.$invalid;
      if (!this.invalid) {
        this.callback(data);
      }
      this.isLoading = false;
    },
  },
  computed: {
    phone: function() {
      return this.phoneNumberPrefix + this.number;
    },
  },
  watch: {
    location() {
      this.phoneNumberPrefix = this.location.dial_code || '';
    },
  },
};
</script>
