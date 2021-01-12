<template>
  <div class="redirects__create">
    <v-row>
      <v-col cols="12" md="12" sm="12">
        <v-row>
          <v-col cols="12" md="12" sm="12">
            <redirect title="URL redirects" route="website.redirects" />
          </v-col>
          <v-col cols="12" class="px-5 py-5" md="4" sm="4">
            <h3 class="mb-3">Redirect from</h3>
            <span>
              The original URL that you'd like to forward visitors from.
            </span>
            <span>
              Usually, this is an old spanage the visitors can no longer access because the content was moved to a
              different URL or deleted.
            </span>
          </v-col>
          <v-col cols="12" class="px-5 py-5" md="8" sm="8">
            <v-card>
              <v-card-text>
                <span>Redirect from</span>
                <v-text-field
                  placeholder="e.g. /shop/shoes"
                  v-model="redirect.from"
                  :error-messages="invalid && !$v.redirect.from.required ? $t('Redirect from is required') : ''"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="12" sm="12">
            <v-divider></v-divider>
          </v-col>
          <v-col cols="12" class="px-5 py-5" md="4" sm="4">
            <h3 class="mb-3">Redirect to</h3>
            <span>
              The new URL that visitors should be forwarded to.
            </span>
            <span>
              If you want to redirect your store's homepage, enter / (a forward slash).
            </span>
          </v-col>
          <v-col cols="12" class="px-5 py-5" md="8" sm="8">
            <v-card>
              <v-card-text>
                <span>Redirect to</span>
                <v-text-field
                  placeholder="e.g. /shop/shoes"
                  v-model="redirect.to"
                  :error-messages="invalid && !$v.redirect.to.required ? $t('Redirect to is required') : ''"
                ></v-text-field>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="12" sm="12">
            <v-divider></v-divider>
            <div class="mt-5 text-end">
              <v-btn @click="$router.push({ name: 'website.redirects' })" color="" class="mr-3">Cancel</v-btn>
              <v-btn color="primary" @click="submit" :loading="isLoading">Save redirect</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { required, minLength, maxLength, email, helpers, decimal } from 'vuelidate/lib/validators';
import Redirect from '@/components/RedirectTo';

export default {
  components: {
    Redirect,
  },
  data() {
    return {
      redirect: {
        from: '',
        to: '',
      },
      invalid: false,
      isLoading: false,
    };
  },
  validations: {
    redirect: {
      from: {
        required,
      },
      to: {
        required,
      },
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      this.isLoading = true;
      this.invalid = this.$v.redirect.$invalid;
      if (!this.invalid) {
        console.log(this.redirect);
      }
    },
  },
};
</script>
