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
      <section class="home-intro">
        <h1 class="heading">
          UNLOCKED HOME PROJECT IS <br />
          REVOLUTIONIZING REAL ESTATE.
        </h1>
        <p class="subheading ">
          EXPERIENCED. KNOWLEDGEABLE. TRUSTWORTHY.
        </p>

        <!-- Intro content -->
        <div class="intro-text">
          <ContentRenderer v-if="intro" :value="intro" />
          <p v-else>Intro content not found.</p>
        </div>

        <p class="cta">
          CLICK BELOW TO LEARN ABOUT THE WAYS WE DELIVER EXCEPTIONAL SERVICE TO OUR CLIENTS.
        </p>
        <AudienceCards />
      </section>

      
    </HeroSection>
  </div>
</template>

<style lang="scss" scoped>
.home-intro {
  display: flex;
  max-width: 1088px;
  padding: 55px 0 91px 0;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 33px;
}
.heading {
  color: var(--Blue);
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 122.631%; /* 58.863px */
  letter-spacing: 2.4px;
  text-transform: uppercase;
}
.subheading {
  color: var(--Copper);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 1.68px;
  text-transform: uppercase;
}
.intro-text {
  color: #EFEFEF;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 190% */
  letter-spacing: 0.8px;
}
.cta {
  color: var(--Copper);
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px; /* 160% */
  letter-spacing: 0.8px;
  text-transform: uppercase;
  max-width: 874px;;
}
</style>
