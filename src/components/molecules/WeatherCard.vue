<style lang="scss" src="@/styles/molecules/WeatherCard.scss" scoped></style>

<template>
  <div class="wrapper">
    <div class="card" :class="classEdit">
      <div class="card__text">
        <p class="text__location heading-5">{{ weather.location }}</p>
        <p class="text__temperature subtitle-1">{{ weather.temp }}</p>
      </div>
      <div class="weather-icon" :class="classIcon" />
    </div>
    <InputCheckbox v-if="edit" v-model="innerMarked" />
  </div>
</template>

<script lang="ts">
import {
  ref, computed, defineComponent, PropType,
} from 'vue';
import WeatherCardType from '@/types/WeatherCardCategories';
import icon from '@/functions/weather';

import InputCheckbox from '@/components/atoms/InputCheckbox.vue';

export default defineComponent({
  name: 'WeatherCard',

  components: {
    InputCheckbox,
  },

  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    edit: {
      type: Boolean,
      default: false,
    },

    weather: {
      type: Object as PropType<WeatherCardType>,
      required: true,
    },
  },
  setup(props) {
    const classIcon = computed(() => icon(props.weather.id));
    const classEdit = computed(() => ({ 'card--edit': props.edit }));

    const innerMarked = ref(false);

    return { classIcon, classEdit, innerMarked };
  },

  watch: {
    innerMarked() {
      this.$emit('update:modelValue', this.innerMarked);
    },

    modelValue: {
      immediate: true,
      handler(v) {
        this.innerMarked = v;
      },
    },
  },
});
</script>
