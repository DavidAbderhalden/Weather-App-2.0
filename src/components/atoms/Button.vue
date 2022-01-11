<style lang="scss" src="@/styles/atoms/Button.scss" scoped></style>

<template>
  <div class="button" :class="[categoryClass, editClass]" />
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import ButtonCategories from '@/types/ButtonCategories';

export default defineComponent({
  name: 'Button',
  emits: ['click'],
  props: {
    category: {
      type: String as PropType<ButtonCategories>,
      default: 'primary',
    },
    edit: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const handleClick = () => context.emit('click');
    const categoryClass = computed(() => `button--${props.category}`);
    const editClass = computed(() => ({ 'button--edit': props.edit }));
    return { handleClick, categoryClass, editClass };
  },
});
</script>
