<script setup>
import { store } from "../store.js";
</script>
<template>
  <div class="search-container">
    <input
      type="text"
      v-model="store.state.currentHashtag"
      placeholder="Search"
    />
  </div>
</template>

<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
}
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  font-size: 1rem;
  outline: none;
  width: 100%;
  max-width: 300px;
  transition: 0.2s ease;
}
input:focus {
  border-color: var(--color-primary-light, #3291ff);
}
</style>
