<template>
  <WeatherLayout>
    <template v-slot:header><p class="heading-4">header: {{}}</p></template>
    <template v-slot:section><p class="heading-5">section</p></template>
    <template v-slot:main><p class="heading-5">main</p></template>
  </WeatherLayout>
</template>

<script lang="ts">
import {
  computed, ComputedRef, defineComponent, ref,
} from 'vue';
import { useRoute } from 'vue-router';
import WeatherLayout from '@/components/templates/WeatherLayout.vue';
import store from '@/store/index';
import { WeatherCard } from '@/store/types';

export default defineComponent({
  name: 'Weather',
  components: {
    WeatherLayout,
  },

  setup() {
    const route = useRoute();
    const cityName = ref(route.params.city_name as string);
    const weatherCards: ComputedRef<WeatherCard[]> = computed(() => store.getters.searchResults);
    const searchResults = computed(() => store.getters.searchResults);

    // eslint-disable-next-line max-len
    const activeCard = computed(() => {
      console.log(searchResults.value[0].label);
      return weatherCards.value.find((card) => card.location === searchResults.value[0].label);
    });

    return { activeCard, cityName, searchResults };
  },

  beforeCreate() {
    store.commit('RESET_SEARCH_RESULTS');
    console.log(this.cityName);
    if (!this.activeCard) {
      store.dispatch('fetchSearchResults', { name: this.cityName, direct: true });
    }
  },
});
</script>
