<template>
  <HomeLayout backdrop="">
    <template v-slot:header>header</template>
    <template v-slot:main>main</template>
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
