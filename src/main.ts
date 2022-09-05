import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBp6R7o5BKfdY5IfD_Hr2gIyrn8ey2Xy10",
    authDomain: "auth-development-e477e.firebaseapp.com",
    projectId: "auth-development-e477e",
    storageBucket: "auth-development-e477e.appspot.com",
    messagingSenderId: "852500900439",
    appId: "1:852500900439:web:f713d28ec4724b8ca25112"

};

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
