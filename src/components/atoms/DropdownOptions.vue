<style lang="scss" src="@/styles/atoms/DropdownOptions.scss" scoped></style>

<template>
  <div class="dropdown">
    <div class="dropdown__wrapper">
      <p
        class="wrapper__item"
        v-for="(option, key) in options"
        :key="key"
        @click="handleClick(option)"
      >
        <span class="item__text subtitle-1" v-html="parsedText(option.label)" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import OptionsCatergories from '@/types/DropdownOptionsCategories';

export default defineComponent({
  name: 'DropdownOptions',
  emits: ['selected'],
  props: {
    options: {
      type: Array as PropType<OptionsCatergories[]>,
      required: true,
    },
    highlight: {
      type: String,
      require: false,
    },
  },
  setup(props, { emit }) {
    const handleClick = (option: unknown) => {
      emit('selected', option);
    };
    const parsedText = (text: string) => {
      if (!props.highlight) return text;
      return text.replace(
        new RegExp(props.highlight, 'gi'),
        (match: string) => `<p class="subtitle-1" style="color: #4093ff;">${match}</p>`,
      );
    };
    return { parsedText, handleClick };
  },
});
</script>
