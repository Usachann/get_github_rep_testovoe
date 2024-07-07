<template>
  <div class="repo-item">
    <div class="repo-image-container">
      <img :src="repo.owner.avatar_url" alt="avatar" />
      <a class="repo-link" :href="repo.html_url" target="_blank">{{
        repo.full_name
      }}</a>
    </div>
    <div class="repo-datas-container">
      <p>
        Stars: <span class="bold-text">{{ repo.stargazers_count }}</span>
      </p>
      <p>
        Forks: <span class="bold-text">{{ repo.forks_count }}</span>
      </p>
    </div>
    <div class="buttons-container">
      <router-link :to="`/repo/${repo.owner.login}/${repo.name}`"
        >Подробнее</router-link
      >
      <button v-if="button" class="favorite-button" @click="addToFavorites(repo)">
        Добавить в избранное
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    repo: Object,
    button: Boolean,
  },
  methods: {
    addToFavorites(repo) {
      this.$store.commit("addFavorite", repo);
    },
  },
  //   mounted() {
  //     console.log("repo", this.repo)
  //   }
};
</script>

<style scoped>
.repo-link {
  color: blue;
}

.repo-link:hover {
  text-decoration: underline;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  gap: 10px;
}
.favorite-button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.favorite-button:hover {
    background-color: #0056b3;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}
.repo-image-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.repo-datas-container {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
}
.bold-text {
  font-weight: 600;
}
.repo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;

  border-bottom: 1px solid #000000;
}
.repo-item img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
</style>
