<template>
  <div class="redirects__list">
    <v-row>
      <v-col cols="12" md="6" sm="6">
        <redirect class="my-5" title="Navigation" route="website.menus" />
      </v-col>
      <v-col class="d-flex align-center justify-end" cols="12" md="6" sm="6">
        <v-btn @click="$router.push({ name: 'website.redirects.create' })" class="mr-3" color="primary">
          Create URL redirect
        </v-btn>
      </v-col>
    </v-row>
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="12" sm="12" class="text-center">
            <img class="mx-auto" src="@/assets/images/redirects-url.svg" alt="" />
            <h2>Manage your URL redirects</h2>
            <p>Prevent old links from breaking by redirecting your customers to another page.</p>
            <div class="d-flex justify-center">
              <v-btn @click="$router.push({ name: 'website.redirects.create' })" class="mr-3" color="primary">
                Create URL redirect
              </v-btn>
              <v-btn color="" @click="modal = true">Import redirects</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <modal title="Import redirects" model="modal" :callback="submit">
      <template slot="content">
        <div>
          <v-alert v-if="!fileErrors || fileErrors.length == 0" type="warning">
            Note: Please use this required CSV template to create your list of redirects.
          </v-alert>
          <notification v-if="fileErrors && fileErrors.length > 0" type="error" :messages="fileErrors" />
          <file-uploader v-on:callback="onFileUploaded" />
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import Redirect from '@/components/RedirectTo';
import Modal from '@/components/Modal';
import FileUploader from '@/components/form/FileUploader';
import Notification from '@/components/Notification';

export default {
  components: {
    Redirect,
    Modal,
    FileUploader,
    Notification,
  },
  data() {
    return {
      modal: false,
      file: null,
      fileErrors: null,
    };
  },
  methods: {
    onFileUploaded(fileResources) {
      console.log(fileResources);
      this.file = fileResources.file;
      this.fileErrors = fileResources.errors;
    },
    submit() {},
  },
};
</script>
