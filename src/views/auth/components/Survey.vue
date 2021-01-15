<template>
  <div class="survey">
    <v-container>
      <v-row container justify="center">
        <v-col class="content">
          <v-stepper v-model="e1" alt-labels>
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">
                Add your contact
              </v-stepper-step>

              <v-divider :class="e1 > 1 ? 'complete' : ''"></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">
                Choose your business type
              </v-stepper-step>

              <v-divider :class="e1 > 2 ? 'complete' : ''"></v-divider>

              <v-stepper-step :complete="e1 > 3" step="3">
                Choose your product category
              </v-stepper-step>

              <v-divider :class="e1 > 3 ? 'complete' : ''"></v-divider>

              <v-stepper-step :complete="e1 > 4" step="4">
                Customize your store
              </v-stepper-step>

              <v-divider :class="e1 > 4 ? 'complete' : ''"></v-divider>

              <v-stepper-step step="5">
                Complete
              </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
              <!-- Information user -->
              <v-stepper-content step="1">
                <infor :callback="setInfor" />
              </v-stepper-content>
              <!-- Choose business type -->
              <v-stepper-content step="2">
                <business-type :callback="setBusinessType" />
              </v-stepper-content>
              <!-- Choose product nike -->
              <v-stepper-content step="3">
                <ProductNike :callback="setProductNike" />
              </v-stepper-content>
              <!-- Customize your store  -->
              <v-stepper-content step="4">
                <Notification type="error" :messages="errors" v-if="errors.length > 0" />
                <customize-store :callback="submit" />
              </v-stepper-content>

              <v-stepper-content step="5">
                <div class="text-center mt-5">
                  <v-icon size="80" color="success">fas fa-check-circle</v-icon>
                  <h2 class="mt-5">Success, your store is ready to go!</h2>
                </div>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Infor from './Information';
import CustomizeStore from './CustomizeStore';
import BusinessType from './BusinessType';
import ProductNike from './ProductNike';
import { authService } from '@/apis/auth.s';
import { userService } from '@/apis/user.s';
import { storeService } from '@/apis/store.s';
import Notification from '@/components/Notification';
import STORAGE_NAME from '@/const/storage';

export default {
  components: {
    Infor,
    CustomizeStore,
    BusinessType,
    ProductNike,
    Notification,
  },
  data() {
    return {
      e1: 1,
      params: {
        storeContact: {},
        importFromStore: {},
      },
      errors: [],
      store: {},
      user: {},
    };
  },
  created() {},
  methods: {
    /*
    Set infomation
    */
    setInfor(data) {
      this.e1 = 2;
      this.params.storeContact.storeCountry = data.country.name;
      this.params.storeContact.phone = data.number;
      this.user.firstName = data.firstName;
      this.user.lastName = data.lastName;
      this.user.phone = data.number;
    },
    /*
    Set business type
    */
    setBusinessType(data) {
      this.e1 = 3;
      this.params.businessType = data.code;
    },
    /*
    Set product nike
    */
    setProductNike(data) {
      this.e1 = 4;
      this.params.productNiche = data;
    },
    /*
    Submit survey
    */
    async submit(data) {
      let vm = this;
      this.params.themeCustomizePrimaryColor = data.color;
      this.params.themeCustomizeFont = data.font;
      this.params.mmoExperience = data.mmoExperience;
      this.errors = [];
      try {
        // submit survey
        let surveyData = await storeService.survey(this.params);
        // update user infor
        let user = await userService.updateUser(this.user);
        this.e1 = 5;
        setTimeout(async function() {
          try {
            // get store and redirect
            let storesData = await userService.getStores();
            if (storesData) {
              vm.$router.push({
                name: 'website',
                params: { domain: storesData.data[0].storeDetail.defaultSystemDomain },
              });
            }
          } catch (error) {
            console.log(error);
          }
        }, 3000);
      } catch (error) {
        this.errors = error.response.data.message;
      }
    },
  },
};
</script>

<style lang="scss">
.survey {
  .content {
    max-width: 900px;
  }
  .complete {
    border-color: $main-color !important;
  }
  .v-stepper__label {
    text-align: center !important;
  }
}
.v-stepper {
  box-shadow: none;
}
.v-stepper__header {
  box-shadow: none;
}
</style>
