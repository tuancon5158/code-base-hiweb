const state = {
  messages: [],
  show: false,
};
const getters = {
  messages: state => state.messages,
  show: state => state.show,
};
const mutations = {
  setMessages(state, messages) {
    state.messages = messages;
  },
};
const actions = {
  setMessages(state, messages) {
    state.messages = messages;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
