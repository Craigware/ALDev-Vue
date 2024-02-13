<script setup>

import Banner from "./Banner.vue"
import Navigation from "./Navigation.vue"
import About from "./About.vue"

</script>

<template>
  <Banner />
  <Navigation />
  <div id="InfoBoard">
    <img />
      
  </div>
  <About />
</template>

<style scoped>
  #InfoBoard {
    margin: 16px;
  }

  #InfoBoard img {
    height: 520px;
    width: 960px;
  }
</style>
