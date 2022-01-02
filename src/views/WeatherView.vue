<template>
  <WeatherLayout>
    <template v-slot:header><p class="heading-4">header: {{ cityName }}</p></template>
    <template v-slot:section><p class="heading-5">section</p></template>
    <template v-slot:main><p class="heading-5">main</p></template>
  </WeatherLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WeatherLayout from '@/components/templates/WeatherLayout.vue';

export default defineComponent({
  name: 'Weather',
  components: {
    WeatherLayout,
  },
  computed: {
    cityName(): string {
      return this.$route.params.city_name as string;
    },
  },
  mounted() {
    // TODO: Call API (Store Action)
    console.log(this.cityName);
  },
});
</script>
