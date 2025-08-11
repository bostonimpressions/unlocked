<template>
  <div class="card p-6 rounded shadow-lg text-center text-white w-64">
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

<style lang="scss" scoped>
$blue: #67B9DF;

.card {
  border: 1px solid $blue;
  background-color: rgba(103, 185, 223, .2);
}
</style>
