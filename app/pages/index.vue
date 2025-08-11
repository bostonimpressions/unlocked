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
      <section class="max-w-[1088px] mx-auto text-center py-16 text-white">
        <h1 class="text-4xl font-bold text-sky-400">
          UNLOCKED HOME PROJECT IS <br />
          REVOLUTIONIZING REAL ESTATE.
        </h1>
        <p class="mt-4 text-orange-400 font-semibold">
          EXPERIENCED. KNOWLEDGEABLE. TRUSTWORTHY.
        </p>

        <!-- Intro content -->
        <div
          class="mt-8 mx-auto text-left text-white 
                font-montserrat text-[20px] leading-[38px] tracking-[0.04em]"
        >
          <ContentRenderer v-if="intro" :value="intro" />
          <p v-else>Intro content not found.</p>
        </div>


        <CallToAction />
        <AudienceCards />
      </section>

      
    </HeroSection>
  </div>
</template>

