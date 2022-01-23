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
        @enter="addWeatherCard"
        ref="inputField"
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
import {
  computed,
  defineComponent,
  ref,
  watch,
} from 'vue';
import OptionsCategories from '@/types/DropdownOptionsCategories';
import Button from '@/components/atoms/Button.vue';
import InputField from '@/components/atoms/InputField.vue';
import DropdownOptions from '@/components/atoms/DropdownOptions.vue';
import store from '@/store/index';

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
    const addWeatherCard = () => {
      store.dispatch('addWeatherCard');
    };
    const inputValue = ref('');
    const inputField = ref(InputField);
    // eslint-disable-next-line max-len
    const hasResults = computed(() => (props.searchResults ? props.searchResults.length > 0 : false) && inputValue.value.length > 0 && inputField.value.focused);

    const setInputValue = (value: OptionsCategories) => {
      inputValue.value = value.label;
      store.commit('RESET_SEARCH_RESULTS');
    };
    const searchTimeout = ref(false);

    const handleInput = () => {
      // creates a timeout for api calls
      if (!searchTimeout.value && inputValue.value.length > 2) {
        searchTimeout.value = true;
        setTimeout(() => {
          searchTimeout.value = false;
          store.dispatch('fetchSearchResults', inputValue.value);
        }, 1000);
      }
    };

    watch(inputValue, () => {
      handleInput();
    });

    const handleButtonClick = () => {
      emit('update:modelValue', !props.modelValue);
    };

    return {
      addWeatherCard,
      inputField,
      handleInput,
      inputValue,
      hasResults,
      setInputValue,
      handleButtonClick,
    };
  },
});
</script>
