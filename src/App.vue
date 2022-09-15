<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";
import NavBar from "./components/NavBar.vue";
import { useUserStore } from "./stores/user";
import { getUser } from "../api";

const store = useUserStore();
const isLoggedIn = ref(false);

let auth: any;

onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      getUser(user.email).then((user) => {
        store._id = user._id;
        store.username = user.username;
        store.email = user.email;
        store.DOB = user.DOB;
        store.location = user.location;
        store.avatar = user.avatar;
        store.bio = user.bio;
      });

      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const handleSignOut = () => {
  signOut(auth).then(() => {
    store._id = "";
    store.username = "";
    store.email = "";
    store.location = "";
    store.avatar = "";
    store.bio = "";
    store.DOB = "";

    router.push("/signin");
  });
};
</script>

<template>
  <div class="page-container">
    <nav>
      <div v-if="isLoggedIn" >
        <NavBar />
        <div class="user">
        <img class="small-avatar" :src="store.avatar" />
      
         <h2>{{store.username}}</h2>
      
         <button class="button" @click="handleSignOut">Sign Out</button>
    </div>
      </div>
      <div v-if="!isLoggedIn">
        <RouterLink to="/register" class="login-button left-button">Register</RouterLink>
        <RouterLink to="/signin" class="login-button">Sign In</RouterLink>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  background-color: hsl(238, 36%, 89%);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
h2 {
  margin: 0;
}

.page-container {
  height: 95vh;
  padding-top: 10px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

.user{
  position:absolute;
  top: 60px;
  right:8vw;
}
.button {
  margin-top: 5px;
  background-color: hsl(238, 54%, 45%);;
  padding: 3px 5px;
  border: black solid 2px;
  color: white;
  /* float: right;
  margin-right: 10vw; */
}

.small-avatar {
    max-width: 20px;
    max-height: 20px;
  }
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}

.login-button{
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

.left-button{
  border-left: black solid 2px;
}
</style>
