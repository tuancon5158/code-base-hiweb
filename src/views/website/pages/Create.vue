<template>
  <div class="pages__create">
    <div class="">
      <v-row class="mt-5" no-gutters>
        <v-col cols="12" sm="12" xs="12" class="mb-5 ml-5">
          <redirect class="mb-5" title="Pages" route="website.pages" />
          <h2>Add page</h2>
        </v-col>
        <v-col cols="12" md="8" sm="12" xs="12" class="px-5">
          <v-row no-gutters>
            <v-col cols="12" sm="12" xs="12" class="elevation-form pa-3">
              <h3>Page details</h3>
              <div class="mt-5">
                <InputText label="Title" :model="['page', 'title']" :validate="validate" />
              </div>
              <div class="mt-5">
                <TextEditor label="Content" />
              </div>
            </v-col>
            <v-col cols="12" sm="12" xs="12" class="elevation-form pa-3 mt-5">
              <template>
                <v-row justify="center">
                  <v-expansion-panels accordion>
                    <v-expansion-panel>
                      <v-expansion-panel-header disable-icon-rotate>
                        <div>
                          <h3>Search engine listing preview</h3>
                          <p class="mt-5">
                            Add a title and description to see how this collection might appear in a search engine
                            listing
                          </p>
                        </div>
                        <template v-slot:actions>
                          <span class="btn-link">Edit website SEO</span>
                        </template>
                      </v-expansion-panel-header>
                      <v-expansion-panel-content>
                        <template>
                          <div>
                            <span>Page title</span>
                            <v-text-field v-model="page.search_engine_title"></v-text-field>
                          </div>
                          <div>
                            <span>Meta description</span>
                            <v-textarea v-model="page.search_engine_title"></v-textarea>
                          </div>
                          <div>
                            <span>URL and handle</span>
                            <v-text-field
                              prefix="https://datweb2.onshopbase.com/pages/"
                              v-model="page.search_engine_title"
                            ></v-text-field>
                          </div>
                        </template>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-row>
              </template>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4" sm="12" xs="12">
          <v-row no-gutters>
            <v-col class="elevation-form pa-3" cols="12" xs="12">
              <h3>Visibility</h3>
            </v-col>
            <v-col class="elevation-form pa-3 mt-5" cols="12" xs="12">
              <h3>Template</h3>
              <p>Select a template for this page.</p>
              <InputText
                :model="['page', 'template']"
                itemText="name"
                itemValue="type"
                :itemsSelect="items"
                typeComponent="select"
              />
            </v-col>
          </v-row>
        </v-col>
        <v-col class="text-end" cols="12" sm="12" xs="12">
          <v-divider class="my-5"></v-divider>
          <v-btn color="" class="mx-5">Cancel</v-btn>
          <v-btn color="primary">Save</v-btn>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import InputText from '@/views/website/components/inputs/InputDefault';
import TextEditor from '@/components/form/Wysiwyg';
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators';
import Redirect from '@/components/RedirectTo';

export default {
  components: {
    InputText,
    TextEditor,
    Redirect,
  },
  validations: {
    page: {
      title: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(100),
      },
      search_engine_title: {
        required: false,
      },
      template: {
        required: false,
      },
    },
  },
  data() {
    return {
      page: {
        title: '',
        search_engine_title: '',
        body_html: '',
        handle: '',
        search_engine_meta_description: '',
        template: 'page',
      },
      items: [
        { type: 'page', name: 'Page' },
        { type: 'contact-page', name: 'Contact Page' },
        { type: 'review-page', name: 'Review Page' },
      ],
      validate: [{ type: 'required' }, { type: 'maxLength', min: 3 }, { type: 'maxLength', max: 100 }],
    };
  },
};
</script>
<style lang="scss">
.pages__create {
  .btn-link {
    color: $main-color;
    &:hover {
      text-decoration: none;
    }
  }
  .v-expansion-panel:before {
    box-shadow: none;
  }
  .v-expansion-panel-header__icon {
    position: absolute;
    right: 20px;
    top: 20px;
  }
}
</style>
