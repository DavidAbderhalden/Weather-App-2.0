<template>
  <HomeLayout backdrop="">
    <template v-slot:header><p class="heading-4">header</p></template>
    <template v-slot:main><p class="heading-5">main</p></template>
  </HomeLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeLayout from '@/components/templates/HomeLayout.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HomeLayout,
  },
});
</script>
