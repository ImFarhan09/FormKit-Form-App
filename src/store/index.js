import { createStore } from "vuex";

export default createStore({
  state: {
    userData: {},
  },
  getters: {},
  mutations: {
    setUser(state, payload) {
      state.userData=payload;
      console.log(state.userData);
    },
  },
  actions: {},
  modules: {},
});
