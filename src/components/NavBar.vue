<script setup lang="ts">
import {useUserStore} from '../stores/user'

const store = useUserStore()

</script>

<template class="NavBar">

<nav>
  <h2>LoggedInUser: {{store.username}}</h2>
    <div >
      <RouterLink to="/">Home</RouterLink> {{ "|" }}
      <RouterLink to="/discussions">Discussions</RouterLink> {{ "|" }}
      <RouterLink to="/profile">Profile</RouterLink> {{ "|" }}
      <RouterLink to="/">Friends</RouterLink> {{ "|" }}

    </div>

  </nav>



</template>

<style scoped>


</style>
