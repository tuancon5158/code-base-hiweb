<template>
  <v-col cols="12" sm="8">
    <h2 class="d-none d-sm-flex mb-3">Select a shop</h2>
    <div>
      <!-- User detail -->
      <v-card v-if="user" :ripple="false" class="portrait" @click="show">
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="4">
              <v-avatar color="primary">
                <text-avatar :text="fullName" />
              </v-avatar>
            </v-col>
            <v-col cols="7">
              <h3>{{ fullName }}</h3>
              <span>{{ user.email }}</span>
            </v-col>
            <v-col cols="1" class="d-flex align-center">
              <i style="margin-left: auto" class="fas fa-chevron-down pr-4 pointer"></i>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-menu v-model="showMenu" :position-x="x" :position-y="y" absolute offset-y>
        <v-list>
          <v-list-item>
            <v-list-item-title>
              Partner dashboard
            </v-list-item-title>
          </v-list-item>
          <v-list-item @click="logout">
            <v-list-item-title>
              Logout
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <!-- Add a new shop -->
    <div class="mt-5">
      <v-btn v-if="!showInput" width="100%" @click="showInput = !showInput" color="primary">Add a new shop</v-btn>
      <div v-else class="d-flex add-new-shop-container mt-3">
        <v-text-field
          v-model="store.name"
          :error-messages="
            invalid && !$v.store.name.required
              ? $t('Shop name is required')
              : invalid && !$v.store.name.minLength
              ? $t('Shop name must have at least ' + $v.store.name.$params.minLength.min + ' letters.')
              : invalid && !$v.store.name.maxLength
              ? $t('Shop name must have at least ' + $v.store.name.$params.maxLength.max + ' letters.')
              : invalid && !$v.store.name.alpha
              ? $t('Shop name cannot contain special characters')
              : error
              ? $t(error)
              : ''
          "
          class="mr-3"
          placeholder="Your shop name"
        ></v-text-field>
        <v-btn :loading="isLoading" @click="addStore">Save</v-btn>
      </div>
    </div>
    <!-- List store -->
    <div class="select-shop-page mt-5">
      <v-card
        v-for="(store, index) in stores"
        :key="index"
        @click="onClickShop(store)"
        class="mt-3 mx-auto px-3 py-3 d-flex align-center"
        tile
      >
        <div class="p-3">
          <p>{{ store.storeDetail.name }}</p>
          <span> {{ store.storeDetail.accountEmail }} </span>
        </div>
        <i style="margin-left: auto" class="fas fa-chevron-right pr-4 pointer"></i>
      </v-card>
    </div>
  </v-col>
</template>

<script>
import { authService } from '@/apis/auth.s';
import { userService } from '@/apis/user.s';
import { storeService } from '@/apis/store.s';
import STORAGE_NAME from '@/const/storage';
import { mapGetters } from 'vuex';
import TextAvatar from '@/components/TextAvatar';
import { required, minLength, maxLength, email, helpers } from 'vuelidate/lib/validators';
const alpha = helpers.regex('alpha', /^[a-zA-Z0-9]*$/);

export default {
  components: {
    TextAvatar,
  },
  validations: {
    store: {
      name: {
        required,
        alpha,
        minLength: minLength(4),
        maxLength: maxLength(50),
      },
    },
  },
  data() {
    return {
      type: 'password',
      isLoading: false,
      stores: [],
      showMenu: false,
      x: 0,
      y: 0,
      invalid: false,
      showInput: false,
      store: {
        name: '',
      },
      error: null,
    };
  },
  created() {
    this.getStores();
  },
  methods: {
    /*
    Func show dropdown
    */
    show(e) {
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    },
    /*
    Fnc click and redirect to admin
    */
    onClickShop(store) {
      window.localStorage.setItem(STORAGE_NAME.STORE_ID, store.id);
      this.$router.push({
        name: 'website',
        params: { domain: store.storeDetail.defaultSystemDomain },
      });
    },
    /*
    Fnc get user stores
    */
    async getStores() {
      try {
        let data = await userService.getStores();
        this.stores = data.data;
      } catch (error) {
        console.log(this.error);
        console.log(error.response);
      }
    },
    /*
    Fnc logout
    */
    logout() {
      try {
        authService.logout();
        window.localStorage.setItem(STORAGE_NAME.ACCESS_TOKEN, '');
        window.localStorage.setItem(STORAGE_NAME.REFRESH_TOKEN, '');
        window.localStorage.setItem(STORAGE_NAME.STORE_ID, '');
        this.$router.push({ path: '/auth/login' });
      } catch (error) {
        console.log(error.response);
      }
    },
    /*
    Fnc add store
    */
    async addStore() {
      this.$v.$touch();
      this.invalid = this.$v.$invalid;
      this.isLoading = true;
      if (!this.$v.$invalid) {
        try {
          let data = await userService.addStore(this.store);
          this.store.name = '';
          this.getStores();
          this.isLoading = false;
        } catch (error) {
          this.error = error.response.data.message;
          this.isLoading = false;
        }
      } else {
        this.isLoading = false;
      }
    },
  },
  computed: {
    ...mapGetters(['user']),
    fullName: function() {
      return this.user.firstName + ' ' + this.user.lastName || '';
    },
  },
};
</script>
<style lang="scss">
.show-password {
  cursor: pointer !important;
  margin-right: 5px;
  margin-top: 5px;
}
.add-new-shop-container {
  padding: 10px;
  background-color: #f8f8fc;
  border-radius: 8px;
}
.label-forgot span {
  cursor: pointer;
}
@media only screen and (max-width: 600px) {
  .login-form {
    width: 100% !important;
  }
}
</style>
