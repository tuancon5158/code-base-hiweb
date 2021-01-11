<template>
  <div class="pages__list">
    <v-row no-gutters>
      <v-col cols="12" md="6" sm="6" xs="6">
        <h1>Pages</h1>
      </v-col>
      <v-col cols="12" md="6" sm="6" xs="6" class="d-flex align-center justify-end">
        <v-btn @click="$router.push({ name: 'website.pages.create' })" color="primary">Add Page</v-btn>
      </v-col>
      <v-col cols="12" md="12" sm="12" xs="12">
        <v-card class="p-10">
          <v-card-text class="text-center">
            <v-img
              class="mx-auto"
              :lazy-src="require('@/assets/images/no-page.svg')"
              max-height="150"
              max-width="250"
              contain
              :src="require('@/assets/images/no-page.svg')"
            ></v-img>
            <h2>Add pages to your online store</h2>
            <p class="mt-3">
              Write clear page titles and descriptions to improve your search engine optimization (SEO) and help
              customers find your website.
            </p>
            <v-btn @click="$router.push({ name: 'website.pages.create' })" color="primary">Add Page</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
