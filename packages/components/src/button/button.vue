<script lang="ts" setup>
import "./style/index.less";
import {computed} from "vue";
defineOptions({ name: 'pg-button' });

type ButtonProps = {
  type?: string;
}

const buttonProps = defineProps<ButtonProps>();
const buttonStyle = computed(() => {
  return {[`pg-button--${buttonProps.type}`]: buttonProps.type}
});
</script>
<template>
  <button class="pg-button" :class="buttonStyle">
    <slot/>
  </button>
</template>
