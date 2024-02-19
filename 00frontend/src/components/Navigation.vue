<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav id="Navigation">
    <RouterLink to="/" class="nav-item" >Home</RouterLink>
    <RouterLink to="/Devlog" class="nav-item" >Development Log</RouterLink>
    <RouterLink to="/Releases" class="nav-item" >Releases</RouterLink>
    <RouterLink to="/Projects" class="nav-item" >Projects</RouterLink>
  </nav>

  <RouterLink to="/Projects/CreatureCrawler" />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

  #Navigation {
    padding: 8px;
    background-color: var(--600-orange);
    justify-content: space-evenly;
  }

  .nav-item {
    padding: 8px;
    cursor: pointer;
    font-family: sans-serif;

    text-decoration: none;
    color: black;
  }
  
  .nav-item:hover {
    background-color: var(--600-yellow);
  }

</style>