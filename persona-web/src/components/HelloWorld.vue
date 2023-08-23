<template>
  <h1>{{ props.msg }}</h1>

  <div class="card">
    <button type="button" @click="countStore.incrementCount(1)">
      count is {{ countStore.count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCountStore } from '../stores/countStore';

interface HelloWorldProps {
  msg: string;
}

const props = defineProps<HelloWorldProps>();
const countStore = useCountStore();
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
