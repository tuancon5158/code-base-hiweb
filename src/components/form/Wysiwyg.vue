<template>
  <div class="admin-form-wysiwyg">
    <textarea :id="id" class="admin-form-wysiwyg__wrapper" :value="value"></textarea>
  </div>
</template>

<script type="text/javascript">
import '@/packages/redactor/redactor.min.js';
import '@/packages/redactor/redactor.min.css';
// import '@/assets/js/fontsize.js';
// import '@/assets/js/fontcolor.js';

export default {
  props: {
    /**
     * Editor initial height
     */
    height: {
      default: 0,
    },

    /**
     * Editor max height
     */
    maxHeight: {
      default: 0,
    },

    /**
     * Initial value
     */
    value: {
      type: String,
      default: '',
    },

    /**
     * Update
     */
    update: {
      default: null,
    },

    /**
     * Reference
     */
    reference: {
      default: null,
    },

    /**
     * Plugins
     */
    plugins: {
      type: Array,
      default() {
        return [];
      },
    },

    /**
     * Callback
     */
    callback: {
      type: Function,
      default: html => {},
    },
  },

  data() {
    return {
      id:
        Math.random()
          .toString(36)
          .substr(2, 9) +
        '-' +
        new Date().getTime(),
      isForcingHeight: false,
    };
  },

  mounted() {
    let element = this.$el.querySelector('.admin-form-wysiwyg__wrapper');
    this.plugins.push('fontsize', 'fontcolor');

    // eslint-disable-next-line no-undef
    $R(element, {
      minHeight: (this.height ? this.height : 300) + 'px',
      maxHeight: (this.maxHeight ? this.maxHeight : 300) + 'px',
      buttons: [
        'format',
        'bold',
        'italic',
        'deleted',
        'line',
        'redo',
        'undo',
        'underline',
        'ol',
        'ul',
        'indent',
        'outdent',
        'sup',
        'sub',
      ],
      formatting: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      // eslint-disable-next-line no-dupe-keys
      minHeight: '300px',
      plugins: this.plugins,
      callbacks: {
        changed: html => {
          this.callback(html, this.reference);
        },
      },
    });
  },

  methods: {},

  computed: {},

  watch: {
    update: function() {
      let element = this.$el.querySelector('.admin-form-wysiwyg__wrapper');
      // eslint-disable-next-line no-undef
      $R(element, 'source.setCode', this.value);
    },
  },
};
</script>

<style type="text/css" lang="scss">
.redactor-in {
  box-shadow: none !important;
}

.redactor-modal-area input:focus {
  -moz-appearance: checkbox !important;
  -webkit-appearance: checkbox !important;
}
.redactor-focus.redactor-styles-on,
.redactor-focus:focus.redactor-styles-on {
  border-color: $main-color !important;
}
</style>
