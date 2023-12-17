<template>
    <div>
      <a-scene embedded arjs>
        <!-- Use the public directory for static assets -->
        <a-sky :src="img" rotation="0 -90 0"></a-sky>
      </a-scene>
    </div>
  </template>
  
  <script>
  import img from '../assets/thirukkural.jpg'
  
  export default {
    data() {
      return {
        img
      };
    }
  };
  </script>
  