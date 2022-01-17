<template>
  <div class="heading-6">Development</div>
  <C :searchResults="data"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import C from '@/components/organisms/Header.vue';

export default defineComponent({
  name: 'Development',
  components: {
    C,
  },
  data: () => ({
    data: [
      { label: 'Endingen, Schweiz Kanton Aargau' },
      { label: 'New York City, USA' },
      { label: 'Berlin Brandenburg, Deutschland' },
      { label: 'Melbourn Australia, Victoria' },
    ],
  }),

  methods: {
    test(option: unknown) {
      console.log(option);
    },
  },
});
</script>
