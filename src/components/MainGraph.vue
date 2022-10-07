<template>
  <section class="main-graph">
    <div
      ref="graph"
      class="main-graph__graph"
    />
  </section>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue';
import useMainStore from '@/store/main';
import { storeToRefs } from 'pinia';

const graph = ref(null);

const store = useMainStore();

const { formData, currentPopulation } = storeToRefs(store);

let chart = null;

const setDataAndRebuild = (data) => {
  chart.options.data = data;
  chart.build();
};

onMounted(() => {
  const { height, width } = graph.value.getBoundingClientRect();

  chart = window.functionPlot({
    target: graph.value,
    width,
    height,
    grid: true,
    data: [
      {
        fn: formData.value.func.text,
      },
    ],
  });
});

watch(() => formData.value.func, () => {
  // Если популяции не существует, то добавить новый график
  if (!store.isPopulationsExist) {
    setDataAndRebuild([{
      fn: formData.value.func.text,
    }]);
  }
}, { deep: true });

watch(() => currentPopulation.value, () => {
  if (store.isPopulationsExist) {
    setDataAndRebuild([{
      fn: formData.value.func.text,
    }, {
      points: currentPopulation.value.map((item) => [item.x, item.y]),
      attr: {
        r: 3,
        fill: 'red',
        opacity: 1,
      },
      markerType: 'circle',
      width: 100,
      color: 'black',
      height: 100,
      fnType: 'points',
      graphType: 'scatter',
    }]);
  }
}, { deep: true });
</script>

<style lang="scss">
.main-graph {
  padding-top: 1rem;
  height: 30rem;
  display: grid;

  &___graph {
    height: 100%;
  }

  .function-plot {
    overflow: visible;
  }
}
</style>
