<template>
  <section class="relative w-full overflow-hidden bg-black">
    <!-- Background Video -->
    <video
      class="absolute top-0 left-0 w-full h-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/video-home-loop.webm" type="video/webm" />
      <source src="/video-home-loop.mov" type="video/quicktime" />
    </video>

    <!-- Black overlay -->
    <div class="absolute inset-0 bg-black/70"></div>

    <div class="relative mx-auto z-10 max-w-[1728px]">
      <BaseHeader /> 
      <slot />
    </div>
  </section>
</template>

<style scoped>
section {
  min-height: 60vh;
}

@media (min-width: 768px) {
  section {
    min-height: 80vh;
  }
}
</style>
