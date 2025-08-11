<template>
  <header
    class="base-header relative w-full flex justify-between items-center text-white z-50"
  >
    <!-- Logo -->
    <div class="logo font-bold text-xl">
      <img src="/logo.png" alt="Unlocked">
    </div>

    <!-- Hamburger / Close Button -->

    <div 
        @click="toggleDrawer" 
        class="hamburger"
        :class="drawerOpen ? 'is-active' : ''"
        aria-label="Toggle menu"
    >
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
    </div>


    <!-- Overlay -->
    <div
      v-show="drawerOpen"
      @click="closeDrawer"
      class="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-40 transition-opacity"
    ></div>

    <!-- Drawer -->
    <aside
      class="fixed top-0 right-0 h-full w-64 shadow-lg z-50 transform transition-transform duration-300"
      :class="drawerOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <nav class="p-4 space-y-3">
        <a href="#" class="link">Home</a>
        <a href="#" class="link">About</a>
        <a href="#" class="link">Contact</a>
      </nav>
    </aside>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const drawerOpen = ref(false)

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value
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

<style lang="scss" scoped>
.base-header {
  padding: 45px 0;
  background-color: transparent;
}

.logo {
  display: flex;
  width: 439px;
  height: 127px;
  padding: 16px 23px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

aside {
    width: 300px;
    background-color: var(--DarkBlue);
}

nav {
    .link {
        color: var(--Copper);
        font-size: 33px;
        font-style: normal;
        font-weight: 800;
        line-height: 26px; /* 78.788% */
        letter-spacing: 3.96px;
        text-transform: uppercase;
        margin: 0 0 85px;

        &:hover {
            opacity: .85;
        }
    }
}

.hamburger {
    z-index: 100;

    &.is-active .line:nth-child(2) {
        opacity: 0;
    }

    &.is-active .line:nth-child(1) {
        -webkit-transform: translateY(13px) rotate(45deg);
        -ms-transform: translateY(13px) rotate(45deg);
        -o-transform: translateY(13px) rotate(45deg);
        transform: translateY(13px) rotate(45deg);
    }

    &.is-active .line:nth-child(3) {
        -webkit-transform: translateY(-13px) rotate(-45deg);
        -ms-transform: translateY(-13px) rotate(-45deg);
        -o-transform: translateY(-13px) rotate(-45deg);
        transform: translateY(-13px) rotate(-45deg);
    }
}

.hamburger .line {
  width: 50px;
  height: 5px;
  background-color: var(--Copper);
  display: block;
  margin: 8px auto;
  -webkit-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.hamburger:hover {
  cursor: pointer;
}


</style>
