import { defineStore } from 'pinia';
import geneticAlgorithm from '@/utils/geneticAlgorithm';
import mathFunc from '@/data/math-func';

const getDefaultState = () => ({
  formData: {
    A: 0,
    B: 6.2,
    D: 0,

    optimum: 'max',

    mutationIntensity: 0,
    mutationProbability: 0.1,
    populationSize: 100,
    generationsCount: 1000,
    nextGenerationSize: 10,
    canMutateSize: 10,

    func: mathFunc[0],
  },

  rangePopulation: 0,

  populations: [],
});

const useMainStore = defineStore('main', {
  state: getDefaultState,
  getters: {
    isPopulationsExist: (state) => state.populations.length > 0,
    populationLength: (state) => state.populations.length - 1,
    currentPopulation: (state) => state.populations[state.rangePopulation],
  },
  actions: {

    setDefaultState() {
      Object.assign(this.$state, getDefaultState());
    },

    calculate() {
      this.rangePopulation = 0;
      const {
        A, B, mutationProbability, populationSize, func,
        generationsCount, optimum, canMutateSize, nextGenerationSize,
      } = this.formData;

      this.populations = geneticAlgorithm(
        func.func,
        A,
        B,
        populationSize,
        generationsCount,
        mutationProbability,
        nextGenerationSize,
        canMutateSize,
        optimum,
      );
    },
  },
});

export default useMainStore;
