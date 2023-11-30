<script setup>
import { store } from "../store.js";
const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
});
const setHashtag = () => {
  store.setCurrentHashtag(props.tag);
};
</script>
<template>
  <span class="tag" @click="setHashtag">
    {{ tag }}
  </span>
</template>
<style scoped>
.tag {
  background-color: #ccc;
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
}
</style>
