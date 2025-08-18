<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, Pagination } from 'swiper/modules'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'

  const testimonials = [
    {
      name: 'Stephanie G.',
      source: 'Google Review',
      quote: 'Cannot recommend Unlocked Home Project enough!',
      lead: 'The team at this company are some of the most genuine and caring real estate professionals ever.',
      body: `They put their heart & souls into helping both property sellers and buyers in every way possible. They bring to the table such creative ideas and thinking outside the box to help all parties. They've made huge differences in some families lives that it is just amazing to see. We have worked personally with Unlocked Home Project on a couple of occasions and everything could not have gone smoother. We have known families and other real estate professionals who have also had great experiences working with the team. Highly recommend this company to anyone!`,
    },
    {
      name: 'John D.',
      source: 'Google Review',
      quote: 'Absolutely fantastic experience!',
      lead: 'Absolutely fantastic experience!',
      body: 'They guided us through every step and made the process stress-free...',
    },
  ]
</script>

<template>
  <section class="section-testimonials">
    <div class="container">
      <Swiper
        :modules="[Navigation, Pagination]"
        :slides-per-view="1"
        :space-between="30"
        :navigation="{ nextEl: '.custom-next', prevEl: '.custom-prev' }"
        :pagination="{ el: '.custom-pagination', clickable: true }"
        class="w-full"
      >
        <SwiperSlide v-for="(testimonial, i) in testimonials" :key="i">
          <div class="slide flex flex-col md:flex-row gap-6">
            <!-- Left Column -->
            <div
              class="md:w-1/3 flex flex-col items-center justify-center text-center border-r md:pr-6"
            >
              <div class="rating">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <h4 class="name">{{ testimonial.name }}</h4>
              <p class="source">{{ testimonial.source }}</p>
            </div>
            <!-- Right Column -->
            <div class="md:w-2/3 md:pl-6">
              <p class="quote">“{{ testimonial.quote }}”</p>
              <h3>{{ testimonial.lead }}</h3>
              <p class="testimonial-body">
                {{ testimonial.body }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="controls">
        <div class="arrow custom-prev">←</div>
        <div class="custom-pagination"></div>
        <div class="arrow custom-next">→</div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-testimonials {
    position: relative;
    background-color: var(--OffWhite);
    border-bottom: 6px solid var(--Copper);
    padding: 50px 0 80px;
  }
  .container {
    position: relative;
    margin: 0 auto;
    max-width: 1088px;
  }
  .slide {
    padding: 35px;
    background-color: rgba(87, 93, 96, 0.06);
    color: var(--DarkBlue);
  }
  .rating {
    color: var(--Copper);
    font-size: 20px;

    span {
      margin: 0 5px;
    }
  }
  .name {
    text-align: right;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 33px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .source {
    color: #575d60;
    text-align: right;
    font-size: 18px;
    font-style: italic;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.72px;
  }
  .quote {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.72px;
  }
  h3 {
    color: var(--Copper);
    font-size: 33px;
    font-style: normal;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: 0.66px;
    margin: 1rem 0;
  }
  .testimonial-body {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 27px;
    letter-spacing: 0.72px;
  }
  .controls {
    display: flex;
    position: relative;
    width: 100%;
    top: 50px;
  }
  .custom-pagination {
    display: flex;
    justify-content: center;
  }
  .arrow {
    display: flex;
    position: absolute;
    padding: 20px;
    bottom: -30px;
    font-size: 28px;
    cursor: pointer;

    &.custom-prev {
      left: -10px;
    }
    &.custom-next {
      right: -10px;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    display: none !important;
  }

  .custom-pagination .swiper-pagination-bullet {
    background-color: #999;
    opacity: 1;
  }
  .custom-pagination .swiper-pagination-bullet-active {
    background-color: #f97316;
  }
</style>
