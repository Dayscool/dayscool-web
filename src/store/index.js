import { createStore } from "vuex";

export default createStore({
  state: {
    backURL: "http://34.66.222.170/graphql",
    isLoggedIn: false,
    user: {
      id: -1,
      username: null,
      name: null,
      mail: null,
      birthDate: null,
      career: null,
      role: null
    },
  },
  mutations: {
    CHANGE_LOG_STATE(state){
      state.isLoggedIn = !state.isLoggedIn;
    },
    LOG_USER(state, user) {
      state.user.id = user.id;
      state.user.username = user.username;
      state.user.name = user.name;
      state.user.mail = user.mail;
      state.user.birthDate = user.birthDate;
      state.user.career = user.career;
    },
  },
  actions: {
    changeLogState({ state, commit }) {
      commit("CHANGE_LOG_STATE", state);
    },
    login({ commit }, user) {
      commit("LOG_USER", user);
    },
    loginPrint({ state }) {
      console.log(state.user);
    },
  },
  modules: {},
});
