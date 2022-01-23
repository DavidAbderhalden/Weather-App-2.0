<style lang="scss" src="@/styles/atoms/InputField.scss" scoped></style>

<template>
  <div class="wrapper">
    <div v-if="isActive" class="icon" :class="[classIcon, icon]" @click="handleClick" />
    <input
      v-model="innerInput"
      class="input subtitle-1"
      :class="classInput"
      @focus="handleFocus"
      @blur="handleBlur"
      @keypress.enter="handleEnter"
    />
    <span class="label caption">{{ label }}</span>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line object-curly-newline
import { computed, ref, defineComponent, PropType } from 'vue';
import IconAlignType from '@/types/InputFieldCategories';

export default defineComponent({
  name: 'InputField',
  emits: ['update:modelValue', 'click', 'enter'],
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
  setup(props, { emit }) {
    const innerInput = ref('');
    const focused = ref(false);
    const handleFocus = () => {
      focused.value = true;
    };
    const handleBlur = () => {
      setTimeout(() => {
        focused.value = false;
      }, 50);
    };
    const handleEnter = () => {
      emit('enter');
    };

    const iconStyle = computed(() => ({ backgroundImage: `url('${props.icon})` }));
    const isActive = computed(() => innerInput.value.length > 0);
    const classInput = computed(() => ({ 'input--active': isActive.value }));
    const classIcon = computed(() => `icon--${props.iconAlign}`);

    const handleClick = () => emit('click');

    return {
      focused,
      handleFocus,
      handleBlur,
      handleEnter,
      iconStyle,
      innerInput,
      isActive,
      classInput,
      classIcon,
      handleClick,
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
