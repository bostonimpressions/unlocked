<script setup lang="ts">
const { data: intro } = await useAsyncData(() =>
  queryCollection('content')
    .path('/home/intro')
    .first()
)
</script>

<template>
  <div>
    <HeroSection>
      <section class="text-center py-16 text-white">
        <h1 class="text-4xl font-bold text-sky-400">
          UNLOCKED HOME PROJECT IS <br />
          REVOLUTIONIZING REAL ESTATE.
        </h1>
        <p class="mt-4 text-orange-400 font-semibold">
          EXPERIENCED. KNOWLEDGEABLE. TRUSTWORTHY.
        </p>

        <!-- I want the content from content/home/intro.md here -->
        <div class="mt-8 max-w-3xl mx-auto text-left text-black bg-white/80 p-6 rounded-xl">
          <ContentRenderer v-if="intro" :value="intro" />
          <p v-else>Intro content not found.</p>
        </div>
      </section>

      <CallToAction />
      <AudienceCards />
    </HeroSection>
  </div>
</template>
