<template>
  <v-col cols="12" sm="9">
    <h2 class="">Forgot your password?</h2>
    <h4>We'll email your instructions on how to reset it</h4>
    <div class="mt-6">
      <span class="label-form"> Email </span>
      <v-text-field
        placeholder="example@gmail.com"
        autocomplete="off"
        name="email"
        id="email"
        v-model.trim="$v.email.$model"
        :error-messages="
          invalid && !$v.email.required
            ? $t('Email is required')
            : invalid && !$v.email.email
            ? $t('Invalid Email')
            : invalid && !$v.email.minLength
            ? $t('Email must have at least ' + $v.email.$params.minLength.min + ' letters.')
            : invalid && !$v.email.maxLength
            ? $t('Email must have at least ' + $v.email.$params.maxLength.max + ' letters.')
            : ''
        "
      ></v-text-field>
    </div>

    <div class="mb-5">
      <v-btn @click="onForgot" :loading="isLoading" width="100%" color="primary">Sign in</v-btn>
    </div>
    <div class="label-forgot">
      <span @click="$router.push({ path: '/auth/login' })">Return to Sign in?</span>
    </div>
  </v-col>
</template>

<script>
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators';

export default {
  data() {
    return {
      isLoading: false,
      email: '',
      invalid: false,
    };
  },
  validations: {
    email: {
      required,
      email,
      minLength: minLength(4),
      maxLength: maxLength(50),
    },
  },
  methods: {
    onForgot() {
      this.isLoading = true;
      this.$v.$touch();
      this.invalid = this.$v.$invalid;
      if (!this.$v.$invalid) {
        console.log('Send email');
      }
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 2.2rem;
}
h4 {
  font-size: 1rem;
  color: #82869e !important;
}
</style>
