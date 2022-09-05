<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import router from "@/router";
  
  const email = ref("");
  const password = ref("");
  const register = () => {

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        router.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
      
  };
  </script>
  