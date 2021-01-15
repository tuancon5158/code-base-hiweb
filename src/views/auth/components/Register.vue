<template>
  <v-col cols="12" sm="9">
    <h1 class="">Sign up</h1>
    <Notification v-if="errorMessage.length > 0" :messages="errorMessage" type="error" />
    <div>
      <span class="label-form"> Email </span>
      <v-text-field
        autocomplete="off"
        name="email"
        id="email"
        v-model.trim="$v.email.$model"
        :error-messages="
          invalid && !$v.email.required
            ? $t('Field is required')
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
    <div>
      <span class="label-form"> Password </span>
      <v-text-field
        :type="type"
        autocomplete="off"
        name="password"
        id="password"
        v-model.trim="$v.password.$model"
        :error-messages="
          invalid && !$v.password.required
            ? $t('Password is required')
            : invalid && !$v.password.minLength
            ? $t('Password must have at least ' + $v.password.$params.minLength.min + ' letters.')
            : invalid && !$v.password.maxLength
            ? $t('Password must have at least ' + $v.password.$params.maxLength.max + ' letters.')
            : ''
        "
      >
        <template slot="append">
          <i
            @click="type = type === 'text' ? 'password' : 'text'"
            v-show="type === 'text'"
            class="show-password far fa-eye-slash"
          ></i>
          <i
            v-show="type === 'password'"
            @click="type = type === 'text' ? 'password' : 'text'"
            class="show-password far fa-eye"
          ></i>
        </template>
      </v-text-field>
    </div>
    <div>
      <span class="label-form"> Shope name </span>
      <v-text-field
        autocomplete="off"
        name="shop_name"
        id="shop_name"
        v-model.trim="$v.shopName.$model"
        :error-messages="
          invalid && !$v.shopName.required
            ? $t('Shop name is required')
            : invalid && !$v.shopName.minLength
            ? $t('Shop name must have at least ' + $v.shopName.$params.minLength.min + ' letters.')
            : invalid && !$v.shopName.maxLength
            ? $t('Shop name must have at least ' + $v.shopName.$params.maxLength.max + ' letters.')
            : invalid && !$v.shopName.alpha
            ? $t('Shop name cannot contain special characters')
            : ''
        "
      ></v-text-field>
    </div>

    <div class="mt-5">
      <v-btn @click="onSignup" :loading="isLoading" width="100%" color="primary">Sign up</v-btn>
    </div>
    <div class="label-forgot mt-5">
      <span @click="$router.push({ path: '/auth/login' })">Already have an account? Sign in</span>
    </div>
  </v-col>
</template>

<script>
import { required, minLength, maxLength, email, helpers } from 'vuelidate/lib/validators';
const alpha = helpers.regex('alpha', /^[a-zA-Z0-9]*$/);
import { authService } from '@/apis/auth.s';
import STORAGE_NAME from '@/const/storage';
import Notification from '@/components/Notification';
import { mapMutations } from 'vuex';

export default {
  components: {
    Notification,
  },
  data() {
    return {
      type: 'password',
      isLoading: false,
      email: '',
      password: '',
      shopName: '',
      invalid: false,
      errorMessage: [],
    };
  },
  validations: {
    email: {
      required,
      email,
      minLength: minLength(4),
      maxLength: maxLength(50),
    },
    password: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(50),
    },
    shopName: {
      required,
      alpha,
      minLength: minLength(4),
      maxLength: maxLength(50),
    },
  },
  methods: {
    /*
    Fnc Signup
    */
    async onSignup() {
      this.isLoading = true;
      this.$v.$touch();
      this.invalid = this.$v.$invalid;
      this.errorMessage = [];
      if (!this.$v.$invalid) {
        try {
          let data = await authService.register(this.email, this.password, this.shopName);
          window.localStorage.setItem(STORAGE_NAME.ACCESS_TOKEN, data.data.accessToken || '');
          window.localStorage.setItem(STORAGE_NAME.REFRESH_TOKEN, data.data.refreshToken || '');
          window.localStorage.setItem(STORAGE_NAME.STORE_ID, data.data.storeId || '');
          this.$router.push({ name: 'auth/survey' });
          this.isLoading = false;
        } catch (error) {
          this.errorMessage = error.response.data.message || [];
          this.isLoading = false;
        }
      } else {
        this.isLoading = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 3.2rem;
}
.show-password {
  cursor: pointer !important;
  margin-right: 5px;
  margin-top: 5px;
}
.label-forgot span {
  cursor: pointer;
}
</style>
