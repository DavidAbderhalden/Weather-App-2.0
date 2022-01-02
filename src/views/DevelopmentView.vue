<template>
  <div class="heading-6">Development</div>
  <Button edit category="reload"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Button from '@/components/atoms/Button.vue';

export default defineComponent({
  name: 'Development',
  components: {
    Button,
  },
  data: () => ({ count: 0 }),
});
</script>
