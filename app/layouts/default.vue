<template>
  <div>
    <BaseHeader />
    <main>
      <slot /> 
    </main>
    <BaseFooter />
  </div>
</template>

<script setup>
import BaseHeader from '~/components/base/BaseHeader.vue'
import BaseFooter from '~/components/base/BaseFooter.vue'
</script>
