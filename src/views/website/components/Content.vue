<template>
  <div class="form-component">
    <!-- Label -->
    <label class="mb-1">
      {{ title }}
    </label>

    <!-- Text -->
    <small v-if="subtitle" class="form-text text-muted">
      <!-- {{ subtitle }} -->
    </small>

    <!-- WYSIWYG -->
    <Wysiwyg :callback="updateContent" :height="200" :plugins="['imageSelector']"></Wysiwyg>
  </div>
</template>

<script type="text/javascript">
import Wysiwyg from '@/components/form/Wysiwyg';
import event from '@/plugins/event-bus';
import imageHelper from '@/helpers/image';

export default {
  props: {
    title: {
      type: String,
      default: 'Content',
    },

    subtitle: {
      type: String,
      default: '',
    },

    update: {
      default: null,
    },
  },

  data() {
    return {
      imageHelper,
    };
  },

  components: { Wysiwyg },

  created() {
    // Register redactor wysiwyg image insert button
    let superObject = this;

    ($R => {
      $R.add('plugin', 'imageSelector', {
        // construct
        init: function(app) {
          // define redactor app
          this.app = app;

          // define toolbar service
          this.toolbar = app.toolbar;
        },

        start: function() {
          // set up the button
          var buttonData = {
            title: 'Insert Images',
            api: 'plugin.imageSelector.toggle',
          };

          // add the button to the toolbar
          var $button = this.toolbar.addButton('image-selector-button', buttonData);
        },

        toggle: function() {
          // Callback
          event.$emit('show-modal', 'wysiwyg-image-selector');

          // Set callback
          event.$emit('set-callback-image-selector-wysiwyg-image-selector', files => {
            // Insert images to editor
            let html = '';
            files.forEach(file => {
              html += '<p><img src="' + imageHelper.resize(file.getAttributes().path, 300, true) + '" /></p>';
            });

            $R(this.app.rootElement, 'insertion.insertHtml', html);
          });
        },
      });
      // eslint-disable-next-line no-undef
    })(Redactor);
  },

  methods: {
    /**
     * Set page content attribute
     *
     * @param string
     */
    updateContent(html) {
      this.$parent.attributes.content = html;
    },
  },
};
</script>
