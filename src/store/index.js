// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    favorites: [],
  },
  mutations: {
    addFavorite(state, repo) {
      state.favorites.push(repo);
    },
  },
});
