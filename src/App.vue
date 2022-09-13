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
        console.log(user);
        store._id = user._id;
        store.username = user.username;
        store.email = user.email;
        store.DOB = user.DOB;
        store.location = user.location;
        store.avatar = user.avatar;
        store.bio = user.bio;
      })

      isLoggedIn.value = true;

    } else {

      isLoggedIn.value = false;
    }
  })


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
    <div v-if="isLoggedIn">
      <NavBar />
      <button class="button" @click="handleSignOut" >Sign Out</button>
    </div>
    <div v-if="!isLoggedIn">
      <RouterLink to="/register">Register</RouterLink>
      <RouterLink to="/signin">Sign In</RouterLink>
    </div>
  </nav>

  <RouterView />
</div>

</template>

<style scoped>

  * {
    margin: 0;
    padding: 0;
    background-color: hsl(278, 54%, 89%);
  }

  .page-container {
    height: 95vh;
    padding-top: 30px;
  }


nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

  .button {
    margin-top: 5px;
    background-color: grey;
    padding: 3px 5px;
    border: black solid 2px;
    color: white;

  }


@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


}
</style>
