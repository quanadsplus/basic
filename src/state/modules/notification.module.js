const initialState = {
    type: null,
    message: null
};

export default {
  namespaced: true,
  state: initialState,
  actions: {
    /**
     * Get config
     */
    success({ commit }, message) {
        commit('success', message);
    },
    error({ commit }, message) {
        commit('error', message);
    },
    clear({ commit }) {
        commit('clear');
    }
  },
  mutations: {
    success(state, message) {
        state.type = 'alert-success';
        state.message = message;
    },
    error(state, message) {
        state.type = 'alert-danger';
        state.message = message;
    },
    clear(state) {
        state.type = null;
        state.message = null;
    }
  },
};
