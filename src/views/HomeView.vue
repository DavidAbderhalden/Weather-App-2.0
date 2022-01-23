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
            v-for="(card, key) in tempCard"
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

    const tempCard = ref([
      {
        location: 'Endingen, Schweiz Kanton Aargau',
        temp: '3.2 C',
        id: 2,
        marked: false,
      },
      {
        location: 'New York City, USA',
        temp: '14.2 C',
        id: 1,
        marked: false,
      },
      {
        location: 'Berlin Brandenburg, Deutschland',
        temp: '0.2 C',
        id: 2,
        marked: false,
      },
      {
        location: 'Melbourn Australia, Victoria',
        temp: '34 C',
        id: 3,
        marked: false,
      },
      {
        location: 'Melbourn Australia, Victoria',
        temp: '34 C',
        id: 3,
        marked: false,
      },
      {
        location: 'Melbourn Australia, Victoria',
        temp: '34 C',
        id: 3,
        marked: false,
      },
      {
        location: 'Melbourn Australia, Victoria',
        temp: '34 C',
        id: 3,
        marked: false,
      },
      {
        location: 'Melbourn Australia, Victoria',
        temp: '34 C',
        id: 3,
        marked: false,
      },
      {
        location: 'Melbourn Australia, Victoria',
        temp: '34 C',
        id: 3,
        marked: false,
      },
      {
        location: 'Melbourn Australia, Victoria',
        temp: '34 C',
        id: 3,
        marked: false,
      },
    ]);

    const hasMarked = computed(() => tempCard.value.find((card) => card.marked));
    const removeCards = () => {
      tempCard.value = tempCard.value.filter((card) => !card.marked);
      isEdit.value = false;
    };

    return {
      searchResults,
      tempCard,
      isEdit,
      hasMarked,
      removeCards,
    };
  },
});
</script>
