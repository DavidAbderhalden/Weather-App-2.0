<style lang="scss" src="@/styles/atoms/InputCheckbox.scss" scoped></style>

<template>
  <div class="checkbox" :class="classCheckbox" @click="switchCheckbox" >
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'InputCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      require: true,
    },
  },
  setup(props, { emit }) {
    const switchCheckbox = () => emit('update:modelValue', !props.modelValue);
    const classCheckbox = computed(() => ({ 'checkbox--active': props.modelValue }));
    return { switchCheckbox, classCheckbox };
  },
});
</script>
