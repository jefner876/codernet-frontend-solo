<script setup lang="ts">
import {useUserStore} from '../stores/user'

const store = useUserStore()

</script>

<template class="NavBar">

<nav>
  <div class="container">
    <div class="user">

      <img class="small-avatar" :src="store.avatar" />

      <h2>{{store.username}}</h2>

    </div>
    <div class="links">
      <RouterLink  class="nav-button nav-button1" to="/">Home</RouterLink> 
      <RouterLink class="nav-button" to="/discussions">Discussions</RouterLink> 
      <RouterLink class="nav-button" to="/profile">Profile</RouterLink> 
      <RouterLink class="nav-button" to="/">Friends</RouterLink> 
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

  .container {
    width: 80%;
    border: solid black 2px;
    margin: auto;
    padding-top: 12px;
    
  }

  .links {
    font-family: Arial, Helvetica, sans-serif;
    color: red;
    border-top: 2px black solid;
    background-color: hsl(238, 54%, 70%);
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .nav-button{
    font-size: large;


    background-color: hsl(238, 54%, 45%);
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
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

  .small-avatar {
    max-width: 20px;
    max-height: 20px;
  }


</style>
