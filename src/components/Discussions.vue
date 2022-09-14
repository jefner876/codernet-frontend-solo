<script setup lang="ts">
import { discussionBoards } from "../../Boards";
import { getMessagesByRoom } from "../../api";
import { onMounted, ref } from "vue";

const postCountBoards: any = ref({
  Python: 0,
  Javascript: 0,
  Java: 0,
  React: 0,
  Vue: 0,
  "React Native": 0,
  Women: 0,
  "65+": 0,
  "Young Adult Males": 0,
});

console.log(discussionBoards);

discussionBoards.boards.forEach((board) => {
  getMessagesByRoom(board.subject).then((data) => {
    const topic = board.subject;
    console.log(topic);
    console.log(postCountBoards.value);
    postCountBoards.value[topic] = data.messages.length;
  });
});

const languageBoard = discussionBoards.boards.filter((board) => {
  return board.topic === "language";
});
const TechBoard = discussionBoards.boards.filter((board) => {
  return board.topic === "tech";
});

const DemoBoard = discussionBoards.boards.filter((board) => {
  return board.topic === "demographics";
});
</script>

<template>
  <h2 class="title">Discussion Board</h2>
  <div class="discussion-wrapper">
    <div class="card-wrapper">
      <h2>Language</h2>
      <div v-for="(board, index) in languageBoard" :key="index" class="card">
        <img :src="board.icon" width="50" height="50" />
        <!-- <p>{{ board.icon }}<br /></p> -->
        <h3>{{ board.subject }}</h3>
        <p>Posts: {{ postCountBoards[board.subject] }}</p>
        <RouterLink :to="'/discussions/' + board.subject"
          >Join the discussion!</RouterLink
        >
        <br />
      </div>
    </div>

    <div class="card-wrapper">
      <h2>Technology</h2>
      <div v-for="(board, index) in TechBoard" :key="index" class="card">
        <img :src="board.icon" width="50" height="50" />
        <h3>{{ board.subject }}</h3>
        <p>Posts: {{ postCountBoards[board.subject] }}</p>
        <RouterLink :to="'/discussions/' + board.subject"
          >Join the discussion!</RouterLink
        >
        <br />
      </div>
    </div>

    <div class="card-wrapper">
      <h2>Demographics</h2>
      <div v-for="(board, index) in DemoBoard" :key="index" class="card">
        <img :src="board.icon" width="50" height="50" />
        <h3>{{ board.subject }}</h3>
        <p>Posts: {{ postCountBoards[board.subject] }}</p>
        <RouterLink :to="'/discussions/' + board.subject"
          >Join the discussion!</RouterLink
        >
        <br />
      </div>
    </div>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  padding: 10px;
  margin: 0;
}

h2 {
  text-decoration: underline;
}

.card {
  border: solid black 2px;
  background-color: hsl(238, 54%, 78%);
  margin: 10px;
  padding: 5px;
  border-width: 2px;
  border-radius: 10px;
}

.card-wrapper {
  text-align: center;
}
@media (min-width: 600px) {
  .discussion-wrapper {
    display: flex;
    justify-content: space-around;
  }
  .card {
    width: 25vw;
  }
}
</style>
