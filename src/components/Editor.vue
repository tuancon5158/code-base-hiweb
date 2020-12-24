<template>
  <section class="container">
    <div class="input-title">
      {{ title }}
      <span v-if="required == true" style="color: red">*</span>:
    </div>
    <div
      class="quill-editor"
      :content="contentComponent"
      @change="onEditorChange($event)"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      v-quill:myQuillEditor="editorOption"
    ></div>
  </section>
</template>
<script>
import { required } from 'vuelidate/lib/validators';
// import "highlight.js/styles/tomorrow.css";

// import theme style
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
export default {
  props: ['title', 'content', 'mode', 'required'],

  validations: {
    // contentComponent: {
    //   required
    // }
  },
  computed: {},
  data() {
    return {
      contentComponent: '',
      editorOption: {
        placeholder: '',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ color: [] }, { background: [] }],
            [{ align: [] }],
            ['clean'],
            ['link', 'image', 'video'],
          ],
        },
      },
    };
  },
  watch: {
    mode() {
      if (this.mode == 'create') {
        this.contentComponent = '';
      }
    },
    content() {
      this.contentComponent = this.content;
    },
  },
  mounted() {
    this.contentComponent = this.content;
  },
  methods: {
    clear() {
      this.$v.$reset();
      this.contentComponent = '';
    },
    onEditorBlur(editor) {
      // console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      // console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      //console.log("editor ready!", editor);
    },
    onEditorChange({ editor, html, text }) {
      this.contentComponent = html;
      this.$emit('update:content', html);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  padding: 10px 0;
  .quill-editor {
    min-height: 300px;
    max-height: 400px;
    overflow-y: auto;
  }
}
</style>
