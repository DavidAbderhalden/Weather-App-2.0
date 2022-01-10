<template>
  <div class="heading-6">Development</div>
  <C :icon="'../../assets/icons/pointer_back.svg'" iconAlign="right" label="Label" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import C from '@/components/atoms/InputField.vue';

export default defineComponent({
  name: 'Development',
  components: {
    C,
  },
  data: () => ({ count: 0 }),
});
</script>
