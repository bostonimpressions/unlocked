<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'

  const currentSlide = ref(0)

  const slides = [
    {
      id: 0,
      type: 'portrait-landscape',
      images: ['/relief/relocation1.jpg', '/relief/relocation2.jpg'],
    },
    {
      id: 1,
      type: 'two-col',
      images: ['/relief/relocation3.jpg', '/relief/relocation4.jpg'],
    },
    {
      id: 2,
      type: 'single',
      images: ['/relief/relocation5.jpg'],
    },
  ]

  let interval

  onMounted(() => {
    interval = setInterval(() => {
      currentSlide.value = (currentSlide.value + 1) % slides.length
    }, 5000)
  })

  onUnmounted(() => {
    clearInterval(interval)
  })
</script>

<template>
  <div class="slideshow">
    <transition name="fade" mode="out-in">
      <div :key="currentSlide" class="slide">
        <!-- Portrait + Landscape layout -->
        <div
          v-if="slides[currentSlide].type === 'portrait-landscape'"
          class="layout layout-portrait-landscape"
        >
          <img
            v-for="(img, i) in slides[currentSlide].images"
            :key="i"
            :src="img"
            alt=""
            class="slide-image"
          />
        </div>

        <!-- Two equal columns -->
        <div
          v-else-if="slides[currentSlide].type === 'two-col'"
          class="layout layout-two-col"
        >
          <img
            v-for="(img, i) in slides[currentSlide].images"
            :key="i"
            :src="img"
            alt=""
            class="slide-image"
          />
        </div>

        <!-- Single image -->
        <div
          v-else-if="slides[currentSlide].type === 'single'"
          class="layout layout-single"
        >
          <img
            :src="slides[currentSlide].images[0]"
            alt=""
            class="slide-image"
          />
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
  .slideshow {
    position: relative;
    width: 100%;
    overflow: hidden;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide {
    width: 100%;
  }

  .layout {
    display: grid;
    gap: 16px;
    height: 400px;
  }
  @media (min-width: 768px) {
    .layout {
      height: 500px;
    }
  }

  .layout-portrait-landscape {
    grid-template-columns: 1fr 2fr;
  }

  .layout-two-col {
    grid-template-columns: 1fr 1fr;
  }

  .layout-single {
    display: flex;
    width: 100%;
    height: 400px;
  }
  @media (min-width: 768px) {
    .layout-single {
      height: 500px;
    }
  }

  .slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: filter 0.5s ease;
  }
  .slide-image:hover {
    filter: grayscale(0%);
  }
</style>
