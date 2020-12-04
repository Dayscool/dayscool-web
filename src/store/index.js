import { createStore } from "vuex";

export default createStore({
  state: {
    //backURL: "http://localhost:5000/graphql",
    backURL: "http://52.87.141.219:32754/graphql",
    isLoggedIn: false,
    user: {
      id: -1,
      username: null,
      name: null,
      mail: null,
      birthDate: null,
      career: null,
      role: null,
    },
    currentPage: "",
  },
  mutations: {
    CHANGE_LOG_STATE(state) {
      state.isLoggedIn = !state.isLoggedIn;
    },
    LOG_USER(state, user) {
      state.user.id = user.id;
      state.user.username = user.username;
      state.user.name = user.name;
      state.user.mail = user.mail;
      state.user.birthDate = user.birthDate;
      state.user.career = user.career;
      state.user.role = user.role;
    },
    CHANGE_CURRENT_PAGE(state, currentPage) {
      state.currentPage = currentPage;
    },
    LOGOUT(state){
      state.user.id = "";
      state.user.username = "";
      state.user.name = "";
      state.user.mail = "";
      state.user.birthDate = "";
      state.user.career = "";
      state.user.role = "";
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
    swapPage({ commit }, page) {
      commit("CHANGE_CURRENT_PAGE", page);
    },
    logout({ state, commit }){
      commit("LOGOUT", state);
      commit("CHANGE_LOG_STATE", state);
    },
  },
  getters: {
    returnUser: (state) => {
      if (!state.isLoggedIn) {
        return "There is no logged user";
      } else {
        return state.user;
      }
    },
    isLoggedIn: (state) => {
      return state.isLoggedIn;
    },
    getCurrentView: (state) => {
      return state.currentPage;
    },
  },
  modules: {},
});
