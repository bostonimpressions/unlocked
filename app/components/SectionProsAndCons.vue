<template>
  <section class="core-values">
    <div class="container">
      <h2>Get offers for your clients <span>quickly</span></h2>
      <p class="subheading">
        We offer near-asking price for most properties. No lowball offers,
        guaranteed.
      </p>

      <div class="three-col-grid">
        <div class="grid-item">
          <h4>Cash offer</h4>
          <div class="two-col-grid">
            <button class="active">PROS</button>
            <button>CONS</button>
          </div>
          <!-- panel -->
          <div class="panel">
            <ul>
              <li>We buy <b>as-is</b></li>
              <li><b>No</b> inspections or appraisal contingencies </li>
              <li>Close in under <b>4 weeks</b></li>
              <li><b>Lower</b> Offer Price</li>
              <li>Potential Higher Tax Liability (capital gains)</li>
            </ul>
          </div>
        </div>
        <div class="grid-item">
          <h4>Mortgage Take-Over</h4>
          <div class="two-col-grid">
            <button class="active">PROS</button>
            <button>CONS</button>
          </div>
          <!-- panel -->
          <div class="panel">
            <ul>
              <li><b>Higher</b> offer amount</li>
              <li>Close in under <b>2 weeks</b></li>
              <li>We buy <b>as-is</b></li>
              <li><b>No</b> inspections or appraisal contingencies</li>
              <li>
                Potential <b>LOWER</b> Tax Liability (Defer capital gains)
              </li>
              <li>Monthly passive income options</li>
              <li><b>Personalized</b> seller protections</li>
              <li>Terms <b>customized</b> to the seller’s needs</li>
              <li>Get <b>cash-in-hand</b> at closing</li>
            </ul>
          </div>
        </div>
        <div class="grid-item">
          <h4>Owner Equity Financing</h4>
          <div class="two-col-grid">
            <button class="active">PROS</button>
            <button>CONS</button>
          </div>
          <!-- panel -->
          <div class="panel">
            <ul>
              <li>Close in under <b>a week</b></li>
              <li>
                We buy <b>as-is</b>, no inspections or appraisal contingencies
              </li>
              <li>Structure/<b>customize</b> how you want to sell</li>
              <li>
                Potential <b>LOWER</b> Tax Liability (Defer capital gains)
              </li>
              <li>Earn monthly cash flow</li>
              <li>Get money <b>in hand</b> at closing</li>
              <li><b>Highest</b> Offer Amount</li>
              <li><b>Personalized</b> Seller Protections </li>
              <li><b>Customized</b> Options to the Seller</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .core-values {
    padding: 60px 0 70px;
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
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 122.631%;
    letter-spacing: 4px;
    text-transform: uppercase;
    span {
      color: var(--Copper);
    }
  }

  .subheading {
    color: var(--OffWhite);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
  }

  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin: 30px auto 60px;

    .grid-item {
      padding: 10px;
      text-align: left;
      background: rgba(87, 93, 96, 0.18);
      border-radius: 15px;
      &:nth-child(2) {
        background-color: transparent;
      }
    }

    h4 {
      color: var(--Copper);
      padding: 10px 18px;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
      line-height: 122.631%;
      letter-spacing: 2.8px;
      text-transform: uppercase;
    }
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    width: 100%;
    text-align: left;
    margin: 0 0 15px;

    button {
      display: flex;
      padding: 3px 18px;
      align-items: center;
      gap: 10px;
      flex: 1 0 0;
      text-align: left;
      border-radius: 27px;
      color: var(--OffWhite);
      font-family: Montserrat;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 35px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      border: 1px solid var(--Copper);
      background: rgba(227, 140, 59, 0.21);
      &.active {
        border: 1px solid var(--Copper);
        background: rgba(227, 140, 59, 0.7);
      }
    }
  }

  .panel {
    display: flex;
    padding: 10px 18px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    align-self: stretch;
    color: var(--OffWhite);
    border-radius: 15px;
    border: 1px solid var(--Copper, #e38c3b);

    ul {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 31px;
      letter-spacing: 0.8px;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        position: relative;
        padding-left: 28px;
        margin-bottom: 12px;
        color: var(--OffWhite);

        &::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          color: #5dbf67;
          font-weight: bold;
        }
      }
    }
  }

  @media (min-width: 1120px) {
    .core-values {
      padding: 121px 0 143px;
    }
    .container {
      max-width: 1088px;
      margin: 0 auto;
      padding: 0 15px;
    }

    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);

      h4 {
        min-height: 95px;
      }
    }
  }
</style>
