<style lang="scss" src="@/styles/templates/WeatherLayout.scss" scoped></style>

<template>
  <div class="backdrop">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="section">
      <slot name="section"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WeatherLayout',
  components: {},
});
</script>
