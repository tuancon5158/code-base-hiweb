<template>
  <div class="payments__page">
    <Redirect class="mt-3" title="Settings" route="website.settings" />
    <v-row>
      <v-col class="p-3" cols="12">
        <h2>Payment providers</h2>
        <p class="mt-3">
          Enable payment providers to accept credit cards, Paypal, and other payment methods during checkout.Choose a
          payment provider to accept payment for orders.
        </p>
        <v-divider></v-divider>
      </v-col>
      <v-col class="p-3" cols="12" md="4">
        <h2><v-icon>fab fa-paypal</v-icon> Paypal</h2>
        <p class="mt-3">
          Accept PayPal Express Checkout as an additional payment method using a "Checkout with PayPal" button.
        </p>
      </v-col>
      <v-col cols="12" md="8">
        <div class="elevation-form pa-3">
          <v-row>
            <v-col cols="12">
              <div class="d-flex align-center">
                <div>
                  <h3>Paypal Credentials</h3>
                </div>
                <div class="ml-auto">
                  <v-btn><v-icon class="mr-3" color="#b5bdc2">mdi-cached</v-icon>Payment rotation</v-btn>
                </div>
              </div>
              <v-divider class="mt-5"></v-divider>
            </v-col>
            <v-col v-if="paymentMethods.length > 0" cols="12">
              <div>
                <div class="d-flex align-center">
                  <h3>Paypal Smart button</h3>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="btn-icon-infor" dark v-bind="attrs" v-on="on">
                        <v-icon small>far fa-info-circle</v-icon>
                      </v-btn>
                    </template>
                    <span>
                      <v-img width="400" :src="require('@/assets/images/smart-button-tool-tip.webp')"></v-img>
                    </span>
                  </v-tooltip>
                  <v-switch v-model="payment.provider_options.enable_smart_button"></v-switch>
                </div>
                <small>
                  If any credit card option is activated, Paypal Smart Button is turned off in order to preserve your
                  store conversion rate.
                </small>
              </div>
              <div>
                <div class="d-flex align-center">
                  <h3 class="mr-5">Paypal order info autopilot</h3>
                  <v-switch v-model="payment.provider_options.disable_update_tracking"></v-switch>
                </div>
                <small>
                  Automatically update the order information, fulfillment and tracking information to your PayPal
                  account.Choose More settings for detail update configuration.
                </small>
              </div>

              <div class="mt-3">
                <div class="d-flex align-center">
                  <h3>Brand name</h3>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn class="btn-icon-infor" dark v-bind="attrs" v-on="on">
                        <v-icon small>far fa-info-circle</v-icon>
                      </v-btn>
                    </template>
                    <span>
                      <v-img width="400" :src="require('@/assets/images/paypal-tooltip.webp')"></v-img>
                    </span>
                  </v-tooltip>
                </div>
                <div>
                  <v-text-field></v-text-field>
                </div>
              </div>

              <div class="">
                <v-btn color="primary">Save</v-btn>
              </div>

              <v-expansion-panels class="mt-5">
                <v-expansion-panel v-for="(payment, index) in paymentMethods" :key="index">
                  <v-expansion-panel-header disable-icon-rotate>
                    <div>
                      <div>
                        Account name: <strong>{{ payment.title }}</strong>
                      </div>
                      <div class="mt-2">
                        Using: <strong>{{ payment.code }}</strong>
                      </div>
                    </div>
                    <template v-slot:actions>
                      <v-icon :color="payment.active ? 'teal' : ''">
                        mdi-check
                      </v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div>
                      <v-switch v-model="payment.provider_options.sandbox" label="Test mode"></v-switch>
                    </div>
                    <div>
                      <span>* Client ID</span>
                      <v-text-field v-model="payment.provider_options.client_id"></v-text-field>
                    </div>
                    <div>
                      <span>* Client Secret Key</span>
                      <v-text-field
                        v-model="payment.provider_options.client_secret"
                        :type="showKey ? 'text' : 'password'"
                        @click:append="showKey = !showKey"
                        :append-icon="showKey ? 'mdi-eye' : 'mdi-eye-off'"
                      ></v-text-field>
                    </div>
                    <div class="d-flex">
                      <v-btn color="primary">{{ !payment.active ? 'Activate' : 'Deactivate' }}</v-btn>
                      <v-btn class="mx-2" color="primary">Save</v-btn>
                      <v-btn class="ml-auto" color="danger">Remove account</v-btn>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
            <v-col cols="12">
              <v-btn @click="showModal = true">
                <v-icon depressed color="#b5bdc2" class="mr-2">mdi-plus</v-icon>Add another account
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <Modal model="showModal" title="Add another account" :callback="submit">
      <template slot="content">
        <div>
          <v-switch v-model="payment.provider_options.sandbox" label="Test mode"></v-switch>
        </div>
        <div>
          <span>* Title</span>
          <v-text-field v-model="payment.title"></v-text-field>
        </div>
        <div>
          <span>* Client ID</span>
          <v-text-field v-model="payment.provider_options.client_id"></v-text-field>
        </div>
        <div>
          <span>* Client Secret Key</span>
          <v-text-field
            v-model="payment.provider_options.client_secret"
            :type="showKey ? 'text' : 'password'"
            @click:append="showKey = !showKey"
            :append-icon="showKey ? 'mdi-eye' : 'mdi-eye-off'"
          ></v-text-field>
        </div>
      </template>
    </Modal>
  </div>
</template>
<script>
import Redirect from '@/components/RedirectTo';
import Modal from '@/components/Modal';

export default {
  components: {
    Redirect,
    Modal,
  },
  data() {
    return {
      showKey: false,
      showModal: false,
      payment: {
        title: '',
        provider_options: {
          client_id: '',
          client_secret: '',
          sandbox: false,
        },
      },
      paymentMethods: [
        {
          active: true,
          title: 'quy@hiweb.com',
          id: 200081,
          code: 'paypal-express',
          is_dead: false,
          provider_options: {
            brand_name: '',
            client_id: '',
            client_secret: '',
            disable_update_tracking: true,
            enable_smart_button: true,
            sandbox: true,
            webhook_id: '',
          },
        },
        {
          active: false,
          title: 'quy@hiweb.com',
          id: 200081,
          code: 'paypal-express',
          is_dead: false,
          provider_options: {
            brand_name: '',
            client_id: '',
            client_secret: '',
            disable_update_tracking: true,
            enable_smart_button: true,
            sandbox: true,
            webhook_id: '',
          },
        },
      ],
    };
  },
  methods: {
    submit() {},
  },
};
</script>
<style lang="scss">
.payments__page {
  .v-tooltip__content {
    z-index: 10;
    opacity: 1 !important;
  }
  .btn-icon-infor {
    background-color: transparent !important;
    color: #333 !important;
    box-shadow: none;
    font-size: 13px;
    min-width: 20px !important;
  }
  .btn-icon-infor:hover {
    background-color: #fff !important;
  }
  .btn-icon-infor:before {
    background-color: #fff !important;
  }
}
.v-tooltip__content {
  z-index: 10;
  opacity: 1 !important;
}
</style>
