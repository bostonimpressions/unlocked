<script setup lang="ts">
  defineProps<{
    success?: boolean
    error?: string | null
  }>()
</script>

<template>
  <div v-if="success || error" class="form-message">
    <p v-if="success" class="form-message--success">
      <span class="icon">
        <svg
          fill="#ffffff"
          width="800px"
          height="800px"
          viewBox="0 0 1920 1920"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1743.858 267.012 710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z"
            fill-rule="evenodd"
          />
        </svg>
      </span>
      <span>Submitted successfully!</span>
    </p>
    <p v-else-if="error" class="form-message--error">
      <span class="icon">
        <svg
          fill="#000000"
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"
          />
        </svg>
      </span>
      <span>{{ error }}.</span>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .form-message--success,
  .form-message--error {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 20px;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 600;
  }

  .form-message--success {
    background: #e6f9f0;
    color: #1a7f4c;
    .icon {
      background-color: #1a7f4c;
    }
  }
  .form-message--error {
    background: #fcebea;
    color: #b91c1c;
    .icon {
      background-color: #b91c1c;
    }
  }
  .icon {
    padding: 4px;
    border-radius: 50px;
    align-items: center;
  }
  svg {
    width: 18px;
    height: 18px;
    fill: #ffffff;
  }
</style>
