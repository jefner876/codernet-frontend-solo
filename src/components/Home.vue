<script setup lang="ts">
import coderNET from '../img/CoderNET_.png'


</script>

<template>

  <section>
    <div class="container">
    <h2 class="text">Welcome to CoderNET</h2>
    <h3 class="text">The Social Media for Coders</h3>
    <img :src="coderNET" class="coderNet-img" />
      <p class="text">This is a hub for coders to discuss all coding topics from all demographics. If you want to discuss coding language, technology, or just have a good old chat with your fellow coders, then come along and jump into one of our many chat rooms designed just for you!</p>
    </div>
  </section>  
</template>



<style scoped>

  * {
    margin: 0;
    padding: 0;
  }
  
  h3 {
    padding-bottom: 1em;
  }

  h2 {
    padding-bottom: 1em;
  }

  p {
    padding-top: 1em;
    padding-bottom: 1em;
    text-align: center;
  padding-left: 20%;
  padding-right: 20%;

  }


.container {
  text-align: center;
  padding-top: 1em;
  padding-left: 20%;
  padding-right: 20%;
  height: 80vh;
}

.coderNet-img {
  /* display: flex;
  flex-wrap: wrap; */
  text-align: center;
   width: 60%;
   height: auto;
      border-radius: 10px;
      box-shadow: 0px 0px 4px black;

}
 
</style>