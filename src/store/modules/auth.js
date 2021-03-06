const state = {
  user: null,
  authCheck: false,
};
const getters = {
  user: state => state.user,
  isAuthticated: state => !!state.user,
};
const mutations = {
  setAuthCheck(state, check) {
    state.authCheck = check ? true : false;
  },
  setUser(state, user) {
    state.user = user;
  },
};

const actions = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
