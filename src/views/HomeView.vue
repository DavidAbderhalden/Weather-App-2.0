/* eslint-disable max-len */
<style lang="scss" src="@/styles/views/HomeView.scss" scoped></style>

<template>
  <HomeLayout backdrop="../../assets/logo.png">
    <template v-slot:header>
      <div class="header">
        <Header :searchResults="searchResults" v-model="isEdit" />
      </div>
    </template>
    <template v-slot:main>
      <div class="main">
        <div class="card-wrapper">
          <div class="card-wrapper__fader" />
          <WeatherCard
            class="card-wrapper__card"
            v-for="(card, key) in weatherCards"
            :key="key"
            :weather="card"
            :edit="isEdit"
            v-model="card.marked"
          />
        </div>
        <Notification
          class="notification"
          message="Confirm to Remove items!"
          :visible="hasMarked"
          @click="removeCards"
        />
      </div>
    </template>
  </HomeLayout>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import HomeLayout from '@/components/templates/HomeLayout.vue';
import Header from '@/components/organisms/Header.vue';
import Notification from '@/components/atoms/Notification.vue';
import WeatherCard from '@/components/molecules/WeatherCard.vue';
import store from '@/store/index';

export default defineComponent({
  name: 'Home',
  components: {
    HomeLayout,
    Header,
    Notification,
    WeatherCard,
  },
  setup() {
    const isEdit = ref(false);

    const searchResults = computed(() => store.getters.searchResults);
    const weatherCards = computed(() => store.getters.weatherCards);

    // eslint-disable-next-line max-len
    const hasMarked = computed(() => weatherCards.value.find((card: { marked: boolean }) => card.marked));
    const removeCards = () => {
      const untrackedCards = weatherCards.value.filter((card: { marked: boolean }) => card.marked);
      store.commit('DELETE_WEATHER_ITEMS', untrackedCards);
      isEdit.value = false;
    };

    return {
      searchResults,
      weatherCards,
      isEdit,
      hasMarked,
      removeCards,
    };
  },
});
</script>
