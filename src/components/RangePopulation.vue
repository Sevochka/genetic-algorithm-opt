<template>
  <div class="range-population">
    <span>{{ store.rangePopulation }}</span>
    <b-form-input
      v-model="store.rangePopulation"
      type="range"
      :disabled="!store.isPopulationsExist"
      min="0"
      :max="store.populationLength"
      step="1"
    />
  </div>
</template>

<script setup>
import useMainStore from '@/store/main';

const store = useMainStore();
</script>

<style lang="scss" scoped>
.range-population {
  display: grid;
  gap: 1rem;
  grid-template-columns: 10% 90%;
}
</style>
