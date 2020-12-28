import Vuex from 'vuex';

class TestVuex {
  constructor(callback, id) {
    this.id = id;

    this.store = new Vuex.Store({
      state: {
        ids: [],
        isSelectAll: false,
      },
      mutations: {
        /**
         * Set ids
         */
        setIds(state, ids) {
          state.ids = ids;
        },

        /**
         * Push an id
         *
         * @return bool
         */
        pushId(state, id) {
          if (state.ids.indexOf(id) === -1) {
            state.ids.push(id);
            return true;
          }

          return false;
        },

        /**
         * Remove an id
         *
         * @return bool
         */
        removeId(state, id) {
          if (state.ids.indexOf(id) === -1) {
            return false;
          }

          state.ids.splice(state.ids.indexOf(id), 1);
          return true;
        },

        /**
         * Set select all
         */
        setSelectAll(state, bool) {
          state.isSelectAll = bool ? true : false;
        },
      },
    });
    this.callback = function() {
      console.log('callback');
    };
  }
  getIds() {
    return this.store.state.ids;
  }
  isSelected(id) {
    return this.isSelectAll() || this.store.state.ids.indexOf(id) > -1 ? true : false;
  }
  isSelectAll() {
    return this.store.state.isSelectAll;
  }
  select(id) {
    if (this.store.state.ids.indexOf(id) === -1) {
      this.store.commit('pushId', id);
      console.log('this.store.state.ids', this.store.state.ids);
    }
  }
  unselect(id, ignoreCallback) {
    let idIndex = this.store.state.ids.indexOf(id);
    if (idIndex > -1) {
      this.store.commit('removeId', id);

      // If ignore callback signal wasn't set
      if (!ignoreCallback) {
        this.callback(this.getData(), this.id);
      }
    }

    // Unselect all too
    if (this.isSelectAll()) {
      this.unselectAll();
    }
  }

  /**
   * Select all
   */
  selectAll() {
    this.store.commit('setSelectAll', true);
    this.callback(this.getData(), this.id);
  }

  /**
   * unselectAll
   */
  unselectAll() {
    this.store.commit('setSelectAll', false);
    this.store.commit('setIds', []);
  }
  getData() {
    console.log(12, this.id);
    return JSON.parse(
      JSON.stringify({
        ids: this.store.state.ids,
        isSelectAll: this.store.state.isSelectAll,
      }),
    );
  }
}
export default TestVuex;
