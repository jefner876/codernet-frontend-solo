<script setup lang="ts">
    import { getFriends } from '../../api';
    import { ref } from 'vue'

    const friendsList = ref<any>([])

    getFriends().then((value)=> {
        console.log(value)

        friendsList.value = value
    })


</script>

<template>

    <h2 class="header">COMING SOON... :D</h2>




    <div v-for="friend in friendsList" class="friend" :key="friend._id">
        <div class="card">

            <h2>Username:{{friend.username}}</h2>
            <img :src="friend.avatar" /><br/>
            <button class="button">Add Friend</button>
            <button class="button">Delete Friend</button>
            
        </div>
      

    </div>

</template>

<style scoped>

    .header {
        text-align: center;
        text-decoration: underline;
    }


    .friend {
        text-align: center;
        margin-top: 1em;
  
    }

    img {
        max-width: 150px;
        max-height: 150px;
        min-width: 150px;
        max-height: 150px;
    }

    button {
        margin-top: 1em;

    }

</style>
