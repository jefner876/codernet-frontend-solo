<script setup lang="ts">
import { ref } from "vue";
import { io } from "socket.io-client";
import { useUserStore } from "../stores/user";
import moment from "moment";
import { useRoute } from "vue-router";
import { getMessagesByRoom } from "../../api";
import { discussionBoards } from "../../Boards";
console.log(discussionBoards);
import { server } from "../../.secrets";


const route = useRoute();

const store = useUserStore();

//room and username for multiple rooms
const room = route.params.room; //gives you name of room from URL
const username = store.username;
const userId = store._id;

const board = discussionBoards.boards.filter((board) => {
  return board.subject === room;
});
console.log(board);

let oldMessages = ref("");

getMessagesByRoom(room).then((data) => {
  console.log(data.messages);
  oldMessages.value = data.messages;
});

const currentUser = ref(""); //have been using global context in place of this.

const welcomeMessage = ref("");
const messages = ref([]);
const chatText = ref("");

const socket = io(server, { transports: ["websocket"] });
socket.on("userJoin", (message) => {
  console.log(message);
});

socket.emit("joinRoom", { username, room, userId });

socket.on("welcomeMessage", (data) => {
  console.log(data);
  welcomeMessage.value = data;
  console.log(welcomeMessage);
});
socket.on("message:received", (data) => {
  messages.value = messages.value.concat(data);
});

//message for when user leaves (might need to put this on specific rooms)
socket.on("disconnect", (data) => {
  console.log(data);
});

const sendMessage = () => {
  addMessage();
  chatText.value = "";
};

const addMessage = () => {
  //get message text
  const chatMessage = {
    id: new Date().getTime(),
    date: moment().format("DD/MM/YYYY h:mm a"),
    text: chatText.value,
    user: store.username,
  };
  //emitting message to server
  const socket = io(server, { transports: ["websocket"] });

  //need to send username and room so socket io works with multiple rooms
  socket.emit("chatMessage", { chatMessage, username, room, userId });
};
</script>

<template>
  <div class="background">
    <div class="list-container">
      <div class="chat-header-wrapper">
        <img :src="board[0].icon" width="100" height="100" class="chat-logo" />
        <h2 class="chat-header">
          Hello {{ store.username }}👋 <br />
          You are now in the {{ room }} chatroom! <br />
        </h2>
      </div>
      <div class="message-box admin-message">
        <b>Admin</b> : Welcome to the chat room! Please respect other users 🧑🏼‍💻 -
        Pinned Message <br />
      </div>

      <div class="message-history message-box" v-for="message in oldMessages">
        <p>
          <img width="20" height="20" :src="message.user.avatar" />
          <b>
            {{ message.user.username }}
          </b>
          {{ moment(message.created_at).format("DD/MM/YYYY h:mm a") }}
        </p>
        {{ message.body }}
      </div>
      <div class="message-box" v-for="message in messages" :key="message.id">
        <p>
          <img width="20" height="20" :src="store.avatar" />
          <b>
            {{ message.user }}
          </b>
          {{ message.date }}
        </p>
        <p>
          {{ message.text }}
        </p>
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
.background {
  background-color: hsl(278, 54%, 89%);
}

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

/* Chat Page */
.message-box {
  background-color: hsl(278, 54%, 78%);
  padding: 5px;
  margin: 5px;
  border-radius: 5px;
  padding-left: 15px;
}

.admin-message {
  background-color: hsl(278, 54%, 65%);
}

.chat-header {
  text-align: center;
}
.list-container {
  margin-bottom: 100px;
}
.text-input-container {
  position: fixed;
  bottom: 2px;
  height: 25px;
  width: 98vw;
}

.chat-header-wrapper {
  display: flex;
  flex-direction: row;
}
.chat-header {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.chat-logo {
  padding: 15px;
}
</style>
