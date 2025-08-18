<script setup>
  import { ref } from 'vue'

  const offers = ref([
    {
      title: 'Cash offer',
      active: 'pros',
      pros: [
        'We buy <b>as-is</b>',
        '<b>No</b> inspections or appraisal contingencies',
        'Close in under <b>4 weeks</b>',
      ],
      cons: [
        'Lower Offer Price',
        'Potential Higher Tax Liability (capital gains)',
      ],
    },
    {
      title: 'Mortgage Take-Over',
      active: 'pros',
      pros: [
        '<b>Higher</b> offer amount',
        'Close in under <b>2 weeks</b>',
        'We buy <b>as-is</b>',
        '<b>No</b> inspections or appraisal contingencies',
        'Potential <b>LOWER</b> Tax Liability (Defer capital gains)',
        'Monthly passive income options',
        '<b>Personalized</b> seller protections',
        'Terms <b>customized</b> to the seller’s needs',
        'Get <b>cash-in-hand</b> at closing',
      ],
      cons: [
        'Buyer assumes mortgage liability',
        'Possible <b>longer</b> paperwork process',
      ],
      hasConsHeader: true,
    },
    {
      title: 'Owner Equity Financing',
      active: 'pros',
      pros: [
        'Close in under <b>a week</b>',
        'We buy <b>as-is</b>, no inspections or appraisal contingencies',
        'Structure/<b>customize</b> how you want to sell',
        'Potential <b>LOWER</b> Tax Liability (Defer capital gains)',
        'Earn monthly cash flow',
        'Get money <b>in hand</b> at closing',
        '<b>Highest</b> Offer Amount',
        '<b>Personalized</b> Seller Protections',
        '<b>Customized</b> Options to the Seller',
      ],
      cons: ['Performance risk from buyer'],
      subcons: [
        'We will provide you with a Proof of Performance with references from many agents, sellers, and attorneys we’ve worked with in the past. We have closed on over 32 creative deals and there have never been any missed payments by us or our partners!',
        'Use of a third party servicing company or ACH payments ensure that payments are made automatically on time each month.',
      ],
      hasConsHeader: true,
    },
  ])

  const togglePanel = (offer, type) => {
    offer.active = type
  }
</script>

<template>
  <section class="pros-and-cons">
    <div class="container">
      <h2>Get offers for your clients <span>quickly</span></h2>
      <p class="subheading">
        We offer near-asking price for most properties. No lowball offers,
        guaranteed.
      </p>

      <div class="three-col-grid">
        <div v-for="(offer, i) in offers" :key="i" class="grid-item">
          <h4>{{ offer.title }}</h4>

          <div class="two-col-grid">
            <button
              :class="{ active: offer.active === 'pros' }"
              @click="togglePanel(offer, 'pros')"
            >
              PROS
            </button>
            <button
              :class="{ active: offer.active === 'cons' }"
              @click="togglePanel(offer, 'cons')"
            >
              CONS
            </button>
          </div>

          <div class="panel">
            <!-- Show special header above CONS list if defined -->
            <a
              v-if="offer.active === 'cons' && offer.hasConsHeader"
              href="#"
              class="cons-header"
            >
              click here to learn HOW WE TURN TYPICAL “CONS” INTO WINS
            </a>

            <ul :class="offer.active">
              <li
                v-for="(item, j) in offer[offer.active]"
                :key="j"
                v-html="item"
              ></li>
            </ul>

            <ul v-if="offer.active === 'cons' && offer.subcons" class="subcons">
              <li v-for="(sub, k) in offer.subcons" :key="k" v-html="sub"></li>
            </ul>
          </div>
        </div>
      </div>

      <NuxtLink to="/contact" class="contact-btn">
        <span>Contact us to learn more</span> about these innovative approaches,
        take your skillset to the next level, and sell more listings
        <span>✓</span>
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .pros-and-cons {
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
    color: var(--OffWhite);
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 122.631%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 20px;
    span {
      color: var(--Copper);
    }
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
      font-size: 22px;
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
    margin: 0 0 15px;
    button {
      display: flex;
      padding: 3px 18px;
      align-items: center;
      gap: 10px;
      flex: 1;
      border-radius: 27px;
      color: var(--OffWhite);
      font-size: 18px;
      font-weight: 600;
      line-height: 35px;
      letter-spacing: 0.8px;
      text-transform: uppercase;
      border: 1px solid var(--Copper);
      background: rgba(227, 140, 59, 0.21);
      &.active {
        background: rgba(227, 140, 59, 0.7);
      }
    }
  }
  .panel {
    padding: 10px 18px;
    border-radius: 15px;
    border: 1px solid var(--Copper);
    color: var(--OffWhite);

    .cons-header {
      display: block;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 1px solid var(--Copper);
      font-size: 18px;
      font-weight: 600;
      color: var(--Copper);
      text-transform: uppercase;
      text-decoration: none;
    }

    ul {
      list-style: none;
      margin: 0 0 10px;
      padding: 0;
      font-size: 16px;
      line-height: 24px;

      letter-spacing: 0.8px;

      li {
        position: relative;
        padding-left: 28px;
        margin-bottom: 12px;
        &::before {
          position: absolute;
          left: 0;
          top: 0;
          font-weight: bold;
        }
      }
      &.pros li::before {
        content: '✓';
        color: #5dbf67;
      }
      &.cons li::before {
        content: '✗';
        color: #ce4a4a;
      }
      &.subcons {
        margin-left: 20px;
        li::before {
          content: '✓';
          color: #5dbf67;
        }
      }
    }
  }

  .contact-btn {
    display: block;
    padding: 7px 18px;
    margin: 20px auto 0;
    max-width: 755px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 7px;
    background: rgba(103, 185, 223, 0.22);
    color: var(--OffWhite);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0.8px;
    text-decoration: none;
    cursor: pointer;
    transition:
      background 0.3s ease,
      transform 0.2s ease;

    span {
      color: var(--Blue);

      &:last-child {
        font-weight: bold;
      }
    }

    &:hover {
      background: rgba(103, 185, 223, 0.4);
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  @media (min-width: 1120px) {
    .pros-and-cons {
      padding: 60px 0 70px;
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
        font-size: 28px;
        min-height: 95px;
      }
    }
    .two-col-grid {
      button {
        font-size: 20px;
      }
    }
    .panel {
      ul {
        font-size: 20px;
        line-height: 31px;
      }
    }
    .contact-btn {
      font-size: 20px;
    }
  }
</style>
