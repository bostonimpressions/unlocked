<template>
  <section
    :class="`${variant}-hero`"
    class="hero-section relative w-full overflow-hidden"
  >
    <!-- Default variant: video background -->
    <video
      v-if="variant === 'default'"
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/video-home-loop.webm" type="video/webm" />
      <source src="/video-home-loop.mov" type="video/quicktime" />
    </video>

    <!-- Investors variant: image background -->
    <div
      v-else-if="variant === 'investors'"
      class="hero-image"
      style="
        background-image:
          linear-gradient(to top, var(--DarkBlue), transparent),
          url('/hero-background-investors.jpg');
      "
    ></div>

    <!-- Relief variant: image background -->
    <div
      v-else-if="variant === 'relief'"
      class="hero-image"
      style="
        background-image:
          linear-gradient(to top, var(--DarkBlue), transparent),
          url('/hero-background-relief.jpg');
      "
    ></div>

    <!-- Basic variant -->
    <div v-else-if="variant === 'basic'" class="basic"></div>

    <!-- Overlay (optional for video) -->
    <div
      v-if="variant === 'default'"
      class="absolute inset-0 bg-black/70"
    ></div>

    <!-- Hero content (shared) -->
    <div class="hero-content">
      <BaseHeader />
      <slot />
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'investors', 'relief'].includes(value),
    },
  })
</script>

<style lang="scss" scoped>
  .hero-section {
    background-color: var(--DarkBlue);
    min-height: 60vh;
    border-bottom: 6px solid var(--Blue);
    &.relief-hero {
      min-height: auto;
      border-bottom: 6px solid var(--Copper);
      padding: 0 0 60px;
    }
    &.basic-hero {
      min-height: auto;
      border-bottom: 6px solid var(--Copper);
      padding: 0 0 60px;
    }
  }
  .hero-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-size: auto;
  }
  .relief-hero {
    .hero-image {
      background-position: center;
      background-size: cover;
    }
  }

  .hero-content {
    position: relative;
    padding: 0 30px;
    margin: 0 auto;
    max-width: 1608px;
    z-index: 10;
  }

  @media (min-width: 768px) {
    .hero-content {
      padding: 0 60px;
    }
    .hero-section {
      min-height: 80vh;
      &.relief-hero {
        min-height: auto;
      }
      &.basic-hero {
        min-height: auto;
      }
    }
  }
</style>
