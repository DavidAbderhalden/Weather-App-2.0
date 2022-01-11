<template>
  <div class="heading-6">Development</div>
  <C v-for="(item, key) in data" :key="key" v-model="item.selected" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import C from '@/components/atoms/InputCheckbox.vue';

export default defineComponent({
  name: 'Development',
  components: {
    C,
  },
  data: () => ({
    data: [{ selected: false }, { selected: true }, { selected: false }, { selected: false }],
  }),
});
</script>
