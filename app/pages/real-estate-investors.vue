<script setup></script>

<template>
  <div>
    <SectionHero backgroundType="image">
      <section class="investors-intro">
        <div class="section-one">
          <h1>Sell Your Investment Property with <span>Confidence</span></h1>
          <p>
            Ready to sell your investment property? Whether you're a landlord,
            commercial property owner, or investor, we specialize in helping you
            achieve a seamless and profitable sale. Our expertise spans single
            family homes, multifamily homes, real estate portfolios,
            campgrounds, motels, inns, and RV parks. With a focus on maximizing
            your returns, we offer tailored solutions to meet your unique goals.
          </p>
        </div>

        <div class="section-two">
          <h2>Why Choose Us?</h2>
          <p>
            We understand the needs of savvy investors—part-time landlords,
            retirees, short-term/long-term rental investors, and commercial
            asset managers. Our innovative approach leverages <span>cash</span>,
            <span>traditional financing</span>, <span>creative financing</span>,
            <span>private capital</span>, and <span>syndication</span>, to
            deliver unmatched flexibility.
          </p>
        </div>

        <div class="section-three">
          <h3>Key Benefits <span>for Sellers</span></h3>

          <div class="five-col-grid">
            <div class="grid-item">
              <h4>Maximized Returns</h4>
              <p>
                Achieve full or near-full asking price with innovative deal
                structures.
              </p>
            </div>
            <div class="grid-item">
              <h4>Flexible Options</h4>
              <p>
                Discover ways to structure terms to fit your unique financial
                goals.
              </p>
            </div>
            <div class="grid-item">
              <h4>Tax Advantages</h4>
              <p>
                Unlock potential capital gains and tax benefits tailored to your
                situation.
              </p>
            </div>
            <div class="grid-item">
              <h4>Hassle-Free Process</h4>
              <p>
                We have 2 in-house transaction coordinators and can close
                quickly and efficiently.
              </p>
            </div>
            <div class="grid-item">
              <h4>More Possibilities</h4>
              <p>
                Create a unique opportunity for generating continuous passive
                income.
              </p>
            </div>
          </div>
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
  .section-one {
    display: flex;
    padding: 30px 25px 39px 25px;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: 8px solid #e38c3b;
    background-color: rgba(19, 33, 41, 0.8);
    // background: url(<path-to-image>) lightgray 588.296px -59.876px / 61.754% 175.101%
    //     no-repeat,
    //   rgba(19, 33, 41, 0.8);
  }
  .section-two {
    display: flex;
    padding: 167px 0 96px 0;
    flex-direction: column;
    text-align: left;
  }
  .section-three {
    display: flex;
    padding: 7px 12px;
    flex-direction: column;
    width: 100%;
    border-radius: 7px;
    background: rgba(87, 93, 96, 0.23);
    h3 {
      padding: 10px 13px;
    }
  }
  .five-col-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 14px;
    margin: 10px 0 0;
    .grid-item {
      display: flex;
      padding: 18px 14px 24px 14px;
      flex-direction: column;
      align-items: center;
      gap: 11px;
      flex: 1 0 0;
      align-self: stretch;
      border-radius: 6px;
      border: 1px solid var(--Copper);
      background: var(--Color, rgba(87, 93, 96, 0.33));
      color: var(--OffWhite);
    }
    h4 {
      font-size: 19px;
      font-style: normal;
      font-weight: 700;
      line-height: 27px;
      letter-spacing: 0.76px;
      text-transform: uppercase;
    }
    p {
      font-size: 17px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0.68px;
    }
  }
  h1 {
    color: var(--OffWhite);
    font-size: 48px;
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
  h2 {
    color: var(--Copper);
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 122.631%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  h3 {
    color: var(--Blue);
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: 122.631%;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    span {
      color: var(--OffWhite);
    }
  }
  p {
    color: var(--OffWhite);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0.8px;
    span {
      color: var(--Blue);
    }
  }

  @media (min-width: 768px) {
  }
</style>
