<script setup lang="ts">
import coderNET from '../img/CoderNET_.png'


</script>

<template>

  <section>
    <h3 class="text">Welcome to CoderNET</h3>
    <h2 class="text">The Social Media for Coders</h2>
    <img :src="coderNET" class="coderNet-img" />
    <div class="container">
      <p class="text">This is a hub for coders to discuss all coding topics from all demographics. If you want to discuss coding language, technology, or just have a good old chat with your fellow coders, then come along and jump into one of our many chat rooms designed just for you!</p>
    </div>
  </section>  
</template>



<style scoped>

section {
  background-color: hsl(214, 36%, 57%);
}

.text {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  margin-left: 35%;
  column-count: 2;
  column-width: 50px;
  column-fill: auto;
}

.coderNet-img {
  display: flex;
  flex-wrap: wrap;
    width: 25%;
    height: auto;
    margin-left: 35%;
    padding: 30px;
      border-radius: 10px;
      box-shadow: 0px 0px 4px black;

}
 
</style>