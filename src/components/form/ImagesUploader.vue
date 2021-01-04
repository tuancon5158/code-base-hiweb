<template>
  <div class="images-uploader">
    <div class="images-preview">
      <v-row no-gutters v-if="files.length > 0">
        <template v-if="multiple">
          <v-col class="px-3 py-3" v-for="(image, key) in previews" :key="key" md="3" sm="6">
            <v-hover>
              <template class="px-3" v-slot:default="{ hover }">
                <v-card class="mx-auto" relative max-width="344">
                  <!-- Image -->
                  <v-img :src="image" :lazy-src="image" max-height="150">
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <!-- Loading -->
                  <v-row v-if="loading" class="loading-img fill-height ma-0 absolute" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey"></v-progress-circular>
                  </v-row>
                  <!-- overlay -->
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#036358">
                      <v-btn
                        @click="
                          showPreview = true;
                          preview = image;
                        "
                      >
                        <v-icon>fas fa-eye</v-icon>
                      </v-btn>
                      <v-btn
                        @click="
                          showEditAlt = true;
                          preview = image;
                        "
                      >
                        ALT
                      </v-btn>
                      <v-btn @click="deleteFile(key)"><v-icon>mdi-delete</v-icon></v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
          <!-- imput file -->
          <v-col class="px-3 py-3" md="3" sm="6">
            <div class="file-drop-area">
              <div class="text-center">
                <div class="fake-btn"><v-icon large>mdi-publish</v-icon></div>
                <div class="file-msg">or drag and drop files here</div>
              </div>
              <input
                ref="file"
                class="file-input"
                type="file"
                :multiple="multiple"
                @change="chooseFile"
                accept="image/*"
              />
            </div>
          </v-col>
        </template>
        <template v-else>
          <v-col class="px-3" v-for="(image, key) in previews" :key="key" md="12" sm="12">
            <v-hover>
              <template class="px-3" v-slot:default="{ hover }">
                <v-card class="mx-auto" relative max-width="344">
                  <!-- Image -->
                  <v-img :src="image" :lazy-src="image" max-with="100%" max-height="250">
                    <template v-slot:placeholder>
                      <v-row class="fill-height ma-0" align="center" justify="center">
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                  <!-- loading -->
                  <v-row v-if="loading" class="loading-img fill-height ma-0 absolute" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey"></v-progress-circular>
                  </v-row>
                  <!-- overlay -->
                  <v-fade-transition>
                    <v-overlay v-if="hover" absolute color="#036358">
                      <v-btn @click="$refs.file.click()">Change</v-btn>
                      <v-btn
                        @click="
                          showPreview = true;
                          preview = image;
                        "
                      >
                        <v-icon>fas fa-eye</v-icon>
                      </v-btn>
                      <v-btn
                        @click="
                          showEditAlt = true;
                          preview = image;
                        "
                      >
                        ALT
                      </v-btn>
                      <v-btn @click="deleteFile(key)"><v-icon>mdi-delete</v-icon></v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
              </template>
            </v-hover>
          </v-col>
        </template>
      </v-row>
    </div>
    <!-- input file -->
    <div class="file-drop-area" v-show="!files || files.length == 0">
      <div class="text-center">
        <div class="fake-btn"><v-icon large>mdi-publish</v-icon></div>
        <div class="file-msg">or drag and drop files here</div>
      </div>
      <input ref="file" class="file-input" type="file" :multiple="multiple" @change="chooseFile" accept="image/*" />
    </div>

    <!-- Dialog show preview -->
    <v-dialog v-model="showPreview" width="500">
      <v-card>
        <v-card-title class="headline lighten-2">
          Preview Image
        </v-card-title>
        <v-card-text>
          <v-img max-height="600" contain :src="preview"></v-img>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showPreview = false">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog edit alt -->
    <v-dialog v-model="showEditAlt" width="500">
      <v-card>
        <v-card-title class="headline lighten-2">
          Edit image alt text
        </v-card-title>

        <v-row no-gutters class="px-3 py-3">
          <v-col cols="12" sm="12" md="6">
            <v-img max-height="600" contain :src="preview"></v-img>
          </v-col>
          <v-col class="px-3 py-3" cols="12" sm="12" md="6">
            <v-text-field></v-text-field>
            <span>
              Write a brief description of this image to improve search engine optimization (SEO) and accessibility for
              visually impaired customers.
            </span>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showEditAlt = false">
            Cancel
          </v-btn>
          <v-btn color="primary" text @click="showEditAlt = false">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      files: [],
      previews: [],
      preview: null,
      errors: [],
      overlay: false,
      absolute: true,
      dialog: false,
      showPreview: false,
      showEditAlt: false,
      loading: false,
    };
  },
  methods: {
    chooseFile() {
      var validExts = ['.xlsx', '.xls', '.csv'];
      this.files = Array.from(this.$refs.file.files);
      console.log(this.files);
      this.files.forEach(f => {
        if (!f.type.match('image.*')) {
          return;
        }
        let reader = new FileReader();
        let that = this;
        reader.onload = function(e) {
          if (that.multiple) {
            that.previews.push(e.target.result);
          } else {
            that.previews = [e.target.result];
          }
        };
        reader.readAsDataURL(f);
      });
      let fileResources = {};
      fileResources.file = this.files;
      fileResources.errors = this.errors;
      this.$emit('callback', fileResources);
    },
    /*
    func delete file resources
    */
    deleteFile(key) {
      console.log(this.files);
      this.files.splice(key, 1);
      this.previews.splice(key, 1);
    },
  },
};
</script>

<style lang="scss">
.images-uploader {
  .images-preview {
    .image-container {
      border: 1px solid #ccc;
      margin: 5px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
  .loading-img {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    opacity: 0.46;
    background-color: rgb(3, 99, 88);
    border-color: rgb(3, 99, 88);
  }
  form {
    width: 500px;
    height: 200px;
    border: 3px dashed #ccc;
  }
  form p {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 170px;
    color: #ccc;
    font-family: Arial;
  }
  form input {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    outline: none;
    opacity: 0;
  }
  form button {
    margin: 0;
    color: #fff;
    background: #16a085;
    border: none;
    width: 508px;
    height: 35px;
    margin-top: -20px;
    margin-left: -4px;
    border-radius: 4px;
    border-bottom: 4px solid #117a60;
    transition: all 0.2s ease;
    outline: none;
  }
  form button:hover {
    background: #149174;
    color: #0c5645;
  }
  form button:active {
    border: 0;
  }
  .file-drop-area {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    min-height: 150px;
    padding: 25px;
    border: 3px dashed #ccc;
    border-radius: 3px;
    transition: 0.2s;
    &.is-active {
      background-color: rgba(255, 255, 255, 0.05);
    }
  }

  .fake-btn {
    flex-shrink: 0;
    background-color: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    padding: 8px 15px;
    text-transform: uppercase;
  }

  .file-msg {
    font-size: small;
    font-weight: 300;
    line-height: 1.4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .file-input {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0;
    &:focus {
      outline: none;
    }
  }
}
</style>
