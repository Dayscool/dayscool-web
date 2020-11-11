import { createStore } from "vuex";
import { onLogout, apolloClient } from '@/vue-apollo';
//import { LOGGED_IN_USER } from '@/graphql/queries'
import {  REGISTER_USER } from '@/graphql/mutations';

export default createStore({
  state: {
    //backURL: "http://localhost:5000/graphql",
    backURL: "http://34.68.179.24/graphql",
    token: null,
    authStatus: false,
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
    SET_TOKEN (state, token) {
      state.token = token
    },
    CHANGE_LOG_STATE(state) {
      state.isLoggedIn = !state.isLoggedIn;
      console.log(state.isLoggedIn);
    },
    LOG_USER(state, user) {
      state.authStatus = true
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
    LOGOUT_USER (state) {
      state.authStatus = ''
      state.token = '' && localStorage.removeItem('apollo-token')
    }
  },
  actions: {
    changeLogState({ state, commit }) {
      commit("CHANGE_LOG_STATE", state);
    },
    //login({ commit }, user) {
      //commit("LOG_USER", user);
    //},
    loginPrint({ state }) {
      console.log(state.user);
    },
    swapPage({ commit }, page) {
      commit("CHANGE_CURRENT_PAGE", page);
    },
    async register ({ commit, dispatch }, form) {
      try {
        const { data } = await apolloClient.mutate({ mutation: REGISTER_USER, variables: { user2: {...form }} })
        const token = JSON.stringify(data.createUser.token)
        commit('SET_TOKEN', token)
        // onLogin(apolloClient, user.token)
        localStorage.setItem('apollo-token', token)
        dispatch('setUser')
      } catch (e) {
        console.log(e)
      }
    },/*
    async login ({ commit, dispatch }, authDetails) {
      try {
        const { data } = await apolloClient.mutate({ mutation: LOGIN_USER, variables: { ...authDetails } })
        const token = JSON.stringify(data.login.token)
        commit('SET_TOKEN', token)
        localStorage.setItem('apollo-token', token)
        dispatch('setUser')
      } catch (e) {
        console.log(e)
      }
    },*/
    /*async setUser ({ commit }) {
      const { data } = await apolloClient.query({ query: LOGGED_IN_USER })
      commit('LOGIN_USER', data.me)
    },*/
    async logOut ({ commit}) {
      commit('LOGOUT_USER')
      onLogout(apolloClient)
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.authStatus,
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
