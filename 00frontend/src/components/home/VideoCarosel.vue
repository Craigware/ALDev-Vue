<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  videoArray: Array
});

function displayContent(e)
{
  const contentSelector = e.target.children[0];
  const videoPlayer = e.target.children[1];
  contentSelector.style.visibility = "visible";

  contentSelector.style.height = `${videoPlayer.clientHeight}px`;
}

function hideContent(e)
{
  const contentSelector = e.target.children[0];

  contentSelector.style.visibility = "hidden";
  console.log("!");
}


onMounted(() => {
  const carosels = document.getElementsByClassName("video-carosel");
  carosels[carosels.length - 1].addEventListener("mouseenter", displayContent);
  carosels[carosels.length - 1].addEventListener("mouseleave", hideContent);
});

</script>

<template>
  <div class="video-carosel">
    <div class="content-selector"></div>
    <video :src="props.videoArray[0]['file']" :type="props.videoArray[0]['type']" muted autoplay>
    </video>
  </div>
</template>

<style scoped>

.video-carosel {
  position: relative;
}

video {
  width: 100%;
  height: auto;
  border-radius: 10px;

  top: 50%;
  transform: translate(0,-50%);

  position: absolute;
}

.content-selector {
  position: absolute;

  width: 100%;
  border-radius: 10px;
  
  top: 50%;
  transform: translate(0,-50%);
  z-index: 1;


  background-color: black;
}

</style>