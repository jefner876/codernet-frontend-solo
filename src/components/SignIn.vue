<script setup lang="ts">
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";
import { getUser } from "../../api";
import { useUserStore } from "@/stores/user";

const store = useUserStore();

const email = ref("");
const password = ref("");
const errMsg = ref("");

const register = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((firebaseUser) => { 

      getUser(firebaseUser.user.email).then((user) => {
        store._id = user._id;
        store.username = user.username;
        store.email = user.email;
        store.DOB = user.DOB;
        store.location = user.location;
        store.avatar = user.avatar;
        store.bio = user.bio;
      });

      router.push("/");
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>

<template>
  <div class="container">

  <h1>Sign In</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button class="button" @click="register">Submit</button></p>

  </div>

</template>

<style scoped>

  .container {
    font-family: Arial, Helvetica, sans-serif;
    padding: 20px;
    text-align: center;
    height: 40vh;
  }

  .button {
    background-color: grey;
    padding: 3px 5px;
    border: black solid 2px;
    color: white;
  }

</style>
