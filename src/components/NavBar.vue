<script setup lang="ts">
import Home from "../components/Home.vue";
</script>

<template class="NavBar">

<nav>
    <div >
      <RouterLink to="/">Home</RouterLink> {{ "|" }}
      <RouterLink to="/">Discussions</RouterLink> {{ "|" }}
      <RouterLink to="/">Profile</RouterLink> {{ "|" }}
      <RouterLink to="/">Friends</RouterLink> {{ "|" }}

    </div>

  </nav>



</template>

<style scoped>


</style>
