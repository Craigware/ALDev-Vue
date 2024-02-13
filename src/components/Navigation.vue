<template>
  <nav id="Navigation">
    <a class="nav-item" href="#Banner">Home</a>
    <a class="nav-item" href="#About">About</a>
    <a class="nav-item">Development Log</a>
    <a class="nav-item">Releases</a>
    <a class="nav-item">In Development</a>
  </nav>
</template>

<style scoped>
  #Navigation {
    padding: 8px;
    background-color: lightblue;
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
    background-color: rgba(0, 0, 255, 0.192);
  }
</style>