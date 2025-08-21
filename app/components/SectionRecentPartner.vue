<script setup>
  const residentialProperties = [
    { name: 'Chandler Street - Nashua', units: 4 },
    { name: 'Kimball Street Manchester NH', units: 2 },
    { name: 'Emerson Street, Haverhill MA', units: 4 },
    { name: 'Summit View Dr, Moultonborough, NH', units: null },
    { name: 'Province Lake Rd, Wakefield, NH', units: null },
    { name: 'Gulliver Dr, Sanford, ME', units: null },
    { name: 'Meadow Glen Dr, Moltonborough, NH', units: null },
    { name: 'Main St, Gorham, NH', units: null },
    { name: 'Sullivan Dr, Hudson, NH', units: null },
    { name: 'Cannon Dr, Nashua, NH', units: null },
    { name: 'Berkshire Rd, Nashua, NH', units: null },
  ]

  const commercialProperties = [
    {
      name: 'Inn 32',
      description:
        '<span>19 bedroom inn</span> with one 4 bedroom suite, and one 2 bedroom suite, located at Main St in North Woodstock, New Hampshire.',
    },
    {
      name: 'Inn at Mount Snow',
      description:
        '<span>16 room hotel</span> that we converted into a 20 room boutiqueski destination located at Vermont Rte 100, West Dover, Vermont.',
    },
    {
      name: '22 Maple Street',
      description:
        'West Lebanon, NH - a <span>14 unit building</span> with buildable lot ($2 mil)',
    },
  ]
</script>

<template>
  <section class="section-recent-partner">
    <div class="container">
      <h2>Recent partnered acquisitions</h2>

      <div class="section-row">
        <div class="two-col-grid">
          <div class="grid-item">
            <h4>Residential</h4>
            <ul>
              <li v-for="(p, index) in residentialProperties" :key="index">
                {{ p.name }}
                <span v-if="p.units">{{ p.units }} unit</span>
              </li>
            </ul>
          </div>
          <div class="grid-item">
            <h4>Commercial</h4>
            <ul>
              <li v-for="(p, index) in commercialProperties" :key="index">
                <div>
                  <strong>{{ p.name }}</strong
                  ><br />
                  <div v-html="p.description" class="desc"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .section-recent-partner {
    padding: 50px 0;
    background-color: var(--OffWhite);
  }
  .container {
    max-width: 1088px;
    margin: 0 auto;
    padding: 0 20px;
  }
  h2 {
    color: var(--DarkBlue);
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: 122.631%;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 auto 36px;
  }
  h4 {
    color: var(--Copper);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin: 0 0 16px;
  }
  p {
    color: var(--DarkBlue);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.8px;
  }
  .section-row {
    padding: 36px 0;
    border-top: 1px solid var(--Copper);
  }
  .two-col-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 80px;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      justify-content: space-between;
      margin: 0 0 16px;
      span,
      .desc ::v-deep(span) {
        color: var(--Blue);
      }
    }
  }

  @media (min-width: 1120px) {
    .section-recent-partner {
      padding: 60px 0 70px;
    }
    h2 {
      font-size: 40px;
      line-height: 122.631%;
    }
  }
</style>
