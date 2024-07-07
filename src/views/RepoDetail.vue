<template>
  <div class="repo-detail">
    <h1 class="repo-title">{{ repo.full_name }}</h1>
    <p class="repo-description">{{ repo.description }}</p>
    <p class="repo-stats">
      Stars: <span class="bold-text">{{ repo.stargazers_count }}</span>
    </p>
    <p class="repo-stats">
      Forks: <span class="bold-text">{{ repo.forks_count }}</span>
    </p>
    <a :href="repo.html_url" target="_blank" class="repo-link"
      >Перейти в профиль GitHub</a
    >
  </div>
</template>

<script>
import { api } from "../services/api/axios";

export default {
  data() {
    return {
      repo: {},
    };
  },
  async created() {
    const { owner, repo } = this.$route.params;
    try {
      const response = await api.get(`repos/${owner}/${repo}`);
      this.repo = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style scoped>
.repo-detail {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 100%;
}

.repo-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.repo-description {
  font-size: 16px;
  margin-bottom: 10px;
}

.repo-stats {
  font-size: 14px;
  margin-bottom: 5px;
}

.bold-text {
  font-weight: 600;
}

.repo-link {
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.repo-link:hover {
  background-color: #0056b3;
}
</style>
