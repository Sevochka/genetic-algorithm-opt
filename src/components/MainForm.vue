<template>
  <div
    class="main-form alert alert-info"
  >
    <b-button
      class="main-form__hide"
      :variant="buttonHide.variant"
      @click="toggleHide"
    >
      {{ buttonHide.text }}
    </b-button>

    <RangePopulation
      v-if="!isVisible"
      class="main-form__range-absolute"
    />

    <div class="main-form__title">
      <h2>
        Расчетные данные
      </h2>
      <hr>
    </div>

    <transition name="fadeHeight">
      <div
        v-if="isVisible"
        class="main-form__content"
      >
        <div class="main-form__first">
          <div>
            <h4>Оптимум</h4>
            <b-form-select
              v-model="store.formData.optimum"
              :options="optimumSelectOptionsOptions"
            />
          </div>

          <div>
            <h4>Функция</h4>
            <b-form-select
              v-model="store.formData.func"
              :options="funcSelectOptionsOptions"
            />
          </div>
        </div>

        <div class="main-form__main-info">
          <h4>Основные границы</h4>

          <div class="main-form__main-inputs">
            <CommonInput
              v-model="store.formData.A"
              title="A"
            />
            <CommonInput
              v-model="store.formData.B"
              title="B"
            />
            <span class="main-form__main-info-text">В D нет необходимости, вы можете
              приближать и отдалять график, как вам угодно</span>
          </div>
        </div>

        <div class="main-form__algorithm">
          <h4>Настройки алгоритма</h4>
          <div class="main-form__algorithm-inputs">
            <CommonInput
              v-model="store.formData.mutationProbability"
              title="Вероятность мутации"
              :step="0.1"
            />
            <CommonInput
              v-model="store.formData.populationSize"
              title="Количество особей в поколении"
            />
            <CommonInput
              v-model="store.formData.generationsCount"
              title="Количество поколений"
            />
            <CommonInput
              v-model="store.formData.nextGenerationSize"
              title="Количество особей, которые переходят в след. поколение"
            />
            <CommonInput
              v-model="store.formData.canMutateSize"
              title="Количество особей, которые могут мутировать"
            />
          </div>
        </div>

        <div class="main-form__range-population">
          <h4>Текущее поколения</h4>
          <div class="main-form__range-action">
            <RangePopulation />
          </div>

          <div class="main-form__start">
            <b-button-group>
              <b-button @click="handleSetDefault">
                Сбросить
              </b-button>
              <b-button
                variant="success"
                @click="handleCalculate"
              >
                Рассчитать
              </b-button>
            </b-button-group>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import CommonInput from '@/components/CommonInput.vue';
import useMainStore from '@/store/main';
import mathFunc from '@/data/math-func';
import { computed, ref } from 'vue';
import RangePopulation from '@/components/RangePopulation.vue';

const optimumSelectOptionsOptions = [
  { value: 'min', text: 'минимум' },
  { value: 'max', text: 'максимум' },
];

const funcSelectOptionsOptions = mathFunc.map((item) => ({
  value: item,
  text: item.text,
}));

const store = useMainStore();

const isVisible = ref(true);

const buttonHide = computed(() => ({
  variant: (isVisible.value ? 'danger' : 'success'),
  text: (isVisible.value ? 'Скрыть' : 'Показать'),
}));

const toggleHide = () => {
  isVisible.value = !isVisible.value;
};

const handleSetDefault = () => {
  store.setDefaultState();
};

const handleCalculate = () => {
  store.calculate();
};
</script>

<style lang="scss" scoped>
.main-form {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__range-absolute {
    position: absolute;
    top: 1.5rem;
    left: 1rem;
    width: 100%;
    max-width: 15rem;
  }

  &__hide {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &__title {
    font-size: 2rem;
    width: 100%;
    text-align: center;
  }

  &__content {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  &__first {
    display: flex;
    flex-direction: column;
    gap: 2.1rem;
  }

  &__main-info {
    display: flex;
    flex-direction: column;
    max-width: 14rem;
  }

  &__main-info-text {
    font-size: 0.8rem;
  }

  &__main-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__algorithm {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
  }

  &__algorithm-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__range-population {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 20rem;
  }

  &__start {
    width: 100%;
    >* {
      width: 100%;
    }
  }
}

.fadeHeight-enter-active,
.fadeHeight-leave-active {
  transition: max-height 0.5s, opacity 0.5s;
  max-height: mvw(100);
}
.fadeHeight-enter-from,
.fadeHeight-enter,
.fadeHeight-leave-to
{
  opacity: 0;
  max-height: 0px;
}
</style>
