<script setup>
import { computed, ref } from "vue";
import { store } from "./store.js";
import Card from "./components/Card.vue";
import Like from "./components/Like.vue";
import Hashtag from "./components/Hashtag.vue";
import Search from "./components/Search.vue";

const filteredPosts = computed(() => store.filteredPosts);
const increaseLikes = (post) => {
  store.incrementLikes(post);
};
</script>

<template>
  <Search />
  <h1 class="title">Posts</h1>
  <div class="cards">
    <Card v-for="post in filteredPosts" :key="post.id">
      <template #title>{{ post.title }}</template>
      <template #content>{{ post.content }}</template>
      <template #tags>
        <Like :likes="post.likes" @like="() => increaseLikes(post)" />
        <div class="tags">
          <span>Tags:</span>
          <Hashtag
            v-for="(tag, index) in post.hashtags"
            :key="index"
            :tag="tag"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0;
  color: var(--color-primary, #0070f3);
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}
.tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  cursor: pointer;
}
</style>
