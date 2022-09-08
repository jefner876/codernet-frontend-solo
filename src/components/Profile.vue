<script setup lang="ts">
import { ref, reactive } from "vue";

let DOB = ref("");
let location = ref("");
let bio = ref("");

let buttonStatus = reactive({ edit: true });

const profile = reactive({
  username: "Hello",
  email: "Hello@hello.com",
  DOB: 0,
  location: "Manchester",
  avatar:
    "https://gravatar.com/avatar/494331cd1db71a9c5928845bc556782b?s=400&d=robohash&r=x",
  bio: "Coding....",
});

const handleClick = (event: any) => {
  event.preventDefault();

  buttonStatus.edit = !buttonStatus.edit;

  profile.DOB = parseInt(DOB.value);
  profile.location = location.value;
  profile.bio = bio.value;
};
</script>

<template>
  <form>
    <h2>Username: {{ profile.username }}</h2>
    <img :src="profile.avatar" />
    <p>Email: {{ profile.email }}</p>
    <p>Age: {{ profile.DOB }}</p>
    <input
      type="text"
      placeholder="DOB"
      v-model="DOB"
      v-if="buttonStatus.edit"
    />
    <p>Location: {{ profile.location }}</p>
    <input
      type="text"
      placeholder="location"
      v-model="location"
      v-if="buttonStatus.edit"
    />
    <p>About me: {{ profile.bio }}</p>
    <input
      type="text"
      placeholder="bio"
      v-model="bio"
      v-if="buttonStatus.edit"
    />
    <button @click="handleClick">Edit</button>
  </form>
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
