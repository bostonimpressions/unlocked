<template>
  <div class="bg-slate-800 p-6 rounded shadow-lg text-center text-white w-64">
    <!-- Replace with actual icon from your set -->
    <Icon :name="icon" class="text-3xl mb-2" />
    <h3 class="font-semibold">{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String
})
</script>
