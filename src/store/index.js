import { createStore } from "vuex";

export default createStore({
  state: {
    backURL: "http://34.66.222.170/graphql",
    isLoggedIn: false,
    user: {
      id: null,
      username: "",
      name: "",
      mail: "",
      birthDate: "",
      career: "",
      role: "",
      entryTime: "",
    },
  },
  mutations: {
    LOG_USER(state, newUser) {
      state.user.id = newUser.id;
      state.user.username = newUser.username;
      state.user.name = newUser.name;
      state.user.mail = newUser.mail;
      state.user.birthDate = newUser.birthDate;
      state.user.career = newUser.career;
      state.user.entryTime = newUser.entryTime;
    },
  },
  actions: {
    login({ state, commit }) {
      commit("LOG_USER", state);
    },
    loginPrint({ state }) {
      console.log(state.user);
    },
  },
  modules: {},
});
