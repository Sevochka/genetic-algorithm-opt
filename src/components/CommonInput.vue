<template>
  <div class="common_input input-group">
    <div
      id="addon-wrapping"
      class="common_input__text input-group-text"
    >
      {{ title }}
    </div>
    <b-form-input
      type="number"
      :step="step"
      :model-value="modelValue"
      @input="updateModelValue"
    />
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: '',
  },
  step: {
    type: Number,
    default: 1,
  },
});

const emit = defineEmits(['update:modelValue']);

const updateModelValue = (value) => {
  emit('update:modelValue', +value);
};
</script>

<style lang="scss" scoped>
.common_input {
  display: flex;
  justify-content: flex-start;

  &__text {
    white-space: initial;
    font-size: 0.8rem;
    padding: 0 0.5rem;
    max-width: 70%;
    word-wrap: break-word;
  }
}
</style>
