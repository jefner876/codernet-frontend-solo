<script setup lang="ts">
import coderNET from '../img/CoderNET_.png'


</script>

<template>

  <section>
    <h3 class="text">Welcome to CoderNet</h3>
    <h2 class="text">The Social Media for Coders</h2>
    <img :src="coderNET" class="coderNet-img" />
    <p class="text">This is a hub for coders to discuss all coding topics from all demographics. If you want to discuss coding language, technology, or just have a good old chat with your fellow coders, then come along and jump into one of our many chat rooms designed just for you!</p>
  </section>  
</template>



<style scoped>

section {
  background-color: hsl(278, 54%, 89%);
}

.text {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}

.coderNet-img {
  display: flex;
  flex-wrap: wrap;
    width: auto;
    height: auto;
    margin-left: 25%;
    padding: 30px;
      border-radius: 10px;
      box-shadow: 0px 0px 4px black;

}
 
</style>