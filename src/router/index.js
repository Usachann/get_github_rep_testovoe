import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import Favorites from "../views/Favorites.vue";
import RepoDetail from "../views/RepoDetail.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/favorites",
      name: "favorites",
      component: Favorites,
    },
    {
      path: "/repo/:owner/:repo",
      name: "repo-detail",
      component: RepoDetail,
    },
  ],
});
