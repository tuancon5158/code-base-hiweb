<template>
  <div class="pages__create">
    <div class="">
      <v-row class="mt-5" no-gutters>
        <v-col cols="12" md="8" sm="12" xs="12">
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
                            <InputText label="Title" />
                          </div>
                          <div>
                            <InputText label="Title" />
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
        <v-col cols="12" md="4" sm="12" xs="12"></v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import InputText from '@/views/website/components/inputs/InputDefault';
import TextEditor from '@/components/form/Wysiwyg';
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators';

export default {
  components: {
    InputText,
    TextEditor,
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
        template: '',
      },
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
