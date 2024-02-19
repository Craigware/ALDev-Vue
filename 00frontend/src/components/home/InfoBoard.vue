<script setup>

import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Post from './Post.vue';
import router from '@/router';
import VideoCarosel from './VideoCarosel.vue';

function redirectVieMore()
{
  router.push("/Devlog");
}

const videoArray = [
  {
    "file": "src/assets/videos/2-18-24-devV.mp4",
     "type": "video/mp4" 
    }
];

</script>

<template>

  <div id="InfoBoard">
    <!-- <video src="..\..\assets\videos\2-18-24-devV.mp4" type="video/mp4" autoplay muted>
    </video> -->

    <VideoCarosel class="info-vc" :videoArray="videoArray"></VideoCarosel>

    <div class="recent-logs">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <div class="load-more">
        <button @click="redirectVieMore();">View more</button>
      </div>
    </div>
  </div>

</template>

<style scoped>

#InfoBoard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px;
}

.info-vc {
  border-radius: 16px;
  min-width: 480px;
  flex: 1;
}

.recent-logs {
  margin: 4px;
  flex: 1;
  flex-shrink: 0.5;

  max-height: 520px;

  display: flex;
  gap: 8px;
  flex-direction: column;
  overflow-y: scroll;
  position: relative;
}

.load-more {
  background-image: linear-gradient(to top, black, rgba(0,0,0,0));
  min-width: 100%;
  min-height: 240px;
  bottom: -40%;
  position: absolute;
}

button {
  min-height: 48px;
  background-color: var(--600-yellow);
  border-radius: 10px;
  width: 240px;

  border: none;

  
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 16px;
  font-weight: bold;

  position: absolute;
  bottom: 15%;
  left: 50%;

  transform: translate(-50%, 0);

  transition: box-shadow 1s;
}

button:hover {
  box-shadow: 0px 0px 10px white;
}

button:active {
  background-color: var(--600-orange);
}

</style>