<template>
  <div class="file-uploader">
    <div class="file-drop-area" v-if="drag">
      <div class="text-center">
        <div class="fake-btn"><v-icon large>mdi-publish</v-icon></div>
        <div class="file-msg">or drag and drop files here</div>
      </div>
      <v-file-input
        ref="file"
        v-model="files"
        @change="chooseFile"
        class="file-input"
        :multiple="multiple"
        label="File input"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      ></v-file-input>
    </div>
    <div v-else>
      <v-file-input
        ref="file"
        v-model="files"
        @change="chooseFile"
        :multiple="multiple"
        label="File input"
        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
      ></v-file-input>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    multiple: {
      type: Boolean,
      default: false,
    },
    drag: {
      type: Boolean,
      default: false,
    },
    maxSize: {
      type: Number,
      default: 1024 * 1024,
    },
  },
  data() {
    return {
      files: [],
      errors: [],
    };
  },
  methods: {
    chooseFile() {
      var validExts = ['.xlsx', '.xls', '.csv'];
      this.errors = [];
      if (this.multiple && this.files) {
        this.files.forEach(file => {
          if (file.size > this.maxSize) {
            this.files = null;
            this.errors.push('file ' + file.name + ' larger than 1mb');
          }
          if (file.type != 'text/csv' && file.type != 'application/vnd.ms-excel') {
            this.files = null;
            this.errors.push('File ' + file.name + ' type must be .csv');
          }
        });
      } else {
        if (this.files && this.files.size > this.maxSize) {
          this.files = null;
          this.errors.push('File ' + this.files.name + ' larger than 1mb');
        }
        if (this.files && this.files.type != 'text/csv' && this.files.type != 'application/vnd.ms-excel') {
          this.files = null;
          this.errors.push('File ' + this.files.name + ' type must be .csv');
        }
      }
      let fileResources = {};
      fileResources.file = this.files;
      fileResources.errors = this.errors;
      this.$emit('callback', fileResources);
    },
  },
};
</script>

<style lang="scss">
.file-uploader {
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
    min-height: 200px;
    padding: 25px;
    border: 3px dashed #ccc;
    border-radius: 3px;
    transition: 0.2s;
    cursor: pointer;
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
    input {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
    }
    .v-input__control {
      height: 100%;
    }
    .v-input__slot {
      height: 100% !important;
    }
    .v-text-field__slot {
      height: 100%;
    }
    .v-file-input__text {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
