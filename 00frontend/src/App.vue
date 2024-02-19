<script setup>
import Foot from "./components/Foot.vue"
import Navigation from "./components/Navigation.vue"
import Banner from "./components/home/Banner.vue"
import { ref } from "vue";

</script>



<template>
    <Banner id="Banner" v-show="$route.name == 'home' "/>
    <Navigation />
    <Foot></Foot>
</template>

<style>

* {
  /* Some reason HTML and :root are refusing to work with binding variables, maybe because this hasnt loaded yet?
  That doesnt seem to make sense though. IDK this is how it will be done for now */

  --600-yellow: #d9d250;
  --400-yellow: #d19c41;

  --600-orange: #e88f4a;
  --500-orange: #d97e38;
  --400-orange: #c44727;
  --200-orange: #8a201a;

  --200-blue: #3a3959;

  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0;
  padding: 0;
}

main {
  margin: 0px 64px;
}

/* Temp fix, make custom scrollbar later */
*::-webkit-scrollbar {
  display: none;
}

</style>