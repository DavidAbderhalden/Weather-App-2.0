<style lang="scss" src="@/styles/atoms/Notification.scss" scoped></style>

<template>
  <div class="notification" :class="classNotification">
    <p class="heading-5">{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Notification',
  props: {
    message: {
      type: String,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const classNotification = computed(() => ({ 'notification--visible': props.visible }));
    return { classNotification };
  },
});
</script>
