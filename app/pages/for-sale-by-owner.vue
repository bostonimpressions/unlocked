<script setup>
  import BulletPanel from '@/components/base/BulletPanel'
  import SectionFSBOTestimonial from '~/components/SectionFSBOTestimonial.vue'
</script>

<template>
  <div>
    <SectionHero>
      <section class="fsbo-intro">
        <div class="top-section">
          <div class="two-col-grid">
            <div class="text-col">
              <h1 class="heading">FSBO Division</h1>
              <p class="text-body">
                Welcome to Unlocked Home Project’s For Sale By Owner (FSBO)
                Division, where empowered homeowners take control of their sale.
                Sometimes, selling with a trusted real estate agent is the
                way-to-go, but in 2025, more and more homeowners are choosing to
                save on agent commissions and take matters into their own hands.
                Here, we'll guide you through why FSBO works, how our platform
                supports you, and proven steps to maximize your sale price while
                minimizing stress.
              </p>
            </div>

            <!-- Background image box -->
            <div
              class="image-col"
              role="img"
              aria-label="Attorney reference image"
            ></div>
          </div>
        </div>

        <div class="bottom-section">
          <div class="two-col-grid">
            <div class="text-col">
              <h2>How Our Business Model Works</h2>
              <BulletPanel>
                We can buy FSBO homes directly, or we can sell to one of our
                trusted partners through our Unlocked Direct Cash Plus Program
              </BulletPanel>
              <BulletPanel>
                We have an email list of active buyers in New Hampshire that
                want to buy properties
              </BulletPanel>
              <BulletPanel>
                Our services provide many similar benefits to an agent, but you
                don’t pay us commissions - we get paid on the buyer’s side,
                through a finder's fee within our own network.
              </BulletPanel>
            </div>
            <div class="image-col">
              <video autoplay muted loop playsinline class="video">
                <source src="/fsbo/piggy-bank.mp4" type="video/mp4" />
                <!-- <source src="/fsbo/piggy-bank-sm.mov" type="video/quicktime" /> -->
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </SectionHero>
    <SectionFSBOTestimonial />
    <SectionFSBOMyths />
    <SectionRequest>
      <template #text>
        <strong
          >Ready to sell smarter? Reach out to our team today to see if our
          process is the right fit for you.</strong
        >
      </template>

      <template #cta>
        <NuxtLink to="/contact" class="link">Get Unlocked Today</NuxtLink>
      </template>
    </SectionRequest>
  </div>
</template>

<style lang="scss" scoped>
  .fsbo-intro {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1088px;
    padding: 15px 0 91px 0;
  }

  .heading {
    margin: 0 0 33px;
    color: var(--OffWhite);
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%;
    letter-spacing: 2.4px;
    text-transform: uppercase;
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }

  .text-body {
    color: var(--OffWhite);
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0.8px;
  }

  .top-section {
    padding: 0 0 50px;

    .image-col {
      border-radius: 8px;
      border: 2px solid var(--Blue);
      background: url('/fsbo/office.jpg') lightgray center center / cover
        no-repeat;
      width: 100%;
      height: auto;
      aspect-ratio: 3/4;
    }
  }

  .bottom-section {
    padding: 50px 0 0;
    border-top: 1px solid var(--Copper);

    h2 {
      margin: 0 0 40px;
      color: var(--OffWhite);
      font-size: 25px;
      font-style: normal;
      font-weight: 600;
      line-height: 128.6%;
      letter-spacing: 1.75px;
      text-transform: uppercase;
    }
    .image-col {
      display: flex;
      align-items: center;
      justify-content: center;

      .video {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    .fsbo-intro {
      max-width: 1088px;
      padding: 55px 0 91px 0;
    }
    .bottom-section {
      .two-col-grid {
        grid-template-columns: 2fr 1fr;
        gap: 80px;
      }
    }
    .top-section {
      .two-col-grid {
        grid-template-columns: 2fr 1fr;
        gap: 80px;
      }
      .image-col {
        aspect-ratio: unset;
      }
    }
  }

  @media (min-width: 1120px) {
    .heading {
      font-size: 48px;
    }
    .text-body {
      font-size: 20px;
      line-height: 38px;
    }
  }
</style>
