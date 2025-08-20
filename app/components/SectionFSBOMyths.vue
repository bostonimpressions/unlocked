<script setup></script>

<template>
  <section class="section-myths">
    <div class="container">
      <div class="top-section">
        <h2 class="heading">
          How Unlocked Home Project Empowers Your <span>FSBO</span> Journey
        </h2>
        <p class="subtext">
          Our platform is designed with homeowners in mind. With a creative
          approach, leveraging cutting edge technology and our connections to
          buyers throughout the region, we are able to provide a unique amount
          of support – all without taking a cut.
        </p>
      </div>

      <div class="bottom-section">
        <h3>Common <span>FSBO</span> Myths Debunked</h3>
        <div class="three-col-grid">
          <div class="grid-item">
            <h4>Myth</h4>
            <p class="item-text">FSBO Homes Sell for Less</p>
            <div class="hover-text">
              Our strategic pricing and creative finance solutions are aimed at
              increasing demand and maximizing profits.
            </div>
          </div>

          <div class="grid-item">
            <h4>Myth</h4>
            <p class="item-text">It's Too Complicated</p>
            <div class="hover-text">
              Our transaction coordinators specialize in handling all the
              paperwork and logistics, so you don’t have to.
            </div>
          </div>

          <div class="grid-item">
            <h4>Myth</h4>
            <p class="item-text">Buyers Avoid FSBO</p>
            <div class="hover-text">
              Our buyers value the convenience and efficiency our process
              offers, and appreciate the unmatched transparency and ease of
              purchasing a property directly from the homeowner through
              Unlocked.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-myths {
    padding: clamp(40px, 6vw, 70px) 0;
    background-color: var(--DarkBlue);
    border-top: 6px solid #e38c3b;
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h2 {
    color: var(--OffWhite);
    font-size: clamp(25px, 2.5vw, 38px);
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 1.9px;
    text-transform: uppercase;
    margin: 0 0 16px;

    span {
      color: var(--Blue);
    }
  }

  h3 {
    color: var(--OffWhite);
    font-size: clamp(22px, 2vw, 30px);
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin: 0 0 24px;

    span {
      color: var(--Blue);
    }
  }

  .subtext {
    color: var(--OffWhite);
    font-size: clamp(16px, 1.6vw, 20px);
    font-weight: 400;
    line-height: clamp(30px, 3vw, 38px);
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .top-section {
    padding-bottom: clamp(40px, 5vw, 50px);
  }

  .bottom-section {
    padding-top: clamp(40px, 5vw, 50px);
    border-top: 1px solid var(--Copper);
  }

  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 0 auto;
    align-items: start;

    h4 {
      color: #ce4a4a;
      font-size: clamp(22px, 1.8vw, 24px);
      font-weight: 700;
      letter-spacing: 1.92px;
      text-transform: uppercase;
    }

    @media (min-width: 1120px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .grid-item {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 24px 19px;
    border-radius: 7px;
    background: rgba(103, 185, 223, 0.17);
    transition: all 0.3s ease;
    cursor: pointer;

    .item-text {
      color: var(--OffWhite);
      font-size: clamp(18px, 1.5vw, 20px);
      font-weight: 400;
      line-height: 31px;
      letter-spacing: 0.8px;
      transition: font-weight 0.3s ease;
    }

    &:hover .item-text {
      font-weight: 700;
    }

    .hover-text {
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: all 0.3s ease;
      color: var(--OffWhite);
      font-size: clamp(16px, 1.3vw, 18px);
      margin-top: 10px;
    }

    &:hover .hover-text {
      max-height: 200px;
      opacity: 1;
    }
  }
</style>
