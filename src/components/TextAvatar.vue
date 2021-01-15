<template>
  <div>
    <span class="text-white" :class="'avatar-title rounded rounded-' + layout">{{ initialText }}</span>
  </div>
</template>

<script type="text/javascript">
export default {
  props: {
    layout: {
      type: String,
      default: 'circle',
    },
    text: {
      type: String,
      default: 'Default',
    },
    size: {
      type: String,
      default: 'normal',
    },
    state: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      colorPalette: {
        A: '7ebdb4',
        B: 'f6d198',
        C: 'f4a548',
        D: '862a5c',
        E: 'f6acc8',
        F: 'af8baf',
        G: '584153',
        H: '0779e4',
        I: 'f79071',
        K: '16817a',
        L: 'c1a57b',
        M: '4cbbb9',
        N: '588da8',
        O: '512b58',
        P: '85a392',
        Q: '30475e',
        R: 'e58a8a',
        S: 'f0a500',
        T: '8ec6c5',
        U: '856c8b',
        V: '005082',
        W: '639a67',
        X: '231903',
        Y: '1eb2a6',
        Z: '0f4c81',
      },
    };
  },
  mounted() {
    let wrapper = this.$el.querySelector('span');
    // Background color
    // wrapper.style.background = this.backgroundColor;
  },
  computed: {
    initialText() {
      let splittedText = this.text.split(' ').filter(text => {
        return text;
      });
      let initialText = '';
      for (let i = 0; i < 2; i++) {
        if (typeof splittedText[i] === 'undefined') {
          continue;
        }
        initialText += splittedText[i].charAt(0).toUpperCase();
      }
      return initialText;
    },
    backgroundColor() {
      return '#' + this.colorPalette[this.initialText.charAt(0)];
    },
  },
};
</script>
<style lang="scss">
.avatar-title {
  color: #fff !important;
}
</style>
