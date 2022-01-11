<style lang="scss" src="@/styles/atoms/InputCheckbox.scss" scoped></style>

<template>
  <div @click="switchCheckbox"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
name: "InputCheckbox",
props: {
  modelValue: {
    type: Boolean,
    required: true
  }
},

export default defineComponent({
  setup(context, props) {
    //const switchCheckbox = () => context.emit('update:modelValue')
  },
});
</script>
