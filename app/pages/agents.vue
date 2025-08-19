<script setup lang="ts">
  const { data: intro } = await useAsyncData(() =>
    queryCollection('content').path('/home/intro').first()
  )
</script>

<template>
  <div>
    <SectionHero>
      <section class="agents-intro">
        <p class="subheading">Collaborating with Real Estate Agents</p>

        <h1 class="heading">
          We make it easier for agents to <span>close deals</span> and
          <span>earn commissions</span>
        </h1>

        <!-- Intro content -->
        <div class="intro-text">
          <p>
            With over $25 million in successful transactions closed in the past
            three years, we're proud to continue building upon our five-star
            reputation here locally.
          </p>
          <p>
            We have closed on 65+ properties in the past 2 years, over half of
            those being innovative creative real estate transactions!
          </p>
        </div>

        <div class="three-col-grid">
          <div class="grid-item">
            <h4>How the Process works</h4>
            <img src="/image.jpg" alt="How the Process works" />
          </div>
          <div class="grid-item">
            <h4>Creative financing explained</h4>
            <img src="/image.jpg" alt="Creative financing explained" />
          </div>
          <div class="grid-item">
            <h4>Hear what agents have to say</h4>
            <img src="/image.jpg" alt="Hear what agents have to say" />
          </div>
        </div>

        <h4 class="callout">We provide unmatched value and expertise.</h4>
        <p class="callout-sub">If your client...</p>

        <div class="two-col-grid">
          <div class="grid-item">
            <p>needs to close quickly</p>
          </div>
          <div class="grid-item">
            <p>is selling aproperty that is (or was) an airbnb</p>
          </div>
          <div class="grid-item">
            <p>is an investor</p>
          </div>
          <div class="grid-item">
            <p>has a rental property with tenants</p>
          </div>
          <div class="grid-item">
            <p>has low equity in the property</p>
          </div>
          <div class="grid-item">
            <p>has a challenging listing that just won't sell</p>
          </div>
          <div class="grid-item">
            <p>is selling a vacant home or a second home</p>
          </div>
        </div>

        <div class="cta">
          <button>Get in touch with our team!</button>
          <p>We specialize in helping clients in all of these situations.</p>
        </div>
      </section>
    </SectionHero>
    <SectionTestimonials />
    <SectionProsAndCons />
    <SectionValue />
    <SectionRequest />
  </div>
</template>

<style lang="scss" scoped>
  .agents-intro {
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

    .grid-item {
      text-align: left;
      padding: 12px 16px;
      border-radius: 7px;
      background: rgba(87, 93, 96, 0.38);
      color: var(--OffWhite);
    }

    p {
      &:before {
        content: '';
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 10px;
        background-color: var(--Copper);
        border-radius: 50%;
        vertical-align: text-bottom;
      }
    }

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
