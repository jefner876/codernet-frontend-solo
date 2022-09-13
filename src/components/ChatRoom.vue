<script setup lang="ts">
import { ref } from "vue";
import {io} from 'socket.io-client'
import {useUserStore} from '../stores/user'
import moment from 'moment'
import {useRoute} from "vue-router";
import { getMessagesByRoom } from "../../api";

const route = useRoute()

const store = useUserStore()

//room and username for multiple rooms
const room = route.params.room //gives you name of room from URL
const username = store.username
const userId= store._id

let oldMessages = ref('')

getMessagesByRoom(room).then((data) => {
  console.log(data.messages);
  oldMessages.value = data.messages
  
})


const currentUser = ref(""); //have been using global context in place of this.

const welcomeMessage = ref('')
const messages = ref([]);
const chatText = ref("");

const socket = io("http://localhost:3000",{ transports: ['websocket'] })
socket.on('userJoin', (message) => {
  console.log(message);
})

socket.emit('joinRoom', {username,room, userId})

socket.on('welcomeMessage', (data) => {
  console.log(data);
  welcomeMessage.value = data
  console.log(welcomeMessage);
})
socket.on('message:received', (data) => {
  messages.value = messages.value.concat(data)
})

//message for when user leaves (might need to put this on specific rooms)
socket.on('disconnect', (data) => {
  console.log(data);
})



const sendMessage = () => {
  addMessage();  
  chatText.value = "";
};

const addMessage = () => {
  //get message text
  const chatMessage = {
    id: new Date().getTime(),
    date: moment().format('DD/MM/YYYY h:mm a'),
    text: chatText.value,
    user: store.username,
  };
  //emitting message to server
  const socket = io("http://localhost:3000",{ transports: ['websocket'] } )

  //need to send username and room so socket io works with multiple rooms
  socket.emit('chatMessage', {chatMessage, username, room, userId})
};
</script>

<template>

  <div>
    <div class="list-container">
      Hello {{store.username}}👋  You are now in the {{room}} chatroom! <br />
      <b>Admin</b> : Welcome to the chat room! Please respect other users 🧑🏼‍💻 - Pinned Message <br />
      <div class="message-history" v-for="message in oldMessages" >
        <b>
          {{message["user"].username}}
        </b>
        : {{ message.body }}  - {{moment(message.created_at).format('DD/MM/YYYY h:mm a')}}
      
      </div>
      <div v-for="message in messages" :key="message.id">
        <b>
          {{ message.user }}
        </b>
        : {{ message.text }}  - {{message.date}}
      </div>
    </div>
    <div class="text-input-container">
      <textarea
        v-model="chatText"
        class="text-message"
        v-on:keyup.enter="sendMessage"
      >
      </textarea>
    </div>
  </div>
</template>

<style scoped>
.parent-container {
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  position: fixed;
  /* padding-top: 150px; */
}
.name-container {
  display: flex;
  flex-direction: column;
}

.user-name {
  height: 30px;
  font-size: 20px;
  padding: 5px;
  margin-bottom: 5px;
  font-weight: bold;
}

.join-button {
  height: 30px;
  font-size: 20px;
}

.text-input-container {
  height: 100vh;
}
.text-message {
  width: 100%;
  position: absolute;
  bottom: 0px;
  height: 70px;
  padding: 10px;
  box-sizing: border-box;
}
</style>
