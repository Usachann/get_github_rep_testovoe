// src/store/index.js
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
      const isDuplicate = state.favorites.some(
        (favorite) => favorite.id === repo.id
      );
      if (!isDuplicate) {
        state.favorites.push(repo);
      }
    },
  },
});
