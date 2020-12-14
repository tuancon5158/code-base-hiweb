import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    modules: {
      auth,
    },
  });
};
export default store;
