<template>
  <v-col cols="12" sm="9">
    <h1 class="">Sign in</h1>
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
    <div>
      <span class="label-form"> Password </span>
      <v-text-field
        :type="type"
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
        autocomplete="off"
        name="password"
        id="password"
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
    <div class="label-forgot">
      <span @click="$router.push({ path: '/auth/forgot' })">Forgot password?</span>
    </div>
    <div class="mt-5">
      <v-btn @click="onLogin" :loading="isLoading" width="100%" color="primary">Sign in</v-btn>
    </div>
    <div class="label-forgot mt-5">
      Don't have an account? <span @click="$router.push({ path: '/auth/register' })">Sign up.</span>
    </div>
  </v-col>
</template>

<script>
import STORAGE_NAME from '@/const/storage';
import { authService } from '@/apis/auth.s';
import Notification from '@/components/Notification';
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators';

export default {
  components: {
    Notification,
  },
  data() {
    return {
      type: 'password',
      email: null,
      password: null,
      isLoading: false,
      invalid: false,
      errorMessage: [],
    };
  },
  methods: {
    /*
    Fnc login
    */
    async onLogin() {
      this.isLoading = true;
      this.$v.$touch();
      this.invalid = this.$v.$invalid;
      this.errorMessage = [];
      if (!this.$v.$invalid) {
        try {
          let data = await authService.login(this.email, this.password);
          window.localStorage.setItem(STORAGE_NAME.ACCESS_TOKEN, data.data.accessToken || '');
          window.localStorage.setItem(STORAGE_NAME.REFRESH_TOKEN, data.data.refreshToken || '');
          window.localStorage.setItem(STORAGE_NAME.STORE_ID, data.data.storeId || '');
          this.$store.commit('setAuthCheck', true);
          this.$router.push('/auth/shop');
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
.label-forgot {
  font-size: 14px;
  span {
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
