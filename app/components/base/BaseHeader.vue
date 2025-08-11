<template>
  <header
    class="base-header relative w-full flex justify-between items-center px-4 py-3 text-white z-50"
  >
    <!-- Logo -->
    <div class="logo font-bold text-xl drop-shadow-md">Unlocked</div>

    <!-- Hamburger Button -->
    <button
      @click="openDrawer"
      class="p-2 rounded-md bg-transparent hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
      aria-label="Open menu"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
           viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- Slightly dark overlay -->
    <div
      v-show="drawerOpen"
      @click="closeDrawer"
      class="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity"
    ></div>

    <!-- Drawer -->
    <aside
      class="fixed top-0 right-0 h-full w-64 bg-white/95 shadow-lg z-50 transform transition-transform duration-300"
      :class="drawerOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="p-4 flex justify-between items-center border-b border-gray-200">
        <h2 class="text-lg font-semibold">Menu</h2>
        <button @click="closeDrawer" aria-label="Close menu" class="p-2 hover:bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <nav class="p-4 space-y-3">
        <a href="#" class="block text-gray-800 hover:text-sky-500">Home</a>
        <a href="#" class="block text-gray-800 hover:text-sky-500">About</a>
        <a href="#" class="block text-gray-800 hover:text-sky-500">Contact</a>
      </nav>
    </aside>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const drawerOpen = ref(false)

function openDrawer() {
  drawerOpen.value = true
}

function closeDrawer() {
  drawerOpen.value = false
}

function handleKey(e: KeyboardEvent) {
  if (e.key === 'Escape') closeDrawer()
}

onMounted(() => {
  window.addEventListener('keydown', handleKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKey)
})
</script>

<style scoped>
.base-header {
  background-color: transparent;
}
</style>
