<style lang="scss" src="@/styles/atoms/InputField.scss" scoped></style>

<template>
  <div class="wrapper">
    <div class="icon" :class="classIcon" v-bind:style="iconStyle" />
    <input v-model="innerInput" class="input subtitle-1" :class="classInput" />
    <span class="label caption">{{ label }}</span>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line object-curly-newline
import { computed, ref, defineComponent, PropType } from 'vue';
import IconAlignType from '@/types/InputFieldCategories';

export default defineComponent({
  name: 'InputField',
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    iconAlign: {
      type: String as PropType<IconAlignType>,
      default: 'left',
    },
    label: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const innerInput = ref('');
    const iconStyle = computed(() => ({ backgroundImage: `url('${props.icon})` }));
    const classInput = computed(() => ({ 'input--active': innerInput.value.length > 0 }));
    const classIcon = computed(() => `icon--${props.iconAlign}`);

    return {
      iconStyle,
      innerInput,
      classInput,
      classIcon,
    };
  },

  watch: {
    innerInput: {
      handler(v) {
        this.$emit('update:modelValue', v);
      },
    },

    modelValue: {
      immediate: true,
      handler(v) {
        this.innerInput = v;
      },
    },
  },
});
</script>
