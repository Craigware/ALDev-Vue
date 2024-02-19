<script setup>

import About from "../components/home/About.vue"
import InfoBoard from "@/components/home/InfoBoard.vue";

</script>

<template>
  <InfoBoard />
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
