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
    padding: 121px 0 143px;
    background-color: var(--DarkBlue);
  }
  .container {
    max-width: 1088px;
    margin: 0 auto;
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

    span {
      color: var(--Copper);
      margin: 0 0 40px;
    }
  }
  ul {
    display: flex;
  }
  li {
    display: flex;
    height: 233.6px;
    padding: 86px 17px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1 0 0;
    aspect-ratio: 1/1;
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

  @media (min-width: 768px) {
  }
</style>
