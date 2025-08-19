<template>
  <section class="section-request">
    <div class="container">
      <h2>
        Still unsure? For many agents, creative transactions are uncharted
        territory.
      </h2>
      <p>
        Contact us to request a copy of our Proof of Performance which
        highlights our track record, professionalism, credibility, and client
        satisfaction, and includes a full list of references to local agents,
        brokers, title companies, and attorneys that we have done business with.
      </p>

      <NuxtLink to="/" class="link">
        Request Our Proof of Performance!
      </NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-request {
    padding: 50px 20px;
    border-top: 6px solid var(--Copper, #e38c3b);

    background:
      radial-gradient(
        73.56% 48.47% at 50% 50%,
        rgba(0, 0, 0, 0.55) 0%,
        rgba(0, 0, 0, 0) 88.7%
      ),
      linear-gradient(
        0deg,
        rgba(103, 185, 223, 0.84) 0%,
        rgba(103, 185, 223, 0.84) 100%
      ),
      linear-gradient(0deg, var(--Blue, #67b9df) 0%, var(--Blue, #67b9df) 100%),
      url('/agents/agents-background-image.jpg') lightgray 50% / cover no-repeat;

    background-blend-mode: multiply, normal, color, normal;
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 30px 20px;
    background-color: var(--DarkBlue);
  }

  h2 {
    color: var(--Blue);
    text-align: center;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0.88px;
    text-transform: uppercase;
  }

  p {
    margin: 27px 0;
    color: var(--OffWhite);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.8px;
  }

  .link {
    display: flex;
    padding: 6px 34px;
    margin: 0 auto;
    max-width: 424px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 2px;
    background: linear-gradient(
      91deg,
      #67b9df -19.02%,
      #a4e2ff 63.6%,
      #78c5e8 113.17%
    );
    color: var(--DarkBlue);
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0.6px;
    text-transform: uppercase;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1120px) {
    .section-request {
      padding: 84px 0;
    }

    .container {
      padding: 40px 44px 47px;
    }

    p {
      font-size: 20px;
      line-height: 31px;
    }

    .link {
      font-size: 15px;
      line-height: 34px;
    }

    h2 {
      max-width: 840px;
      margin: 0 auto;
      font-size: 22px;
      line-height: 31px;
    }
  }
</style>
