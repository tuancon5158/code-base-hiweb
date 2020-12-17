import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

// config color theme

const opts = {
  theme: {
    light: true,
    themes: {
      light: {
        primary: '#08a0e0',
        secondary: '#b0bec5',
        anchor: '#1C3E3F',
      },
      dark: {
        primary: 'red',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
};

export default new Vuetify(opts);
