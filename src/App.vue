<script setup>
import Foot from "./components/Foot.vue"
import Navigation from "./components/Navigation.vue"
import Banner from "./components/Banner.vue"
import { ref } from "vue";

class ColorTheme {
  ShadowColor;
  HighlightColor;

  PrimaryColor;
  SecondaryColor;

  NeutralColor;

  constructor(primaryColor, secondaryColor, neutralColor, shadowColor, highlightColor )
  {
    this.PrimaryColor = primaryColor;
    this.SecondaryColor = secondaryColor;
    this.NeutralColor = neutralColor;
    this.ShadowColor = shadowColor;
    this.HighlightColor = highlightColor;
  }
}

const darkTheme = new ColorTheme(
  '#B9ECC9', // primary
  '#B9ECC9', // secondary
  '#B9ECC9', // neutral
  '#B9ECC9', // shadow
  '#B9ECC9' // highlight
);


const currentTheme = ref(darkTheme); 

</script>



<template>
    <Banner id="Banner" v-show="this.$route.name == 'home' "/>
    <Navigation />
    <Foot></Foot>
</template>

<style>
* {
  /* Some reason HTML and :root are refusing to work with binding variables, maybe because this hasnt loaded yet?
  That doesnt seem to make sense though. IDK this is how it will be done for now */

  --shadow-color: v-bind('currentTheme.ShadowColor');
  --highlight-color: v-bind('currentTheme.HighlightColor');

  margin: 0;
  padding: 0;
}
</style>