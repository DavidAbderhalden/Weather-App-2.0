<style lang="scss" src="@/styles/molecules/WeatherCard.scss" scoped></style>

<template>
  <div class="wrapper">
    <div class="text">
      <p class="text__location">{{ location }}</p>
      <p class="text__temperature">{{ temp }}</p>
    </div>

    <div class="weather-icon" :class="classIcon" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import icon from '@/functions/weather';

export default defineComponent({
  name: 'WeatherCard',
  props: {
    location: {
      type: String,
      required: true,
    },
    temp: {
      type: String,
      required: true,
    },
    weatherId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const classIcon = computed(() => icon(props.weatherId));

    return { classIcon };
  },
});
</script>
