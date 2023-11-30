<template>
  <div class="card">
    <div class="card-title">
      <slot name="title" />
    </div>
    <div class="card-content">
      <slot name="content" />
    </div>
    <div class="card-actions">
      <slot name="tags" />
    </div>
  </div>
</template>
<style scoped>
.card {
  border: 1px solid;
  border-color: var(--color-primary-light, #3291ff);
  border-radius: 4px;
  padding: 1rem;
}
.card-title {
  font-weight: bold;
  font-size: 1.2rem;
}
.card-content {
  margin: 1rem 0;
}
.card-actions {
}
</style>
