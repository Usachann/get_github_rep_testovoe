<template>
  <header class="header">
    <nav class="header-nav">
      <ul class="header-ul">
        <li class="header-link">
          <router-link to="/" exact>Home</router-link>
        </li>
        <li class="header-link">
          <router-link to="/favorites">Favorites</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
}

.header-ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.header-link {
  display: inline;
  margin-right: 10px;
}

.header-link {
  color: #fff;
  text-decoration: none;
}

.header-link:hover {
  text-decoration: underline;
}
</style>
