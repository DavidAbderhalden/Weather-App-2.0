<template>
  <div class="heading-6">Development</div>
  <!-- <C location="Zürich 8050, Schweiz" temp="0.3 C" :weatherId="1" v-model="t" :edit="t" /> -->
  <button @click="handleClick">Test</button>
  <p>{{ searchResults }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import store from '@/store/index';
// import C from '@/components/molecules/WeatherCard.vue';

export default defineComponent({
  name: 'Development',
  components: {
    // C,
  },
  data: () => ({
    data: [
      { label: 'Endingen, Schweiz Kanton Aargau' },
      { label: 'New York City, USA' },
      { label: 'Berlin Brandenburg, Deutschland' },
      { label: 'Melbourn Australia, Victoria' },
    ],
    t: true,
  }),

  computed: {
    ...mapGetters({
      searchResults: 'searchResults',
    }),
  },

  methods: {
    handleClick() {
      store.dispatch('fetchSearchResults');
    },
  },
});
</script>
