import Vue from 'vue'
import App from './App.vue'
import i18n from './lang'
import router from './router'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

// jQuery
import $ from 'jquery';
window.$ = $; window.jQuery = $;

//Vuelidate
Vue.use(Vuelidate)

new Vue({
  i18n, router, render: h => h(App),
}).$mount('#app')
