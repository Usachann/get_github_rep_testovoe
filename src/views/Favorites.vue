<template>
    <div>
      <h1>Избранное</h1>
      <RepoItem v-for="repo in favorites" :key="repo.id" :repo="repo" :button="false" />
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  import RepoItem from '../components/RepoItem.vue';
  
  export default {
    components: {
      RepoItem
    },
    computed: {
      ...mapState(['favorites'])
    }
  };
  </script>
  