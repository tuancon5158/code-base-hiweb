import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import noti from './modules/noti';

Vue.use(Vuex);

const store = () => {
  return new Vuex.Store({
    modules: {
      auth,
      noti,
    },
  });
};
export default store;
