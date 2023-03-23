<style lang="scss" src="@/styles/templates/HomeLayout.scss" scoped></style>

<template>
  <div class="backdrop" :style="backdropImage">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeLayout',
  props: {
    backdrop: {
      type: String,
      required: false,
    },
  },
  components: {},
  computed: {
    backdropImage() {
      return { 'background-image': `url(${this.backdrop})` };
    },
  },
});
</script>
