<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue'
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, A11y } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'

  const activeProgram = ref(null)

  const gridPrograms = [
    {
      id: 'HOME',
      name: 'Home Search Assistance Program',
      icon: '/icon-home.png',
      details: [
        'Exclusive access to unlisted rental properties across our local networks',
        'Overcoming challenges with affordability, placement with pets, poor credit, and rental applications',
        'Connections to affordable housing programs, subsidized rentals, or housing for the elderly',
      ],
    },
    {
      id: 'MOVE',
      name: 'Pack-And-Move Program',
      icon: '/icon-move.png',
      details: [
        'Our team can help pack - and we have access to discounted or free packing supplies!',
        'We can move your stuff, coordinate a pod, handle junk/trash removal, take things to donation centers, and more.',
      ],
    },
    {
      id: 'JOB',
      name: 'Job Search Program',
      icon: '/icon-job.png',
      details: [
        'We help with your job search by identifying local jobs with increased income potential',
        'Guidance provided throughout the hiring process',
        "Need help writing strong cover letters? We've got it covered!",
      ],
    },
  ]

  const extraPrograms = {
    CASH: {
      id: 'CASH',
      name: 'Direct Cash Plus Program',
      icon: '/icon-listing.png',
      details: `Our foundational services are here to take the stress out of selling your home. Sell quickly, easily, and with maximum support and flexibility.`,
      features: [
        {
          title: 'Stress-Free Transactions',
          text: `Our team of transaction coordinators work hand-in-hand with you and the title company, taking more off your plate and making every transaction smooth.`,
        },
        {
          title: 'Flexible Closings',
          text: `We close on your timeline — whether you need fast cash in 7 days or want extra time to transition.`,
        },
        {
          title: 'No Repairs Needed',
          text: `Sell as-is with no repairs, upgrades, or cleanup required.`,
        },
        {
          title: 'Guaranteed Cash Offers',
          text: `Skip the uncertainty of deals falling through — we guarantee cash.`,
        },
        {
          title: 'Zero Commission',
          text: `Keep more money in your pocket with no agent fees.`,
        },
      ],
    },
    SMART: {
      id: 'SMART',
      name: 'Smart Listings Program',
      icon: '/icon-partner.png',
      details: `We partner with a licensed realtor on our team who specializes in financial hardship and challenging listings.`,
      features: [
        {
          title: 'MLS Exposure',
          text: `Your home gets listed on the Multiple Listing Service for maximum visibility.`,
        },
        {
          title: 'Expert Realtor Guidance',
          text: `A licensed realtor specialized in hardship listings guides the process.`,
        },
        {
          title: 'Negotiation Support',
          text: `We negotiate offers on your behalf to maximize value.`,
        },
        {
          title: 'Marketing Package',
          text: `Professional photos, descriptions, and targeted marketing are included.`,
        },
        {
          title: 'Flexible Options',
          text: `Choose between traditional listing or hybrid solutions depending on your needs.`,
        },
      ],
    },
  }

  const openModal = (programId) => {
    activeProgram.value =
      gridPrograms.find((p) => p.id === programId) || extraPrograms[programId]
  }

  const closeModal = () => {
    activeProgram.value = null
  }

  const handleKeydown = (e) => {
    if (e.key === 'Escape') closeModal()
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
  })

  const featurePages = computed(() => {
    const ap = activeProgram.value
    if (!ap || !ap.features || !ap.features.length) return []
    const sizes = [2, 3]
    const out = []
    let i = 0,
      s = 0
    while (i < ap.features.length) {
      const size = sizes[s] ?? sizes[sizes.length - 1]
      out.push(ap.features.slice(i, i + size))
      i += size
      s++
    }
    return out
  })

  const swiperModules = [Navigation, A11y]
</script>

<template>
  <section class="section-relocation">
    <div class="container">
      <h2>Fresh Start <span>Relocation</span> Program</h2>
      <p>
        We’re here to make your transition to a new home as seamless as possible
        with these tailored services:
      </p>

      <div class="three-col-grid">
        <div
          v-for="program in gridPrograms"
          :key="program.id"
          class="grid-item cursor-pointer transition-transform ease-in-out duration-200 hover:-translate-y-1 hover:bg-[rgba(184,115,51,0.2)]"
          @click="openModal(program.id)"
        >
          <img :src="program.icon" :alt="program.name" class="icon" />
          <p>{{ program.name }}</p>
        </div>
      </div>

      <SlideshowRelocation />

      <div class="relief-solutions">
        <div class="row row-one">
          <div class="two-col-grid">
            <div class="grid-item">
              <h2>UNLOCKED RELIEF <span>SELLING SOLUTIONS</span></h2>
              <p>
                Our company offers a unique and revolutionary low-stress
                approach to providing relief in challenging situations.
              </p>
            </div>
            <div class="grid-item">
              <div class="item-group">
                <img
                  src="/icon-cost.png"
                  alt="Zero out of pocket costs"
                  class="icon"
                />
                <h3>Zero out of pocket costs</h3>
              </div>
              <div class="item-group">
                <img
                  src="/icon-maximize.png"
                  alt="Maximize your cash payout"
                  class="icon"
                />
                <h3>Maximize your cash payout</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="row row-two">
          <div class="item-group">
            <img
              src="/icon-strategic.png"
              alt="STRATEGIC SELLING"
              class="icon"
            />
            <div>
              <h3>STRATEGIC <span>SELLING</span></h3>
              <p>
                Our goal is to maximize your proceeds so you can have more cash
                in hand to get back on your feet. We guarantee your peace of
                mind with top-tier, secure, high-value cash offers or
                cutting-edge market strategies.
              </p>
            </div>
          </div>
        </div>
        <div class="row row-three">
          <div class="two-col-grid">
            <!-- clicking opens new modal for Direct Cash Plus Program -->
            <div class="grid-item cursor-pointer" @click="openModal('CASH')">
              <div class="item-group">
                <img
                  src="/icon-listing.png"
                  alt="Direct Cash Plus Program"
                  class="icon"
                />
                <h3>UNLOCKED DIRECT CASH PLUS PROGRAM</h3>
              </div>
              <p>
                Sell your home <span>directly to us off-market</span>, quickly
                and easily with no showings, appraisals, inspections, or
                uncertainty of deals falling through.
              </p>
            </div>
            <!-- clicking opens new modal for Smart Listings Program -->
            <div class="grid-item cursor-pointer" @click="openModal('SMART')">
              <div class="item-group">
                <img
                  src="/icon-partner.png"
                  alt="Smart Listings Program"
                  class="icon"
                />
                <h3>UNLOCKED SMART LISTINGS PROGRAM</h3>
              </div>
              <p>
                We partner with a licensed realtor on our team who specializes
                in financial hardship and challenging listings to help sell your
                home on the <span>Multiple Listing Service (MLS)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <transition name="fade">
      <div
        v-if="activeProgram"
        class="modal fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        @click.self="closeModal"
      >
        <transition name="slide-up">
          <div class="modal-body">
            <button @click="closeModal" class="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
              >
                <path
                  d="M26.25 8.75L8.75 26.25M8.75 8.75L26.25 26.25"
                  stroke="#E38C3B"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <!-- Default programs (HOME, MOVE, JOB) -->
            <div v-if="['HOME', 'MOVE', 'JOB'].includes(activeProgram.id)">
              <div class="modal-header">
                <img
                  :src="activeProgram.icon"
                  :alt="activeProgram.name"
                  class="icon"
                />
                <h3>{{ activeProgram.name }}</h3>
              </div>
              <ul>
                <li v-for="(item, index) in activeProgram.details" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- Direct Cash Plus Program -->
            <div v-else-if="activeProgram.id === 'CASH'" class="mega-modal">
              <div class="modal-header">
                <h3>
                  <div class="sub">Unlocked Direct Cash Plus Program</div>
                  <div class="heading">Sell <span>Directly</span> To Us</div>
                </h3>
              </div>
              <div class="mega-modal-content">
                <p v-html="activeProgram.details"></p>

                <!-- 💡 This needs to be a list of 'features' -->

                <!-- Stacked feature pages: first page shows 2 items, next page shows 3 -->
                <div class="features feature-swiper">
                  <Swiper
                    :modules="swiperModules"
                    :slides-per-view="1"
                    :autoHeight="true"
                    :navigation="{
                      nextEl: '.custom-next',
                      prevEl: '.custom-prev',
                    }"
                    class="swiper"
                  >
                    <SwiperSlide
                      v-for="(page, pIdx) in featurePages"
                      :key="pIdx"
                    >
                      <div class="feature-stack">
                        <div
                          v-for="(feature, fIdx) in page"
                          :key="fIdx"
                          class="feature-item"
                        >
                          <h5>{{ feature.title }}</h5>
                          <p v-html="feature.text"></p>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  <div class="nav-wrapper">
                    <button class="custom-prev nav-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path
                          d="M0.849562 7.0424C0.459037 7.43293 0.459037 8.06609 0.849562 8.45662L7.21352 14.8206C7.60405 15.2111 8.23721 15.2111 8.62774 14.8206C9.01826 14.4301 9.01826 13.7969 8.62774 13.4064L2.97088 7.74951L8.62774 2.09266C9.01826 1.70213 9.01826 1.06897 8.62774 0.678444C8.23721 0.287919 7.60405 0.287919 7.21352 0.678444L0.849562 7.0424ZM13.9424 7.74951L13.9424 6.74951L1.55667 6.74951L1.55667 7.74951L1.55667 8.74951L13.9424 8.74951L13.9424 7.74951Z"
                          fill="#E38C3B"
                        />
                      </svg>
                    </button>

                    <button class="custom-next nav-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="16"
                        viewBox="0 0 14 16"
                        fill="none"
                      >
                        <path
                          d="M13.6504 7.04265C14.041 7.43317 14.041 8.06634 13.6504 8.45686L7.28648 14.8208C6.89595 15.2113 6.26279 15.2113 5.87226 14.8208C5.48174 14.4303 5.48174 13.7971 5.87226 13.4066L11.5291 7.74976L5.87226 2.0929C5.48174 1.70238 5.48174 1.06921 5.87226 0.678688C6.26279 0.288163 6.89595 0.288163 7.28648 0.678688L13.6504 7.04265ZM0.557617 7.74976L0.557617 6.74976L12.9433 6.74976L12.9433 7.74976L12.9433 8.74976L0.557617 8.74976L0.557617 7.74976Z"
                          fill="#E38C3B"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Smart Listings Program -->
            <div v-else-if="activeProgram.id === 'SMART'" class="mega-modal">
              <div class="modal-header">
                <h3>
                  <div class="sub">Unlocked Smart Listings Program</div>
                  <div class="heading"><span>List It</span> On The Market</div>
                </h3>
              </div>
              <div class="mega-modal-content">
                <p v-html="activeProgram.details"></p>

                <!-- 💡 This needs to be a list of 'features' -->

                <div class="features feature-swiper">
                  <!-- 💡 This needs to be a list of 'features' -->

                  <div class="features feature-swiper">
                    <ul>
                      <li class="feature-item">
                        <h5>feature title</h5>
                        <p>
                          feature details Our team of transactions coordinators
                          (T.C's) work hand-In-hand with you and the title
                          company, taking
                          <span
                            >more off your plate and making every transaction
                            the easiest</span
                          >
                          and the most stress free as possible.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
  .section-relocation {
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    background-color: var(--DarkBlue);
    border-top: 6px solid var(--Copper);
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }

  h2 {
    color: var(--OffWhite);
    font-size: clamp(28px, 4vw, 40px);
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 20px;

    span {
      color: var(--Copper);
    }
  }

  p {
    color: var(--OffWhite);
    font-size: 16px;
    font-weight: 600;
    line-height: 33px;
    letter-spacing: 0.8px;
  }

  .three-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 35px;
    margin: 20px 0 40px;

    .grid-item {
      display: flex;
      padding: 27px 9px;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      flex: 1 0 0;
      align-self: stretch;
      border: 1px solid var(--Copper);
      text-align: center;
    }

    .icon {
      width: 59px;
      height: 59px;
      aspect-ratio: 1/1;
    }
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr;
  }

  .relief-solutions {
    margin: 46px auto;
    .row {
      padding: 40px 0;
      border-top: 1px solid var(--Copper);
    }

    .row-one {
      .two-col-grid {
        gap: 106px;
      }
      .icon {
        width: 82px;
        height: 82px;
        aspect-ratio: 1/1;
      }
      h3 {
        color: var(--Blue);
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 128.6%;
        letter-spacing: 1.75px;
        text-transform: uppercase;
        padding: 10px 0 0 32px;
      }
    }

    .row-two,
    .row-three {
      color: var(--OffWhite);
      .icon {
        width: 92px;
        height: 92px;
        aspect-ratio: 1/1;
        margin: 0 30px 0 0;
      }
      h3 {
        font-size: 25px;
        font-style: normal;
        font-weight: 600;
        line-height: 128.6%;
        letter-spacing: 1.75px;
        text-transform: uppercase;
        margin: 0 0 17px;
        span {
          color: var(--Copper);
        }
      }
      p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 29px;
        letter-spacing: 0.64px;
        span {
          color: var(--Blue);
        }
      }
      .two-col-grid {
        gap: 57px;
      }
      .grid-item {
        display: flex;
        padding: 13px;
        flex-direction: column;
        align-items: center;
        gap: 13px;
        flex: 1 0 0;
        align-self: stretch;
        border-radius: 7px;
        background: rgba(87, 93, 96, 0.15);
      }
    }
  }

  .item-group {
    display: flex;
  }

  .modal {
    padding: 0 10px;
    .modal-body {
      position: relative;
      color: var(--DarkBlue);
      background-color: var(--OffWhite);
      max-width: 1088px;
      padding: 39px 15px;
      align-items: flex-start;
      gap: 22px;
    }

    .modal-header {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 0 15px;
      margin: 0 0 15px;
      border-bottom: 1px solid var(--Copper);
    }

    .icon {
      width: 49px;
      height: 49px;
      aspect-ratio: 1/1;
      margin: 0 18px 0 0;
    }

    h3 {
      font-size: 18px;
      font-weight: 500;
      line-height: 122.631%;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    ul {
      list-style: inside;
      padding: 13px 0 13px 10px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.68px;
    }

    li {
      margin: 0 0 10px;
      &:last-child {
        margin: 0;
      }
    }

    p {
      color: var(--DarkBlue);
    }

    .close-btn {
      position: absolute;
      right: 10px;
      top: 10px;
      cursor: pointer;

      svg {
        width: 30px;
        height: 30px;
        path {
          stroke: var(--Copper);
        }
      }
    }
  }

  .mega-modal {
    .modal-header {
      border: 0;
      padding: 0;
      margin: 0 auto 26px;
    }
    h3 {
      color: var(--DarkBlue);
      .sub {
        display: flex;
        padding: 0 11px;
        align-items: flex-start;
        gap: 6px;
        width: fit-content;
        margin: 0 0 10px;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 122.631%;
        letter-spacing: 1.6px;
        text-transform: uppercase;
        background: rgba(103, 185, 223, 0.72);
      }
      .heading {
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 122.631%;
        letter-spacing: 4px;
        text-transform: uppercase;
        span {
          color: var(--Blue);
        }
      }
    }
    .mega-modal-content {
      color: var(--DarkBlue);
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: 1.4px;
      text-transform: uppercase;
    }
    p {
      font-size: 20px;
      line-height: 120%;
    }

    .features {
      padding: 0;
      margin: 26px auto;

      .feature-stack {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .feature-item {
        display: block;
        padding: 16px 32px;
        border-radius: 7px;
        background: rgba(87, 93, 96, 0.11);

        p {
          font-weight: 400;
          text-transform: capitalize;
        }

        span {
          color: var(--Blue);
          font-weight: 500;
        }
      }
      h5 {
        color: var(--Copper);
        font-size: 20px;
        font-style: normal;
        font-weight: 600;
        line-height: 35px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
      }
    }

    /* nav container inside swiper */
    .nav-wrapper {
      position: absolute;
      bottom: 85px;
      left: 0;
      right: 0;
      display: flex;
      justify-content: space-between;
      padding: 0 1rem;
      pointer-events: none;

      .nav-btn {
        position: relative;
        background: transparent;
        border: none;
        cursor: pointer;
        pointer-events: all;
        border: 1px solid var(--Copper);
        border-radius: 50px;
        padding: 5px 6px;
      }

      .swiper-button-disabled {
        opacity: 0;
        pointer-events: none;
      }

      .custom-prev {
        left: 8px;
      }

      .custom-next {
        right: 8px;
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .slide-up-enter-active {
    transition: transform 0.3s ease-out;
  }
  .slide-up-enter-from {
    transform: translateY(50px);
  }
  .slide-up-leave-active {
    transition: transform 0.3s ease-in;
  }
  .slide-up-leave-to {
    transform: translateY(50px);
  }

  @media (min-width: 880px) {
    .section-relocation {
      padding: 100px 0 70px 0;
    }
    p {
      font-size: 20px;
      line-height: 33px;
    }
    .three-col-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .row-one {
      .two-col-grid {
        grid-template-columns: 1.4fr 1fr;
      }
    }
    .row-three {
      .two-col-grid {
        grid-template-columns: 1fr 1fr;
      }
    }

    .modal {
      padding: 0;
      .modal-body {
        max-width: 1088px;
        padding: 39px 70px;
      }
      .icon {
        width: 49px;
        height: 49px;
      }
      h3 {
        font-size: 20px;
      }
      ul {
        font-size: 17px;
      }
      .close-btn {
        right: 20px;
        top: 15px;

        svg {
          width: 35px;
          height: 35px;
        }
      }
    }
  }

  @media (min-width: 1100px) {
    .container {
      padding: 0;
    }
  }
</style>
