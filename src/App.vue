<template>
  <div class="app">
    <MainForm />
    <MainGraph />
  </div>
</template>

<script setup>
import MainForm from '@/components/MainForm.vue';
import MainGraph from '@/components/MainGraph.vue';
</script>

<style lang="scss" scoped>
.app {
  padding: 2rem;
}
</style>
