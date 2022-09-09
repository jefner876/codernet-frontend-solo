<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
import { useUserStore } from "../stores/user";
import { registerUser } from "../../api";

const store = useUserStore();

const email = ref("");
const password = ref("");
const username = ref("");

const register = () => {
  const auth = getAuth();

  const newUser = {
    username: username.value,
    email: email.value,
  };

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      router.push("/");
    })
    .catch((error) => {
      alert(error.message);
    });

  registerUser(newUser).then((user) => {
    store._id = user._id;
    store.username = user.username;
    store.email = user.email;
    store.location = user.location;
    store.avatar = user.avatar;
    store.bio = user.bio;
    store.DOB = user.DOB;
  });
};
</script>

<template>
  <h1>Create an Account</h1>
  <p><input type="text" placeholder="Username" v-model="username" /></p>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p><button @click="register">Submit</button></p>
</template>

<style scoped></style>
