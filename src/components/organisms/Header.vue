<style lang="scss" src="@/styles/organisms/Header.scss" scoped></style>

<template>
  <div class="item-wrapper">
    <div class="dropdown">
      <InputField
        v-model="inputValue"
        icon="delete"
        iconAlign="right"
        label="Search Location"
        @click="setInputValue({ label: '' })"
      />
      <DropdownOptions
        v-if="hasResults"
        :options="searchResults"
        :highlight="inputValue"
        @selected="setInputValue($event)"
      />
    </div>
    <Button class="button" :edit="modelValue" @click="handleButtonClick" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import OptionsCategories from '@/types/DropdownOptionsCategories';
import Button from '@/components/atoms/Button.vue';
import InputField from '@/components/atoms/InputField.vue';
import DropdownOptions from '@/components/atoms/DropdownOptions.vue';

export default defineComponent({
  name: 'Header',
  emits: ['update:modelValue'],
  components: {
    Button,
    InputField,
    DropdownOptions,
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    searchResults: {
      type: Array,
      required: false,
    },
  },
  setup(props, { emit }) {
    const inputValue = ref('');
    // eslint-disable-next-line max-len
    const hasResults = computed(() => (props.searchResults ? props.searchResults.length > 0 : false));

    const setInputValue = (value: OptionsCategories) => {
      inputValue.value = value.label;
    };

    const handleButtonClick = () => {
      emit('update:modelValue', !props.modelValue);
    };

    return {
      inputValue,
      hasResults,
      setInputValue,
      handleButtonClick,
    };
  },
});
</script>
