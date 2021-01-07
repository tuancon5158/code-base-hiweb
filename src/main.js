import Vue from 'vue';
import App from './App.vue';
import i18n from './lang';
import router from './router';
import Vuelidate from 'vuelidate';
import vuetify from '@/plugins/vuetify';
import store from './store';
import './assets/css/main.scss';
import '@/plugins/components';
import * as filters from '@/filters';
import VuePapaParse from 'vue-papa-parse';
import VueTreeList from 'vue-tree-list';

Vue.use(VueTreeList);
Vue.use(VuePapaParse);
Vue.config.productionTip = false;

// jQuery
import $ from 'jquery';
window.$ = $;
window.jQuery = $;

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

//Vuelidate
Vue.use(Vuelidate);

new Vue({
  i18n,
  vuetify,
  store,
  router,
  render: h => h(App),
}).$mount('#app');
