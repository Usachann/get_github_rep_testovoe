<template>
    <div>
    <h1>Главная</h1>
      <RepoList />
    </div>
  </template>
  
  <script>
  import RepoList from '../components/RepoList.vue';
  
  export default {
    components: {
      RepoList
    }
  };
  </script>
  