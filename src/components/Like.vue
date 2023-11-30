<script setup>
import { store } from "../store.js";
const props = defineProps({
  likes: {
    type: Number,
    required: true,
  },
});
const emit = defineEmits(["like"]);
</script>
<template>
  <button class="likes" @click="emit('like')">
    <span>Likes:</span>
    <span class="likes-emoji">❤️</span>
    <span class="likes-count">{{ likes }}</span>
  </button>
</template>
<style scoped>
.likes {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  border: none;
  background: var(--color-primary, #0070f3);
  color: var(--color-primary-text, #ffffff);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  margin-bottom: 1rem;
}
.likes-emoji {
  font-size: 1.5rem;
  color: var(--color-red, #f10);
}
.likes-count {
  font-weight: bold;
}
</style>
