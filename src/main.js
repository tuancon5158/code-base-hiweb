import Vue from 'vue'
import App from './App.vue'
import i18n from './lang'
import router from './router'
import Vuelidate from 'vuelidate'
import vuetify from '@/plugins/vuetify'
// import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

// jQuery
import $ from 'jquery';
window.$ = $; window.jQuery = $;

//Vuelidate
Vue.use(Vuelidate)

new Vue({
  i18n,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
