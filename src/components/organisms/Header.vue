<style lang="scss" src="@/styles/organisms/Header.scss" scoped></style>

<template>
  <div class="item-wrapper">
    <div class="dropdown">
      <InputField
        v-model="inputValue"
        icon="@/assets/icons/loupe.svg"
        iconAlign="right"
        label="Search Location"
      />
      <DropdownOptions v-if="hasResults" :options="searchResults" :highlight="inputValue" />
    </div>
    <Button class="button" :edit="isEdit" @click="handleButtonClick" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import Button from '@/components/atoms/Button.vue';
import InputField from '@/components/atoms/InputField.vue';
import DropdownOptions from '@/components/atoms/DropdownOptions.vue';

export default defineComponent({
  name: 'Header',
  components: {
    Button,
    InputField,
    DropdownOptions,
  },
  props: {
    searchResults: {
      type: Array,
      required: false,
    },
  },
  setup(props) {
    const inputValue = ref('');
    const isEdit = ref(false);

    const hasResults = computed(() => (
      props.searchResults ? props.searchResults.length > 0 : false));

    const handleButtonClick = () => {
      isEdit.value = !isEdit.value;
    };

    return {
      inputValue,
      isEdit,
      handleButtonClick,
      hasResults,
    };
  },
});
</script>
