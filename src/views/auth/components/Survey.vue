<template>
  <div class="survey">
    <v-container>
      <v-row container justify="center">
        <v-col class="content">
          <v-stepper v-model="e1">
            <v-stepper-header>
              <v-stepper-step :complete="e1 > 1" step="1">
                Add your contact
              </v-stepper-step>

              <v-divider :class="e1 > 1 ? 'complete' : ''"></v-divider>

              <v-stepper-step :complete="e1 > 2" step="2">
                Customize your store
              </v-stepper-step>

              <v-divider :class="e1 > 2 ? 'complete' : ''"></v-divider>

              <v-stepper-step step="3">
                Complete
              </v-stepper-step>

              <v-divider></v-divider>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <infor :callback="setInfor" />
              </v-stepper-content>

              <v-stepper-content step="2">
                <customize-store :callback="setCustomizeStore" />
              </v-stepper-content>

              <v-stepper-content step="3">
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

export default {
  components: {
    Infor,
    CustomizeStore,
  },
  data() {
    return {
      e1: 2,
    };
  },
  methods: {
    setInfor(data) {
      this.e1 = 2;
    },
    setCustomizeStore(data) {
      this.e1 = 3;
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
}
.v-stepper {
  box-shadow: none;
}
.v-stepper__header {
  box-shadow: none;
}
</style>
