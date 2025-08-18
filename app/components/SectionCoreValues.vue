<template>
  <section class="core-values">
    <div class="container">
      <h2>Our <span>Core</span> Values</h2>
      <ul class="items">
        <li>RADICAL INTEGRITY (NO B.S.)</li>
        <li class="blue">TRANSFORMATIVE VALUE</li>
        <li>UNLOCKED COMMUNITY</li>
        <li class="blue">ULTIMATE ACCOUNTABILITY</li>
        <li>UNMATCHED COMMITMENT</li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .core-values {
    padding: 60px 0 70px;
    background-color: var(--DarkBlue);
  }
  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }
  h2 {
    color: var(--OffWhite);
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: 122.631%; /* 58.863px */
    letter-spacing: 2.4px;
    text-transform: uppercase;
    margin: 0 0 40px;
    text-align: center;

    span {
      color: var(--Copper);
      margin: 0 0 40px;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-self: center;
    padding: 12px 0;
    margin: 0 auto;
  }
  li {
    margin: -12px 0;
    padding: 86px 17px;
    aspect-ratio: 1/1;
    height: 233.6px;
    border-radius: 128.653px;
    color: var(--OffWhite);
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
    letter-spacing: 0.8px;
    text-transform: uppercase;
    background: rgba(227, 140, 59, 0.55);

    &.blue {
      background: rgba(103, 185, 223, 0.41);
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
    h2 {
      text-align: left;
    }
    ul {
      display: flex;
      flex-direction: row;
      padding: 0 12px;
    }
    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex: 1 0 0;
      margin: 0 -12px;
    }
  }
</style>
