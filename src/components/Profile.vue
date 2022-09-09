<script setup lang="ts">
import { ref, reactive } from "vue";
import { patchProfile } from "../../api";
import { useUserStore } from "../stores/user";

const store = useUserStore();

let DOB = ref("");
let location = ref("");
let bio = ref("");

let buttonStatus = reactive({ edit: false, text: "Edit" });

const profile = reactive({
  _id: store._id,
  username: store.username,
  email: store.email,
  DOB: store.DOB,
  location: store.location,
  avatar: store.avatar,
  bio: store.bio,
});

const handleClick = (event: any) => {
  event.preventDefault();

  buttonStatus.edit = !buttonStatus.edit;
  buttonStatus.text === "Edit"
    ? (buttonStatus.text = "Change")
    : (buttonStatus.text = "Edit");

  if (buttonStatus.text === "Edit") {
    profile.DOB = DOB.value;
    profile.location = location.value;
    profile.bio = bio.value;

    const newProfile = profile;
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
  <form>
    <h2>Username: {{ profile.username }}</h2>
    <img :src="profile.avatar" />
    <p>Email: {{ profile.email }}</p>
    <p>Age: {{ profile.DOB }}</p>
    <input
      type="date"
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
    /><br /><br />
    <button @click="handleClick">{{ buttonStatus.text }}</button>
  </form>
</template>

<style scoped>
img {
  width: 200px;
  height: 200px;
}
</style>
