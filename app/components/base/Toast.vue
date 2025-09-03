<template>
  <transition name="toast-slide">
    <div v-if="visible" :class="['toast', type]">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue'

  interface ToastOptions {
    message: string
    type?: 'success' | 'error'
    duration?: number
  }

  const props = defineProps<{
    toast: ToastOptions | null
  }>()

  const visible = ref(false)
  const message = ref('')
  const type = ref<'success' | 'error'>('success')

  watch(
    () => props.toast,
    (val) => {
      if (!val) return
      message.value = val.message
      type.value = val.type || 'success'
      visible.value = true
      const duration = val.duration ?? 3000
      setTimeout(() => {
        visible.value = false
      }, duration)
    },
    { immediate: true }
  )
</script>

<style scoped>
  .toast {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 16px 24px;
    border-radius: 8px;
    font-weight: 700;
    z-index: 9999;
  }

  /* Success / Error colors */
  .toast.success {
    background-color: #28a745;
  }
  .toast.error {
    background-color: #dc3545;
  }

  /* Slide animation */
  .toast-slide-enter-active,
  .toast-slide-leave-active {
    transition: all 0.3s ease;
  }
  .toast-slide-enter-from,
  .toast-slide-leave-to {
    transform: translateX(-50%) translateY(100%);
    opacity: 0;
  }
  .toast-slide-enter-to,
  .toast-slide-leave-from {
    transform: translateX(-50%) translateY(0);
    opacity: 1;
  }
</style>
