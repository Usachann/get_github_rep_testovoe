<template>
  <div>
    <input
      class="search-input"
      v-model="query"
      @input="searchRepos"
      placeholder="Найти в GitHub"
    />
    <div v-if="isLoading">Поиск нужных репозиториев...</div>
    <div class="items-container" v-else>
      <RepoItem v-for="rep in repositories" :key="rep.id" :repo="rep" />
    </div>
  </div>
</template>

<script>
import { api } from "../services/api/axios";
import { throttle } from "lodash";

import RepoItem from "./RepoItem";

export default {
  components: { RepoItem },
  data() {
    return {
      query: "",
      repositories: [],
      isLoading: false,
    };
  },
  methods: {
    searchRepos: throttle(async function () {
      if (!this.query.length) {
        this.repositories = [];
        return;
      }

      this.isLoading = true;
      try {
        const response = await api.get(`/search/repositories?q=${this.query}`);
        this.repositories = response.data.items;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }, 500),
  },
};
</script>
<style scoped>
.search-input {
  padding: 10px;
  border: 2px solid #000000;
}
.items-container {
    padding: 10px;
}
</style>
