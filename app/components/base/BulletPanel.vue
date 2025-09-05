<template>
  <div class="bullet-panel">
    <p><slot /></p>
  </div>
</template>

<style lang="scss" scoped>
  .bullet-panel {
    margin: 0 0 13px;
    text-align: left;
    align-content: center;
    padding: 12px 16px;
    border-radius: 7px;
    background: rgba(87, 93, 96, 0.38);

    p {
      color: var(--OffWhite);
      position: relative;
      padding-left: 32px;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.8px;

      &:before {
        content: '';
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 10px;
        background-color: var(--Copper);
        border-radius: 50%;
        vertical-align: text-bottom;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
  @media (min-width: 768px) {
    .bullet-panel {
      p {
        font-size: 20px;
        line-height: 31px;
      }
    }
  }
</style>
