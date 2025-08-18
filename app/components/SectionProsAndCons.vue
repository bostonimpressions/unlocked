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
        '<b>Lower</b> Offer Price',
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
        'Buyer <b>assumes</b> mortgage liability',
        'Possible <b>longer</b> paperwork process',
        'Mortgage Debt included in DTI',
        'Potential Risk of Due on Sale',
        'Performance Risk / non-payment',
      ],
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
    },
  ])

  const togglePanel = (offer, type) => {
    offer.active = type
  }
</script>

<template>
  <section class="core-values">
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
            <transition name="fade-slide" mode="out-in">
              <ul :key="offer.active" :class="offer.active">
                <li
                  v-for="(item, j) in offer[offer.active]"
                  :key="j"
                  v-html="item"
                ></li>
              </ul>
            </transition>
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
    color: var(--OffWhite);
    border-radius: 15px;
    border: 1px solid var(--Copper);

    ul {
      font-size: 20px;
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
    }
  }

  .fade-slide-enter-active,
  .fade-slide-leave-active {
    transition: all 0.3s ease;
  }
  .fade-slide-enter-from {
    opacity: 0;
    transform: translateY(10px);
  }
  .fade-slide-leave-to {
    opacity: 0;
    transform: translateY(-10px);
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
