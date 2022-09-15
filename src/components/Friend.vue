<script setup lang="ts">
    import { getFriends } from '../../api';
    import { ref } from 'vue'

    const friendsList = ref([])

    getFriends().then((value)=> {
        console.log(value)

        friendsList.value = value
    })


</script>

<template>

    <div class="container">
        
    <h2 class="header">COMING SOON... :D</h2>




    <div v-for="friend in friendsList" class="friend" :key="friend._id">
        <div class="card">

            <h2>Username: {{friend.username}}</h2>
            <img :src="friend.avatar" /><br/>
            <button class="button">Add Friend</button>
            <button class="button">Delete Friend</button>
            
        </div>
      

    </div>
</div>


</template>

<style scoped>


    .container {

        margin-bottom: 5em;
    }

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

    .button {
        margin-top: 1em;
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

</style>
