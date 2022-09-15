<script setup lang="ts">
import { ref, reactive } from "vue";
import { patchProfile } from "../../api";
import { useUserStore } from "../stores/user";

const store = useUserStore();

let DOB = ref("");
let location = ref("");
let bio = ref("");
let avatar = ref("")

let buttonStatus = reactive({ edit: false, text: "Edit" });

const handleClick = (event: any) => {
  event.preventDefault();

  buttonStatus.edit = !buttonStatus.edit;
  buttonStatus.text === "Edit"
    ? (buttonStatus.text = "Change")
    : (buttonStatus.text = "Edit");

  if (buttonStatus.text === "Edit") {

    if (avatar.value !== "") {
      store.avatar = avatar.value
    }

    store.DOB = DOB.value;
    store.location = location.value;
    store.bio = bio.value;

    location.value = "";
    bio.value = "";

    const newProfile = {
      _id: store._id,
      username: store.username,
      email: store.email,
      DOB: store.DOB,
      location: store.location,
      avatar: store.avatar,
      bio: store.bio,
    };

    const id = newProfile._id;

    patchProfile(newProfile, id).then((updatedProfile) => {
      store._id = updatedProfile._id;
      store.username = updatedProfile.username;
      store.email = updatedProfile.email;
      store.DOB = updatedProfile.DOB;
      store.location = updatedProfile.location;
      store.avatar = updatedProfile.avatar;
      store.bio = updatedProfile.bio;
    });
  }
};
</script>

<template>



  <div class="wrap-container">

    <form class="container">
      
      <h2>Username: {{ store.username }}</h2>
      <img :src="store.avatar" />
      
      
      <div class="form-block">
        <input type="text" placeholder="new avatar URL" v-model="avatar" v-if="buttonStatus.edit" />
        <p>Email: {{ store.email }}</p>
        <p>DOB: {{ store.DOB }}</p>
        <input
        type="date"
        placeholder="DOB"
        v-model="DOB"
        v-if="buttonStatus.edit"
        />
        <p>Location: {{ store.location }}</p>
        <input
        type="text"
        placeholder="location"
        v-model="location"
        v-if="buttonStatus.edit"
        />
        <p>About me: {{ store.bio }}</p>
        <input
        type="text"
        placeholder="bio"
        v-model="bio"
        v-if="buttonStatus.edit"
        />
        
      </div>
      
      <br />
      
      
    </form>
  </div>

  <div class="button-container">
    
    <button class="button" @click="handleClick">{{ buttonStatus.text }}</button>
  </div>

</template>

<style scoped>

* {
    margin: 0;
    padding: 0;
  }

  .container {
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    text-align: center;
    height: 40vh;
    

  }

  .form-block {
    text-align: left;
    transform: translate(-50%, 0);
    position: fixed;
    margin-top: 1em;
    left: 50.4%;
    line-height: 1.5rem;
    

  }

  .button {
    padding: 3px 5px;
    color: white;

  background-color: hsl(238, 54%, 45%);;
  border: black solid 2px;
  color: white;

  }

  h2 {
    margin-bottom: 1em;
  }

  .button-container {
    padding-top: 10px;
    display: flex; 
    align-items: center;
    justify-content: center; 
  }

  .wrap-container {
    padding-bottom: 45px;
  }

img {
  max-width: 200px;
  max-height: 200px;
  min-width: 200px;
  min-height: 200px;

}
</style>
