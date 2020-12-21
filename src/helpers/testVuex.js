import Vuex from 'vuex';

class TestVuex {
  constructor() {
    this.store = new Vuex.Store({
      state: {
        count: 1,
        isSelectAll: false,
      },
      mutations: {
        add(state, count) {
          console.log('12');
          state.count = state.count + 1;
        },
        sub(state, count) {
          state.count = state.count - 1;
        },
      },
    });
  }
  sub() {
    this.store.commit('sub');
  }
  add() {
    console.log(1212);
    this.store.commit('add');
  }
}
export default TestVuex;
