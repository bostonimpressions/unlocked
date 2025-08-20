<script setup></script>

<template>
  <div>
    <SectionHero backgroundType="image">
      <section class="investors-intro">
        <div class="heading-box">
          <h1>Sell Your Investment Property with Confidence</h1>
        </div>
      </section>
    </SectionHero>

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
  .investors-intro {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
    padding: 15px 0 91px 0;
    gap: 20px;
  }
  .heading {
    color: var(--OffWhite);
    letter-spacing: 2.4px;
    text-transform: uppercase;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 122.631%;
    span {
      color: var(--Blue);
    }
  }
  .subheading {
    color: var(--Copper);
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1.68px;
    text-transform: uppercase;
    font-size: 22px;
  }
  .intro-text {
    color: var(--OffWhite);
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.8px;
    font-size: 18px;
  }
  .callout {
    color: var(--Copper);
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    max-width: 874px;
    font-size: 20px;
  }
  .callout-sub {
    color: var(--OffWhite);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0.8px;
  }
  .cta {
    padding: 55px 0 0;
    margin: 0 auto;
    text-align: center;
    color: var(--OffWhite);
    button {
      padding: 3px 15px;
      margin: 0 0 15px;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      background-color: var(--Blue);
      color: var(--DarkBlue);
      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 38px;
      letter-spacing: 0.8px;
    }
  }

  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 55px;
    margin: 0 auto 60px;
    width: 100%;

    .grid-item {
      text-align: left;
    }

    h4 {
      color: var(--Copper);
      margin: 0 0 20px;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 24px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
    }
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    width: 100%;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 768px) {
    .home-intro {
      max-width: 1088px;
      padding: 55px 0 91px 0;
      gap: 33px;
    }
    .heading {
      font-size: 48px;
    }
    .subheading {
      font-size: 24px;
      line-height: 32px;
    }
    .intro-text {
      font-size: 20px;
      line-height: 38px; /* 190% */
    }
    .cta {
      font-size: 20px;
      line-height: 30px;

      max-width: 874px;
    }

    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);

      h4 {
        min-height: 50px;
      }
    }
  }
</style>
