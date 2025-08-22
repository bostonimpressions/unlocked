<script setup></script>

<template>
  <section class="section-hear-from-us">
    <div class="container">
      <div class="two-col-grid">
        <div class="grid-item">
          <p>
            At Unlocked Home Project, we recognize that selling your home during
            financial hardship is more than just a sale—it’s one of the most
            difficult and stressful times in your life. Our goal is to provide
            not only a quick and compassionate way to sell your home but also a
            range of services to help you move forward with confidence and
            security. Below, you’ll find a detailed breakdown of the value we
            offer, including core real estate solutions and expanded support
            like home search, assisted living, job search, postponement
            strategies, rental advising, and packing and moving assistance.
          </p>
        </div>
        <div class="grid-item">
          <h2>Hear From <span>Us</span></h2>
          <div class="video">
            <iframe
              class="youtube-video"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EpIAfcSXQk8"
              title="An interview with Jonathan Stratton"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-hear-from-us {
    display: flex;
    padding: 50px 0;
    flex-direction: column;
    background-color: var(--OffWhite);
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .video {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    border-radius: 20px;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
      margin: 0 auto;
    }
  }

  h2 {
    text-align: center;
    color: var(--DarkBlue);
    font-size: clamp(28px, 4vw, 32px);
    font-style: normal;
    font-weight: 500;
    line-height: 122.631%;
    letter-spacing: 3.2px;
    text-transform: uppercase;
    margin: 0 0 20px;

    span {
      color: var(--Blue);
    }
  }

  p {
    color: var(--DarkBlue);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px;
    letter-spacing: 0.8px;
  }

  .two-col-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (min-width: 880px) {
    .section-hear-from-us {
      padding: 110px 0 110px 0;
    }
    h2 {
      text-align: left;
    }
    p {
      font-size: 20px;
      line-height: 33px;
    }
    .two-col-grid {
      grid-template-columns: 2fr 1fr;
      .grid-item {
        &:first-child {
          border-right: 1px solid var(--DarkBlue);
          padding: 0 40px 0 0;
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
