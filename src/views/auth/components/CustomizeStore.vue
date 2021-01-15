<template>
  <div class="customize-store">
    <v-row v-if="!showNext">
      <v-col cols="12" md="6" sm="12">
        <h2>Your store is ready, let’s customize it!</h2>
        <p class="mt-5">
          <v-icon>fas fa-lightbulb</v-icon>
          Final step: change the whole Look and Feel of your store with these simple settings. Make it uniquely yours!
        </p>
        <v-row>
          <v-col cols="12" md="6" sm="12">
            <span class=""> Primary color </span>
            <v-menu offset-y v-model="showMenu">
              <template v-slot:activator="{ on, attrs }">
                <div class="d-flex input-picker-color">
                  <v-text-field
                    class="my-0 text-field-color"
                    v-model="primaryColor"
                    v-bind="attrs"
                    v-on="on"
                    @click="showMenu = true"
                    hide-details
                  ></v-text-field>
                  <div class="p-3 btn-color">
                    <v-btn
                      :style="{ backgroundColor: primaryColor }"
                      class="px-0"
                      width="20"
                      min-width="20"
                      height="20"
                      min-height="20"
                      dark
                      v-bind="attrs"
                      v-on="on"
                    ></v-btn>
                  </div>
                </div>
              </template>
              <v-color-picker class="ma-2" v-model="primaryColor" :swatches="swatches" show-swatches></v-color-picker>
            </v-menu>
          </v-col>
          <v-col cols="12" md="6" sm="12">
            <span class=""> Font </span>
            <v-autocomplete
              @change="selectFont"
              :items="fonts"
              v-model="font"
              :error-messages="invalid && !$v.font.required ? $t('Font is required') : ''"
              class="my-0"
              item-text="family"
              item-value="family"
              auto-select-first
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="12" sm="12" class="d-flex">
            <v-btn @click="$parent.$parent.$parent.e1 = 3">Back</v-btn>
            <v-btn class="ml-auto" :loading="isLoading" @click="next" color="primary">Take me to my store!</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="d-none d-sm-flex" cols="12" md="6" sm="12">
        <div class="iphone">
          <div class="power"></div>
          <div class="lock"></div>
          <div class="volume up"></div>
          <div class="volume down"></div>
          <div class="camera"></div>
          <div class="speaker"></div>
          <div class="screen">
            <iframe
              width="100%"
              height="100%"
              src="https://hiweb.io/"
              frameborder="0"
              allowfullscreen
              title="Theme demo"
            ></iframe>
          </div>
          <div class="button">
            <div class="square"></div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <h2 class="text-center mb-5">Tell us a little bit about your experience of selling online</h2>
        <span>How would you describe your experience of selling online?</span>
        <v-select
          v-model="mmoExperience"
          :items="mmoExperiences"
          item-text="name"
          item-value="value"
          single-line
        ></v-select>
        <div class="text-center mt-5">
          <v-btn @click="submit" width="200" color="primary">Save</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { authService } from '@/apis/auth.s';
import Api from '@/apis/';
import { required, minLength, maxLength, email, helpers, decimal } from 'vuelidate/lib/validators';

export default {
  props: {
    /**
     * Callback
     */
    callback: {
      type: Function,
      default(data) {},
    },
  },
  components: {},
  data() {
    return {
      swatches: [
        ['#FF0000', '#AA0000', '#550000'],
        ['#FFFF00', '#AAAA00', '#555500'],
        ['#00FF00', '#00AA00', '#005500'],
        ['#00FFFF', '#00AAAA', '#005555'],
        ['#0000FF', '#0000AA', '#000055'],
      ],
      showNext: false,
      mmoExperiences: [
        {
          name: `I'm a newbie and have no experience in selling online`,
          value: `I'm a newbie and have no experience in selling online`,
        },
        {
          name: `I have experience in selling on other eCommerce platforms (Shopify, Woocommerce...)`,
          value: `I have experience in selling on other eCommerce platforms (Shopify, Woocommerce...)`,
        },
        {
          name: `I have experience in selling on eCommerce marketplaces (Amazon/Ebay/...)`,
          value: `I have experience in selling on eCommerce marketplaces (Amazon/Ebay/...)`,
        },
        {
          name: `I want to scale my business with the current revenue of over $500k/month`,
          value: `I want to scale my business with the current revenue of over $500k/month`,
        },
      ],
      mmoExperience: `I'm a newbie and have no experience in selling online`,
      primaryColor: '#288485',
      showMenu: false,
      font: 'Abel',
      fonts: [],
      isLoading: false,
      invalid: false,
    };
  },
  validations: {
    font: {
      required,
    },
    mmoExperience: {
      required,
    },
  },
  created() {
    this.getWebFonts();
  },
  methods: {
    async getWebFonts() {
      let api = new Api();
      let data = await api.get(
        'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyB9NPXKIWWV1fiEyswYduuOA6Ng9t14VNA',
      );
      this.fonts = data.data.items;
    },
    selectFont() {
      console.log(this.font);
    },
    next() {
      this.isLoading = true;
      this.$v.$touch();
      this.invalid = this.$v.$invalid;
      if (!this.invalid) {
        this.showNext = true;
        this.isLoading = false;
      }
    },
    submit() {
      if (!this.$v.$invalid) {
        this.callback({
          color: this.primaryColor,
          font: this.font,
          mmoExperience: this.mmoExperience,
        });
      }
    },
  },
};
</script>

<style lang="scss">
.input-picker-color {
  width: 100%;
  @include flex();
  border-radius: 8px;
  position: relative;
  .btn-color {
    position: absolute;
    right: 10px;
  }
  background: #f5f6f7 !important;
  .v-input__slot {
    border-radius: 0 !important;
  }
  .text-field-color {
    .v-input__slot {
      border-radius: 0 !important;
    }
  }
}
.iphone {
  position: relative;
  background: #202020;
  width: 360px;
  height: 700px;
  padding-top: 95%;
  margin: 0 auto;
  border-radius: 3em;
}

.power {
  position: absolute;
  background: #202020;
  width: 13%;
  height: 0.5%;
  top: -0.5%;
  right: 21%;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
}

.lock {
  position: absolute;
  background: #202020;
  width: 1%;
  height: 5%;
  top: 12.5%;
  left: -1%;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
}

.volume {
  position: absolute;
  background: #202020;
  width: 1%;
  height: 4%;
  top: 23%;
  left: -1%;
  border-top-left-radius: 0.5em;
  border-bottom-left-radius: 0.5em;
}

.volume.down {
  top: 31%;
}

.camera {
  position: absolute;
  top: 4%;
  left: 48.5%;
  background: #3f3f3f;
  width: 3%;
  height: 0;
  padding-top: 3%;
  border-radius: 50%;
}

.speaker {
  position: absolute;
  top: 7%;
  left: 42.5%;
  background: #3f3f3f;
  width: 15%;
  height: 0;
  padding-top: 3%;
  border-radius: 1em;
}

.appleicon {
  padding-top: 25%;
  opacity: 0;
  animation: unhide 5s infinite alternate;
}

.appleicon img {
  width: 100%;
  height: 100%;
}

.text {
  opacity: 0;
  font-size: 1.25rem;
  text-align: center;
  animation: unhide 5s infinite alternate;
}

.screen {
  background: #2f2f2f;
  width: 90%;
  height: 75%;
  position: absolute;
  top: 12.5%;
  left: 5%;
  animation: lighten 5s infinite alternate;
}

.button {
  position: absolute;
  bottom: 2.75%;
  left: 42.5%;
  background: #3f3f3f;
  /* border: 1px solid #3f3f3f; */
  width: 15%;
  height: 0;
  padding-top: 15%;
  border-radius: 50%;
}

.square {
  position: absolute;
  top: 27.5%;
  left: 27.5%;
  border: 2px solid #d7d7d7;
  border-radius: 0.3em;
  width: 45%;
  height: 45%;
}

@media screen and (min-width: 28em) {
  body {
    font-size: 8px;
  }
}

@media screen and (min-width: 34em) {
  body {
    font-size: 10px;
  }
}

@media screen and (min-width: 48em) {
  body {
    font-size: 14px;
  }
}

@keyframes lighten {
  0%,
  45% {
    background: #2f2f2f;
  }
  65%,
  100% {
    background: #f7f7f7;
  }
}

@keyframes unhide {
  0%,
  55% {
    opacity: 0;
  }
  75%,
  100% {
    opacity: 1;
  }
}
</style>
