<template>
  <div class="heading-1">{{ cityName }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Weather',
  components: {},
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
