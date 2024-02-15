
<script setup>
import * as THREE from 'three';
import { onMounted, render } from 'vue';

const bannerHeight = 320;

onMounted(() => {
  let canvas = document.getElementById("Banner");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / bannerHeight, 0.1, 1000 );

  const renderer = new THREE.WebGLRenderer({canvas: canvas});
  renderer.setSize( window.innerWidth, bannerHeight );

  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial( { color: 'red' } );
  const cube = new THREE.Mesh( geometry, material );


  const light = new THREE.PointLight( 0xff0000, 1, 1000 );
  light.castShadow = true;

  const dirlight = new THREE.DirectionalLight( 0xFFFFFF );
  dirlight.target = cube;
  dirlight.position.set(-1,3,3);
  scene.add( dirlight );

  const helper = new THREE.DirectionalLightHelper( dirlight, 3 );
  scene.add( helper );

  light.position.set( 2, 0, 4 );
  scene.add( light );


  cube.rotation.set(0,20,10);
  cube.position.set(0,0,0);
  scene.add( cube );
  camera.position.z = 5;


  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  renderer.render( scene, camera );
});

function test()
{
  console.log("w")
}
</script>

<template>
  <canvas id="Banner">
  </canvas>
</template>

<style>
  canvas {
    display: block;
  }
</style>