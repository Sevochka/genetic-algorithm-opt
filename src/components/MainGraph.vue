<template>
  <section class="main-graph">
    <div
      v-if="isReset"
      class="main-graph__reset"
    >
      <h3>Нажмите "Рассчитать", чтобы график с новыми данными появился на экране</h3>
    </div>
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
const isReset = ref(false);

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

watch(() => formData.value, () => {
  if (store.isPopulationsExist) {
    isReset.value = true;
  }
}, { deep: true });

const getPointsInfo = (points, color) => ({
  points: points.map((point) => ([point.x, point.y])),
  attr: {
    r: 3,
    fill: color,
    opacity: 1,
  },
  markerType: 'circle',
  width: 100,
  color: 'black',
  height: 100,
  fnType: 'points',
  graphType: 'scatter',
});

watch(() => currentPopulation.value, () => {
  if (store.isPopulationsExist) {
    const sortedCurrent = [...currentPopulation.value].sort((a, b) => b.y - a.y);
    const redPoints = sortedCurrent.slice(0, currentPopulation.value.length
        - formData.value.nextGenerationSize);
    const bluePoints = sortedCurrent.slice(
      currentPopulation.value.length - formData.value.nextGenerationSize,
      currentPopulation.value.length,
    );

    isReset.value = false;
    setDataAndRebuild([{
      fn: formData.value.func.text,
    }, getPointsInfo(redPoints, 'red'),
    getPointsInfo(bluePoints, 'blue')]);
  }
}, { deep: true });
</script>

<style lang="scss">
.main-graph {
  padding-top: 1rem;
  height: 30rem;
  display: grid;
  position: relative;

  &___graph {
    height: 100%;
  }

  .function-plot {
    overflow: visible;
  }

  .main-graph__reset {
    position: absolute;
    font-size: 3rem;
    text-align: center;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    h3 {
      position: relative;
      color: #480202;
      font-weight: bold;
    }
  }
}
</style>
