<script setup>
  const valueItems = [
    {
      title: 'Earn Commissions, No Matter What',
      text: `You get paid on every transaction—even when the market slows you can
            continue to sell and serve your clients. Oh yeah, and more closings
            means more income.`,
    },
    {
      title: 'Close Deals Quick',
      text: `With our fast process and dedicated transaction coordinators, you’re not stuck waiting on buyers, banks or title companies. We typically close on deals within 5-10 days (if needed).`,
    },
    {
      title: 'Provide More Solutions',
      text: `This will allow your Clients more options and solutions, giving your clients more value!`,
    },
    {
      title: 'Avoid Expired or Terminated Listings',
      text: `Facing a potential expired or terminated listing? Reach out to us before it’s too late—we might just have the solution your seller needs.`,
    },
    {
      title: 'Differentiate Yourself',
      text: `In a crowded field of agents vying for listings, our creative selling approach and educational support sets you apart. Offer something fresh, win more clients, and get more deals done.`,
    },
    {
      title: 'Close More Deals',
      text: `The Bottom Line: Don’t Gamble with Traditional Selling.`,
    },
  ]
</script>

<template>
  <section class="section-value">
    <div class="container">
      <h2>We provide MASSIVE value to agents and their clients</h2>
      <ImageSlider />
      <div class="three-col-grid">
        <div v-for="(item, index) in valueItems" :key="index" class="grid-item">
          <h4 v-html="item.title"></h4>
          <p v-html="item.text"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-value {
    padding: 50px 0;
    background-color: var(--DarkBlue);
    border-top: 6px solid #e38c3b;
  }
  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }
  h2 {
    color: var(--Copper);
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 122.631%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 20px;
  }
  .subheading {
    color: var(--OffWhite);
    font-size: 16px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }
  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
    margin: 30px auto 60px;

    .grid-item {
      display: flex;
      padding: 23px 19px;
      flex-direction: column;
      align-items: flex-start;
      gap: 11px;
      flex: 1 0 0;
      align-self: stretch;
      border-radius: 7px;
      background: rgba(87, 93, 96, 0.11);
    }
    h4 {
      color: var(--Copper);
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      margin: 0 0 10px;
    }
    p {
      color: var(--OffWhite);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      letter-spacing: 0.64px;
    }
  }

  @media (min-width: 768px) {
    .three-col-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1120px) {
    .section-value {
      padding: 60px 0 24px;
    }
    h2 {
      font-size: 40px;
      line-height: 122.631%;
    }
    .subheading {
      font-size: 20px;
      line-height: 35px;
    }
    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
      h4 {
        font-size: 20px;
      }
    }
  }
</style>
