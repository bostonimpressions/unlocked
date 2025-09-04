<script setup lang="ts">
  defineProps<{
    success?: boolean
    error?: string | null
  }>()
</script>

<template>
  <div v-if="success || error" class="form-message">
    <p v-if="success" class="form-message--success">
      ✅ Submitted successfully!
    </p>
    <p v-else-if="error" class="form-message--error">❌ {{ error }}</p>
  </div>
</template>

<!-- <style scoped>
  .form-message {
    margin-top: 1rem;
    font-size: 0.95rem;
  }
  .form-message--success {
    color: green;
  }
  .form-message--error {
    color: red;
  }
</style> -->
