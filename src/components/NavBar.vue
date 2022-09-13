<script setup lang="ts">
import {useUserStore} from '../stores/user'

const store = useUserStore()

</script>

<template class="NavBar">

<nav>
  <div class="container">
    <div class="user">

      <h2>LoggedInUser: {{store.username}}</h2>

    </div>
    <div class="links">
      <RouterLink class="link-home" to="/">Home</RouterLink> 
      <RouterLink class="link-discussion" to="/discussions">Discussions</RouterLink> 
      <RouterLink class="link-profile" to="/profile">Profile</RouterLink> 
      <RouterLink class="link-friends" to="/">Friends</RouterLink> 
    </div>
    
  </div>
  </nav>



</template>

<style scoped>

  * {
    margin: 0;
    padding: 0;
    background-color: hsl(278, 54%, 89%);
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
    background-color: blueviolet;
    padding-top: 10px;
    padding-bottom: 10px;


  }


  .link-home {

    background-color: grey;
    padding: 3px 5px;
    border: black solid 2px;
    color: white;

  

    /* border: black solid 2px;
    background-color: red;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 2px;
    padding-bottom: 2px; */

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


  }


</style>
