<script setup lang="ts">
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
import {useUserStore} from '../stores/user'

const store = useUserStore()


const email = ref("");
const password = ref("");
const username = ref("")

const register = () => {
  const auth = getAuth();

  store.user = username.value


  // console.log(username.value)
  // email and username is accessed here so use API here in promise.all to send to backend
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      router.push("/");
    })
    .catch((error) => {
      alert(error.message);
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

<style scoped>

</style>
