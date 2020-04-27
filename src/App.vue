<template>
  <div id="app" class="container-fluid gray-section">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped>
  .gray-section {
    background-color: rgba(154, 154, 154, 0.32);
  }
</style>
