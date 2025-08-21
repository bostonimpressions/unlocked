<template>
  <section class="hero-section relative w-full overflow-hidden">
    <video
      v-if="props.backgroundType === 'video'"
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/video-home-loop.webm" type="video/webm" />
      <source src="/video-home-loop.mov" type="video/quicktime" />
    </video>

    <div
      v-else-if="props.backgroundType === 'image'"
      class="hero-image"
      :style="imageStyle"
    ></div>

    <div class="absolute inset-0" :class="overlayClass"></div>

    <div class="hero-content">
      <BaseHeader />
      <slot />
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    backgroundType: {
      type: String,
      default: 'video',
      validator: (value) => ['video', 'image'].includes(value),
    },
    imageUrl: {
      type: String,
      default: '/default-hero-background.png',
    },
  })

  const overlayClass = computed(() =>
    props.backgroundType === 'video' ? 'bg-black/70' : ''
  )

  const imageStyle = computed(() => ({
    backgroundImage: `linear-gradient(to top, var(--DarkBlue), transparent), url(${props.imageUrl})`,
  }))
</script>

<style scoped>
  .hero-section {
    background-color: var(--DarkBlue);
  }
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: initial;
  }

  .hero-content {
    position: relative;
    padding: 0 30px;
    margin: 0 auto;
    max-width: 1608px;
    z-index: 10;
  }

  section {
    min-height: 60vh;
    border-bottom: 6px solid var(--Blue);
  }

  @media (min-width: 768px) {
    .hero-content {
      padding: 0 60px;
    }
    section {
      min-height: 80vh;
    }
  }
</style>
