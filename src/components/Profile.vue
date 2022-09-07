<script setup lang="ts">
    import {ref} from 'vue'

const bool = false;

const profile = ref({
  username: 'Hello',
  email: 'Hello',
  DOB: 0,
  location: 'Manchester',
  avatar: "https://gravatar.com/avatar/494331cd1db71a9c5928845bc556782b?s=400&d=robohash&r=x",
  bio: 'Coding....'
});


</script>

<template>

    <h2>Username: {{profile.username}}</h2>
    <img  :src="profile.avatar"/>
    <p>Email: {{profile.email}}</p>
    <p>Age: {{profile.DOB}}</p>
    <p>Location: {{profile.location}}</p>
    <p>About me: {{profile.bio}}</p>
  

</template>

<style scoped>
    img {
        width: 200px;
        height: 200px;
    }

</style>
