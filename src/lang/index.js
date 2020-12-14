import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Cookies from 'js-cookie';
import enLocale from './en';
import viLocale from './vi';

Vue.use(VueI18n);

const messages = {
  en: {
    ...enLocale,
  },
  vi: {
    ...viLocale,
  },
};

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'vi', // set locale
  messages, // set locale messages
});

export default i18n;
