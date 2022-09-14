<script setup lang="ts">
import {useUserStore} from '../stores/user'
import coderNET from '../img/CoderNET_.png'

const store = useUserStore()

</script>

<template class="NavBar">

<nav>
  <div class="container">
    <div class = "top-container">

      <img :src="coderNET" class="logo" />
    </div>

    <div class="links">
      <RouterLink  class="nav-button nav-button1" to="/">Home</RouterLink> 
      <RouterLink class="nav-button" to="/discussions">Discussions</RouterLink> 
      <RouterLink class="nav-button" to="/profile">Profile</RouterLink> 
      <RouterLink class="nav-button" to="/friends">Friends</RouterLink> 
    </div>
    
  </div>
  </nav>



</template>

<style scoped>

  * {
    margin: 0;
    padding: 0;
    background-color: hsl(238, 54%, 89%);
  }

  .user {
    font-family: Arial, Helvetica, sans-serif;
    padding-bottom: 12px;
  }
.top-container{
  display: flex;
  justify-content: center;
}
  .container {
    width: 94%;
    border: solid black 2px;
    margin: auto;
   
  }
  
    .logo {
      max-width: 120px;
      max-height: 120px;
      padding: .5rem;
    }

  .links {
    font-family: Arial, Helvetica, sans-serif;
    color: red;
    border-top: 2px black solid;
    background-color: hsl(238, 54%, 70%);
    padding-top: 20px;
    padding-bottom: 20px;
    max-width: 96vw;
  }

  .nav-button{
    font-size: large;


    background-color: hsl(238, 54%, 45%);
    padding: 0.5rem;
    padding-left: 2vw;
    padding-right: 2vw;
    color: white;
    border: none;


    border-top: black solid 2px;
    border-bottom: black solid 2px;
    border-right: black solid 2px;
  }
  .nav-button1 {
    border-left: black solid 2px;
  }

  /* .link-home {
    background-color: grey;
    padding: 3px 5px;
    border: black solid 2px;
    color: white;
  }

  .link-discussion {
    background-color: grey;
    padding: 3px 5px;
    border: none;
    color: white;

    border-top: black solid 2px;
    border-bottom: black solid 2px;
    border-right: black solid 2px;
  }

  .link-profile {
    background-color: grey;
    padding: 3px 5px;
    border: none;
    color: white;

    border-top: black solid 2px;
    border-bottom: black solid 2px;
    border-right: black solid 2px;
  }

  .link-friends {
    background-color: grey;
    padding: 3px 5px;
    border: none;
    color: white;

    border-top: black solid 2px;
    border-bottom: black solid 2px;
    border-right: black solid 2px;
  } */



</style>
