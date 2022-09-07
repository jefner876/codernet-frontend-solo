<script setup lang="ts">
import { discussionBoards } from "../../Boards";

const languageBoard = discussionBoards.boards.filter((board) => {
  return board.topic === "language";
});


const TechBoard = discussionBoards.boards.filter((board) => {
  return board.topic === 'tech';
});

const DemoBoard = discussionBoards.boards.filter((board) => {
  return board.topic === 'demographics';
});



const handleClick = (value: String) => {
  console.log(value);
};
</script>

<template>
  <h2 class="title">Discussion Board</h2>

  <h2>Language</h2>

  <div v-for="(board, index) in languageBoard" :key="index" class="card">
    <p>{{ board.icon }}<br /></p>
    <p>Subject: {{ board.subject }}</p>
    <p>Posts: {{ board.postCount }}</p>
    <p>Subscribers: {{ board.subscribers }}</p>
    <button @click="handleClick(board.subject)">Chat</button>
    <br />
  </div>

  <h2>Technology</h2>
  <div v-for="(board, index) in TechBoard" :key="index" class="card">
    <p>{{ board.icon }}</p>
    <p>Subject: {{ board.subject }}</p>
    <p>Posts: {{ board.postCount }}</p>
    <p>{{ board.subscribers }}</p>
    <button @click="handleClick(board.subject)">Chat</button>
    <br />
  </div>

  <h2>Demographics</h2>

  <div v-for="(board, index) in DemoBoard" :key="index" class="card">
    <p>{{ board.icon }}</p>
    <p>Subject: {{ board.subject }}</p>
    <p>Posts: {{ board.postCount }}</p>
    <p>{{ board.subscribers }}</p>
    <button @click="handleClick(board.subject)">Chat</button>
    <br />
  </div>
</template>

<style scoped>
.title {
  text-align: center;
}

h2 {
  text-decoration: underline;
}

.card {
  border: solid black 2px;
  border-width: 2px;
  
}
</style>
