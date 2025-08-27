<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
    <NuxtLink
      v-for="link in links"
      :key="link.url"
      :to="`/${link.url}`"
      class="card flex flex-col p-6 rounded shadow-lg text-center text-white w-64"
    >
      <img
        :src="`/icon-${link.icon}.png`"
        :alt="link.title"
        class="icon mx-auto mb-2"
      />
      <h3 class="heading">{{ link.title }}</h3>
    </NuxtLink>
  </div>
</template>

<script setup>
  const links = [
    {
      title: 'Real Estate Agents',
      icon: 'agents',
      url: 'agents',
    },
    {
      title: 'Homeowners',
      icon: 'homeowners',
      url: 'homeowners',
    },
    {
      title: 'Real Estate Investors',
      icon: 'investors',
      url: 'real-estate-investors',
    },
  ]
</script>

<style lang="scss" scoped>
  .grid {
    gap: 35px;
    padding: 20px 0 0;
    margin: 0 auto;
  }

  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--Blue);
    background-color: rgba(103, 185, 223, 0.2);
    text-decoration: none;
    transition:
      transform 0.35s ease,
      box-shadow 0.35s ease,
      border-color 0.35s ease;
    transform-style: preserve-3d;

    &:hover {
      transform: scale(1.05) rotate3d(1, 1, 0, 8deg);
      //border-color: lighten(#67b9df, 10%);
      border-color: #a6d6ed;
      box-shadow: 0 12px 25px rgba(103, 185, 223, 0.25);
      background-color: rgba(103, 185, 223, 0.1);
    }

    &:active {
      transform: scale(0.97);
    }
  }

  .icon {
    width: 133px;
    height: 133px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
    transition: transform 0.4s ease;

    .card:hover & {
      transform: rotate(8deg) scale(1.1);
    }
  }

  .heading {
    color: var(--OffWhite);
    text-align: center;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: 122.631%;
    letter-spacing: 2.3px;
    text-transform: uppercase;
    margin-top: auto;
    transition: color 0.3s ease;

    // .card:hover & {
    //   color: #67b9df;
    // }
  }

  @media (min-width: 768px) {
    .grid {
      gap: 70px;
      padding: 20px 45px;
    }
  }
</style>
