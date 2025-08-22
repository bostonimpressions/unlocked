<script setup></script>

<template>
  <div>
    <SectionHero variant="relief">
      <section class="relief-division-intro">
        <div class="section-one">
          <h1>
            <span>Unlocking</span> Options. <br />
            <span class="blue">Supporting</span> Every Move.
          </h1>
          <h3>Helping you find <span>relief</span> during uncertain times.</h3>
        </div>
      </section>
    </SectionHero>

    <SectionHearFromUs />

    <SectionRequest>
      <template #heading> <span>Trust Us</span> to Deliver </template>

      <template #text>
        With our expertise and innovative approach, we unlock the full potential
        of your property, guaranteeing maximum value in any market. Let us help
        you sell with confidence and achieve your investment goals.
      </template>

      <template #cta>
        <NuxtLink to="/" class="link"
          >Request Our Proof of Performance!</NuxtLink
        >
      </template>
    </SectionRequest>
  </div>
</template>

<style lang="scss" scoped>
  .relief-division-intro {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
  }

  h1 {
    color: var(--OffWhite);
    font-size: clamp(28px, 4vw, 48px);
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
    margin: 0 0 23px;

    span {
      color: var(--Copper);
    }
  }

  h3 {
    color: var(--OffWhite);
    font-size: clamp(18px, 4vw, 25px);
    font-style: normal;
    font-weight: 600;
    line-height: 128.6%;
    letter-spacing: 1.75px;
    text-transform: uppercase;

    span {
      color: var(--Copper);
    }
  }

  .section-one {
    display: flex;
    padding: 20px 20px 30px;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    background-color: rgba(19, 33, 41, 0.8);
  }

  .blue {
    color: var(--Blue);
  }

  @media (min-width: 768px) {
    .section-one {
      padding: 30px 25px 39px 25px;
    }
  }
</style>
