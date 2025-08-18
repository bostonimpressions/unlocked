<template>
  <section class="real-people">
    <div class="container">
      <div class="grid">
        <div class="image-col">
          <img src="/unlocked-home-people.jpg" alt="Real people" />
        </div>
        <div class="text-col">
          <h2>Real <span>People</span></h2>
          <h2>Real <span>Support</span></h2>
          <h2>Real <span>Solutions</span></h2>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .real-people {
    display: flex;
    padding: 80px 0;
    flex-direction: column;
    align-items: center;
    gap: 66px;
    align-self: stretch;
    background-color: var(--DarkBlue);
  }

  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  img {
    margin: 0 auto;
  }

  h2 {
    text-align: center;
    color: var(--OffWhite);
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 167%;
    letter-spacing: 2.25px;
    text-transform: uppercase;
    span {
      color: var(--Copper);
    }
  }

  @media (min-width: 500px) {
    h2 {
      font-size: 45px;
    }
  }

  @media (min-width: 768px) {
    .grid {
      grid-template-columns: 1fr 1fr;
      gap: 66px;
      align-items: center;
    }
    h2 {
      text-align: left;
      font-size: 28px;
    }
  }

  @media (min-width: 880px) {
    .real-people {
      padding: 121px 0 143px 0;
    }
    h2 {
      font-size: 38px;
    }
  }

  @media (min-width: 1100px) {
    h2 {
      font-size: 45px;
    }
  }
</style>
